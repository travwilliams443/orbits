// src/SolarSystem.js
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import * as d3 from 'd3';
import Slider from './Slider';
import Sun from './Sun';
import InfoCard from './InfoCard';
import PlanetGroup from './PlanetGroup';
import planets from './planets';

const SolarSystemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Ensures that the zoomed content stays within the container */
  width: 800px;
  height: 800px;
`;

const SolarSystem = () => {
  const svgRef = useRef();
  const gRef = useRef();
  const [timeRate, setTimeRate] = useState(1);
  const [planetPositions, setPlanetPositions] = useState([]);
  const [selectedPlanet, setSelectedPlanet] = useState(planets.find(p => p.name === 'Earth'));
  const [zoomScale, setZoomScale] = useState(1);

  useEffect(() => {
    const svg = d3.select(svgRef.current)
      .attr('width', 800)
      .attr('height', 800);

    const g = d3.select(gRef.current);

    const zoom = d3.zoom()
      .scaleExtent([0.1, 10]) // Set the minimum and maximum zoom scale
      .on('zoom', (event) => {
        g.attr('transform', event.transform);
        setZoomScale(event.transform.k);
      });

    svg.call(zoom);

    const width = +svg.attr('width');
    const height = +svg.attr('height');
    const centerX = width / 2;
    const centerY = height / 2;

    const updatePositions = () => {
      const now = Date.now() / 1000; // Convert to seconds
      const newPositions = planets.map(d => {
        const semiMajorAxis = d.distance * 100; // Use accurate proportions for distance
        const semiMinorAxis = semiMajorAxis * (d.semiMinorAxis / d.semiMajorAxis);
        const angle = (now / (d.orbitalPeriod / timeRate)) * 2 * Math.PI;
        const orbitalOrientation = d.orientation * Math.PI / 180; // Convert to radians
        const cx = centerX + semiMajorAxis * Math.cos(angle) * Math.cos(orbitalOrientation) - semiMinorAxis * Math.sin(angle) * Math.sin(orbitalOrientation);
        const cy = centerY + semiMajorAxis * Math.cos(angle) * Math.sin(orbitalOrientation) + semiMinorAxis * Math.sin(angle) * Math.cos(orbitalOrientation);
        return {
          ...d,
          cx,
          cy,
          scaledSize: Math.pow(d.radius, 0.3) // Adjust scaling factor here
        };
      });
      setPlanetPositions(newPositions);
    };

    const timer = d3.timer(updatePositions);
    return () => timer.stop();
  }, [timeRate]);

  const handlePlanetClick = (planet) => {
    setSelectedPlanet(planet);
  };

  return (
    <SolarSystemContainer>
      <Slider timeRate={timeRate} setTimeRate={setTimeRate} />
      <SvgContainer ref={svgRef}>
        <svg width={800} height={800}>
          <g ref={gRef}>
            <Sun cx={400} cy={400} r={10} />
            <PlanetGroup
              planets={planets}
              planetPositions={planetPositions}
              selectedPlanet={selectedPlanet}
              handlePlanetClick={handlePlanetClick}
              zoomScale={zoomScale}
            />
          </g>
        </svg>
      </SvgContainer>
      <InfoCard planet={selectedPlanet} />
    </SolarSystemContainer>
  );
};

export default SolarSystem;
