import React from 'react';

import styled from 'styled-components';
import uniqid from 'uniqid';

import devices from 'utils/responsive';
import Product from '../Product/Product';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 300px);
  grid-column-gap: 10px;
  grid-row-gap: 20px;
  justify-items: center;

  @media ${devices.laptopM} {
    grid-template-columns: repeat(3, 290px);
  }

  @media ${devices.laptopS} {
    grid-template-columns: repeat(2, 290px);
    grid-column-gap: 0;
  }

  @media ${devices.mobileL} {
    grid-template-columns: repeat(2, 210px);
  }

  @media ${devices.mobileS} {
    grid-template-columns: repeat(1, 300px);
  }
`;

const ProductList = ({ content }) => (
  <Container>
    {content.map(product => (
      <Product key={uniqid()} data={product} />
    ))}
  </Container>
);

export default ProductList;
