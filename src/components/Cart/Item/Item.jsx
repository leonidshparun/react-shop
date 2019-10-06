import React from 'react';

import { Container, Description, Price } from './Item.styled';

const Item = ({ item, product, remove }) => (
  <Container>
    <img
      src={`../img/item${product.id}.jpg`}
      alt={product.title}
      width="60px"
    />
    <Description>
      <p>{`${product.brand} ${product.title} - ${product.style}`}</p>
      <p>Size: {item.size}</p>
    </Description>
    <Price>{product.price} €</Price>
    <button type="button" onClick={remove}>
      X
    </button>
  </Container>
);

export default Item;
