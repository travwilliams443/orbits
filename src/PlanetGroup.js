// src/PlanetGroup.js
import React from 'react';
import Planet from './Planet';
import Orbit from './Orbit';

const PlanetGroup = ({ planets, planetPositions, selectedPlanet, handlePlanetClick, zoomScale }) => (
  <g>
    {planets.map((planet, index) => {
      const semiMajorAxis = planet.distance * 100; // Use accurate proportions for distance
      const semiMinorAxis = semiMajorAxis * (planet.semiMinorAxis / planet.semiMajorAxis);
      const orbitalOrientation = planet.orientation * Math.PI / 180; // Convert to radians
      return (
        <Orbit
          key={index}
          semiMajorAxis={semiMajorAxis}
          semiMinorAxis={semiMinorAxis}
          cx={400}
          cy={400}
          rotate={orbitalOrientation}
        />
      );
    })}
    {planetPositions.map((planet, index) => (
      <g key={index} onClick={() => handlePlanetClick(planet)}>
        <Planet color={planet.color} cx={planet.cx} cy={planet.cy} size={planet.scaledSize / zoomScale} />
        {selectedPlanet.name === planet.name && (
          <circle cx={planet.cx} cy={planet.cy} r={planet.scaledSize / zoomScale + 2} stroke="black" strokeWidth="2" fill="none" />
        )}
      </g>
    ))}
  </g>
);

export default PlanetGroup;
