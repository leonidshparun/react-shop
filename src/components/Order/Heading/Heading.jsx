import React from 'react';

import styled from 'styled-components';

const Container = styled.thead`
  border-top: 1px solid #ddd;
  line-height: 1.4;
  td {
    color: #666;
    font-weight: bold;
    padding: 8px;
    background: #fff;
    vertical-align: middle;
    text-transform: uppercase;
    font-size: 13px;
    text-align: center;
  }
`;

const Heading = () => (
  <Container>
    <tr>
      <td>PRODUCT</td>
      <td>DESCRIPTION</td>
      <td>UNIT PRICE</td>
      <td>QTY</td>
      <td> </td>
      <td>TOTAL</td>
    </tr>
  </Container>
);

export default Heading;
