import React from 'react';

import styled from 'styled-components';
import devices from 'utils/responsive';

import Description from './Description/Description';
import Prices from './Prices/Prices';

const Container = styled.div`
  display: grid;
  grid-template-areas:
    'brand brand'
    'title price'
    'title discount';
  grid-gap: 3px;
  width: 100%;
  padding: 3px;
  justify-items: flex-start;
  grid-template-columns: auto 65px;
  grid-template-rows: auto 23px 23px;

  @media ${devices.mobileS} {
    height: 70px;
  }
`;

const Details = ({ price, discount, brand, title, style }) => {
  return (
    <Container>
      <Description brand={brand} title={title} style={style} />
      <Prices price={price} discount={discount} />
    </Container>
  );
};

export default Details;
