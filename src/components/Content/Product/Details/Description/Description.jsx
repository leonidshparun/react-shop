import React from 'react';

import styled from 'styled-components';

import devices from 'utils/responsive';

const Brand = styled.p`
  grid-area: brand;
  font-weight: 600;
  text-align: left;
  font-size: 18px;
  margin: 3px;
  font-weight: 800;
  font-family: 'Montserrat', Roboto, sans-serif;
`;

const Title = styled.p`
  grid-area: title;
  font-weight: 400;
  text-align: left;
  font-size: 12px;
  color: grey;
  margin: 3px;
  font-family: Roboto, sans-serif;

  @media ${devices.tablet} {
    font-size: 11px;
  }

  @media ${devices.mobileL} {
    font-size: 10px;
  }

  @media ${devices.mobileS} {
    font-size: 12px;
  }
`;

const Description = ({ brand, title, style }) => {
  return (
    <>
      <Brand>{`${brand}`}</Brand>
      <Title>{`${title} - ${style}`}</Title>
    </>
  );
};

export default Description;
