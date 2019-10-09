import React from 'react';

import Price from './style';

const Prices = ({ price, discount }) =>
  discount === 0 ? (
    <div>
      <Price>{`${price.toFixed(2)} €`}</Price>
    </div>
  ) : (
    <div>
      <Price>{`${(price * (1 - discount / 100)).toFixed(2)} €`}</Price>
      <Price crossed>{`${price.toFixed(2)} €`}</Price>
    </div>
  );

export default Prices;
