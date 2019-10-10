import React from 'react';

import styled from 'styled-components';
import uniqid from 'uniqid';

import Image from './Image/Image';
import Description from './Description/Description';
import UnitPrice from './UnitPrice/UnitPrice';
import Quantity from './Quantity/Quantity';
import Remove from './Remove/Remove';
import TotalPrice from './TotalPrice/TotalPrice';

const Container = styled.tbody`
  font-size: 14px;
  color: #666;

  td {
    border: 1px solid #ddd;
    padding: 7px 10px;
    border-width: 1px 0;
    vertical-align: middle;
    text-align: left;
    min-width: 40px;
    max-width: 170px;
  }
`;

const Content = ({ items, total, remove }) => (
  <Container>
    {items.map((product, idx) => {
      total(product.price);
      const { id, title, brand, style, price } = product;
      return (
        <tr key={uniqid()}>
          <Image id={id} title={title} />
          <Description brand={brand} title={title} style={style} size={40} />
          <UnitPrice price={price} />
          <Quantity qnt={1} />
          <Remove remove={remove} idx={idx} />
          <TotalPrice price={price} qnt={1} />
        </tr>
      );
    })}
  </Container>
);

export default Content;
