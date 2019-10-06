import React from 'react';

import styled from 'styled-components';

const Price = styled.p`
  grid-area: ${props => (!props.crossed ? 'price' : 'discount')};
  font-size: 16px;
  font-weight: ${props => (props.crossed ? 400 : 600)};
  color: ${props => (props.crossed ? '#607D8B' : '#222')};
  text-decoration: ${props => (props.crossed ? 'line-through' : 'none')};
  width: 100%;
  text-align: right;
`;

const Prices = ({ price, discount }) => {
  return discount === 0 ? (
    <div>
      <Price>{`${price.toFixed(2)} €`}</Price>
    </div>
  ) : (
    <div>
      <Price>{`${(price * (1 - discount / 100)).toFixed(2)} €`}</Price>
      <Price crossed>{`${price.toFixed(2)} €`}</Price>
    </div>
  );
};

export default Prices;
