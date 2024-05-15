// src/Sun.js
import React from 'react';
import styled from 'styled-components';

const SunCircle = styled.circle`
  fill: yellow;
  stroke: orange;
  stroke-width: 2;
`;

const Sun = ({ cx, cy, r }) => <SunCircle cx={cx} cy={cy} r={r} />;

export default Sun;
