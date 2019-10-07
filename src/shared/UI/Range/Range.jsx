import React from 'react';

import styled from 'styled-components';

const Slider = styled.section`
  position: relative;
  height: 6px;
  text-align: center;
  width: 90%;
`;

const Input = styled.input`
  pointer-events: none;
  position: absolute;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  border: none;
  background: #f1efef;
  overflow: hidden;
  left: 0;
  top: 0;
  width: 100%;
  outline: none;
  height: 3px;
  margin: 0;
  overflow: visible;

  ::-webkit-slider-thumb {
    pointer-events: all;
    position: relative;
    z-index: 1;
    outline: 0;
    -webkit-appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: black;
    border: 3px solid white;
  }
`;

const Range = ({ init, values, update }) => {
  const [min, max] = init;
  return (
    <Slider>
      <Input
        onChange={e => update.max(e)}
        value={values.max}
        min={min}
        max={max}
        step="5"
        type="range"
      />
      <Input
        onChange={e => update.min(e)}
        value={values.min}
        min={min}
        max={max}
        step="5"
        type="range"
      />
    </Slider>
  );
};

export default Range;
