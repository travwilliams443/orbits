// src/Slider.js
import React from 'react';
import styled from 'styled-components';

const SliderContainer = styled.div`
  margin: 20px;
`;

const Slider = ({ timeRate, setTimeRate }) => {
  const handleSliderChange = (e) => {
    const value = parseFloat(e.target.value);
    const logValue = Math.pow(10, value);
    setTimeRate(logValue);
  };

  return (
    <SliderContainer>
      <label htmlFor="timeRate">Time Rate: </label>
      <input
        id="timeRate"
        type="range"
        min="-1" // corresponds to 0.1x
        max="3"  // corresponds to 1000x
        step="0.1"
        value={Math.log10(timeRate)}
        onChange={handleSliderChange}
      />
      <span>{timeRate.toFixed(2)}x</span>
    </SliderContainer>
  );
};

export default Slider;
