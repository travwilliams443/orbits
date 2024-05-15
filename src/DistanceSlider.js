// src/DistanceSlider.js
import React from 'react';
import styled from 'styled-components';

const SliderContainer = styled.div`
  margin: 20px;
`;

const DistanceSlider = ({ distanceScale, setDistanceScale }) => {
  const handleSliderChange = (event) => {
    setDistanceScale(event.target.value);
  };

  return (
    <SliderContainer>
      <label htmlFor="distanceScale">Distance Scale: </label>
      <input
        id="distanceScale"
        type="range"
        min="0.1"
        max="5"
        step="0.1"
        value={distanceScale}
        onChange={handleSliderChange}
      />
      <span>{distanceScale}x</span>
    </SliderContainer>
  );
};

export default DistanceSlider;
