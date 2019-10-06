import React from 'react';

import styled from 'styled-components';
import uniqid from 'uniqid';
import data from 'static/products/products.json';

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
    vertical-align: middle;
    padding: 7px 10px;
    border-width: 1px 0;
    text-align: center;
    min-width: 40px;
    max-width: 170px;
  }
`;

const Heading = ({ items, total, remove }) => {
  items.push(...data.products.slice(1, 6));
  return (
    <Container>
      {items.map((item, idx) => {
        const product = data.products[item.id - 1];
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
};

export default Heading;
