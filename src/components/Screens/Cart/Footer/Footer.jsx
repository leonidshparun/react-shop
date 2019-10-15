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
    font-size: 20px;
    text-align: center;
    empty-cells: hide;
    min-width: 100px;
  }
`;

const Footer = ({ total }) => (
  <Container>
    <tr>
      <td />
      <td />
      <td />
      <td />
      <td>Total:</td>
      <td>{total.price.toFixed(2)} €</td>
    </tr>
  </Container>
);

export default Footer;
