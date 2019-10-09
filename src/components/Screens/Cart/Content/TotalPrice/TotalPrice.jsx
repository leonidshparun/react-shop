import React from 'react';

import styled from 'styled-components';

const Text = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: black;
`;

const TotalPrice = ({ price, qnt }) => (
  <td>
    <Text>{price * qnt} €</Text>
  </td>
);

export default TotalPrice;
