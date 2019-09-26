import React from 'react';

import styled from 'styled-components';

import Filter from './Filter/Filter';
import Sort from './Sort/Sort';
import Content from './Content/Content';

const ProductsContainer = styled.div`
  display: flex;
  flex-flow: row;
  width: 100%;
`;

const Products = () => (
  <ProductsContainer>
    <Filter />
    <div>
      <Sort />
      <Content />
    </div>
  </ProductsContainer>
);

export default Products;
