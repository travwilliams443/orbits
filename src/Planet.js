// src/Planet.js
import React from 'react';
import styled from 'styled-components';

const PlanetCircle = styled.circle`
  fill: ${props => props.color};
`;

const Planet = ({ cx, cy, color, size }) => (
  <PlanetCircle cx={cx} cy={cy} r={size} fill={color} />
);

export default Planet;
