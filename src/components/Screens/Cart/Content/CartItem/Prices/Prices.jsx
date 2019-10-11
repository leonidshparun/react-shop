import styled from 'styled-components';

import React from 'react';

import Tag from 'shared/Tag/Tag';

const Price = styled.p`
  font-family: Roboto, sans-serif;
  padding: 4px;
  white-space: nowrap;
  font-size: ${props => (props.crossed ? '14px' : '18px')};
  color: ${props => (props.crossed ? '#607D8B' : '#222')};
  text-decoration: ${props => (props.crossed ? 'line-through' : 'none')};
`;

const Prices = ({ price, discount }) => {
  const withDiscount =
    discount !== 0 ? (
      <>
        <Price crossed>{`${price.toFixed(2)} €`}</Price>
        <Tag discount={discount} def />
      </>
    ) : null;

  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center'
      }}
    >
      {withDiscount}
      <Price>{`${(price * (1 - discount / 100)).toFixed(2)} €`}</Price>
    </div>
  );
};

export default Prices;
