import React from 'react';

import uniqid from 'uniqid';
import styled from 'styled-components';

import data from 'static/products/products.json';

import Item from '../Item/Item';

export const Container = styled.div`
  height: calc(100vh - 160px);
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Items = ({ items, remove, changeTotal }) => (
  <Container>
    {items.map((item, idx) => {
      const product = data.products[item.id - 1];
      changeTotal(product.price);
      return (
        <Item
          remove={() => remove(idx)}
          key={uniqid()}
          product={product}
          item={item}
        />
      );
    })}
  </Container>
);

export default Items;
