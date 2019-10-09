import React from 'react';

import uniqid from 'uniqid';

import Product from './Product/Product';

import Container from './style';

const ProductList = ({ content }) => (
  <Container>
    {content.map(product => (
      <Product key={uniqid()} data={product} />
    ))}
  </Container>
);

export default ProductList;
