import React from 'react';

import Tag from 'shared/Tag/Tag';

import Price from './style';

const Prices = ({ price, discount }) => {
  const withDiscount =
    discount !== 0 ? (
      <div style={{ position: 'relative', display: 'flex' }}>
        <Tag discount={discount} def />
        <Price crossed>{`${(price * (1 - discount / 100)).toFixed(
          2
        )} €`}</Price>
      </div>
    ) : null;

  //
  return (
    <div>
      {withDiscount}
      <Price>{`${price.toFixed(2)} €`}</Price>
    </div>
  );
};

export default Prices;
