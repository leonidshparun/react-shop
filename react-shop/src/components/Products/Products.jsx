import React from 'react';

import styled from 'styled-components';

import Filter from './Filter/Filter';

const ProductsContainer = styled.div`
  display: flex;
  flex-flow: row;
  width: 100%;
`;

const Products = () => (
  <ProductsContainer>
    <Filter />
  </ProductsContainer>
);

export default Products;
