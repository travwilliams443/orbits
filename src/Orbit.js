// src/Orbit.js
import React from 'react';
//import styled from 'styled-components';

const Orbit = ({ semiMajorAxis, semiMinorAxis, cx, cy, rotate }) => {
  return (
    <ellipse
      cx={cx}
      cy={cy}
      rx={semiMajorAxis}
      ry={semiMinorAxis}
      stroke="#ccc"
      fill="none"
      transform={`rotate(${rotate * 180 / Math.PI} ${cx} ${cy})`} // Convert radians to degrees for rotation
    />
  );
};

export default Orbit;
