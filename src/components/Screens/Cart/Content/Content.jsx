import React from 'react';

import styled from 'styled-components';
import uniqid from 'uniqid';

import CartItem from './CartItem/CartItem';

const Container = styled.tbody`
  font-size: 14px;
  color: #666;

  td {
    border: 1px solid #ddd;
    padding: 7px 10px;
    border-width: 1px 0;
    vertical-align: middle;
    text-align: center;
    min-width: 60px;
  }
`;

const Content = ({ items }) => (
  <Container>
    {items.map((product, idx) => {
      return <CartItem key={uniqid()} product={product} idx={idx} />;
    })}
  </Container>
);

export default Content;
