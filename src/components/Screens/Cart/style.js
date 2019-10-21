import styled from 'styled-components';

import { Colors } from 'style/constants';

export const CartContainer = styled.div`
  background-color: ${Colors.backgroundMain};
  margin: 10px;
`;

export const Table = styled.table`
  border-collapse: collapse;
`;

export const CartHeading = styled.p`
  font-size: 30px;
  padding: 14px 0;
`;

export const OrderButtonWrapper = styled.div`
  float: right;
  margin-top: 15px;
`;
