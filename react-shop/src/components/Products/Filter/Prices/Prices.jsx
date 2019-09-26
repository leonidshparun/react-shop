import React from 'react';

import styled from 'styled-components';

import Wrapper from '../Filter.styled';

const Container = styled(Wrapper)`
  input {
    width: 60px;
    font-size: 16px;
    padding: 5px;
  }

  label {
    width: 60px;
    font-size: 18px;
    margin: 5px;
  }

  div {
    display: flex;
    justify-content: center;
  }
`;

const Prices = ({ prices, change }) => (
  <Container>
    <p>Price, €:</p>
    <div>
      <label htmlFor="from">
        from:
        <input
          id="from"
          type="text"
          value={prices[0]}
          onChange={e => change(e, 0)}
        />
      </label>
      <label htmlFor="to">
        to:
        <input
          id="to"
          type="text"
          value={prices[1]}
          onChange={e => change(e, 1)}
        />
      </label>
    </div>
  </Container>
);

export default Prices;
