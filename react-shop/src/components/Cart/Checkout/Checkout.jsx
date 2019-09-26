import React from 'react';

import { Container, BuyButton } from './Checkout.styled';

const Checkout = ({ total }) => (
  <Container>
    <h3>Checkout:</h3>
    <p>
      Total: <span>{total.price} €</span>
    </p>
    <BuyButton active={total.price}>BUY</BuyButton>
  </Container>
);

export default Checkout;
