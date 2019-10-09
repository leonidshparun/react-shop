import React from 'react';

import { Brand, Title } from './style';

const Description = ({ brand, title, style }) => {
  return (
    <>
      <Brand>{`${brand}`}</Brand>
      <Title>{`${title} - ${style}`}</Title>
    </>
  );
};

export default Description;
