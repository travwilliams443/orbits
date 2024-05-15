// src/InfoCard.js
import React from 'react';
import styled from 'styled-components';

const InfoCardContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: white;
  padding: 10px;
  border: 1px solid #ccc;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const InfoCard = ({ planet }) => (
  <InfoCardContainer>
    <h3>{planet.name}</h3>
    <p>Orbital Period: {planet.orbitalPeriod} days</p>
    <p>Semi-Major Axis: {planet.semiMajorAxis}</p>
    <p>Semi-Minor Axis: {planet.semiMinorAxis}</p>
    <p>Radius: {planet.radius} km</p>
    <p>Distance from Sun: {planet.distance} AU</p>
  </InfoCardContainer>
);

export default InfoCard;
