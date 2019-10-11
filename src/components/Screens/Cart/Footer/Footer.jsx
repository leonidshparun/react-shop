import React from 'react';

import { Colors } from 'style/constants';
import styled from 'styled-components';

const Container = styled.tfoot`
  border-bottom: 1px solid ${Colors.border};
  line-height: 1.4;

  td {
    color: ${Colors.textMain};
    font-weight: bold;
    padding: 8px;
    vertical-align: middle;
    text-transform: uppercase;
    font-size: 13px;
    text-align: center;
  }
`;

const Footer = ({ total }) => (
  <Container>
    <tr>
      <td>Price:</td>
      <td>{total.price.toFixed(2)}</td>
      <td>Discount:</td>
      <td>{total.discount.toFixed(2)}</td>
    </tr>
  </Container>
);

export default Footer;
