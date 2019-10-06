import React from 'react';

import styled from 'styled-components';

const Button = styled.button`
  width: 20px;
  height: 20px;
  font-size: 12px;
  border: 1px solid black;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Remove = ({ remove, idx }) => (
  <td>
    <Button type="button" onClick={() => remove(idx)}>
      X
    </Button>
  </td>
);

export default Remove;
