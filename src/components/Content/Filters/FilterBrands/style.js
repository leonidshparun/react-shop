import { Colors } from 'style/constants';

import styled from 'styled-components';

export const Container = styled.div`
  grid-area: mn;
`;

export const Select = styled.select`
  font-size: 14px;
  padding: 5px;
  border: 1px solid ${Colors.border};
  height: 33px;
  width: 100%;
  border-radius: 15px;
`;
