import React from 'react';

import styled from 'styled-components';

const Button = styled.button`
  width: 20px;
  height: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  margin: 3px;
`;

const Quantity = ({ value, update }) => {
  return (
    <>
      <p>{value}</p>
      <Button type="button" onClick={update.remove}>
        -
      </Button>
      <Button type="button" onClick={update.add}>
        +
      </Button>
    </>
  );
};

export default Quantity;
