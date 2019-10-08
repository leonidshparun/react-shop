import { Colors } from 'style/constants';

import styled from 'styled-components';

export const Container = styled.div`
  grid-area: sc;
`;

export const SearchBar = styled.input`
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${Colors.border};
  padding: 3px;
  height: 33px;
  width: 100%;
  border-radius: 15px;
  padding-left: 10px;
`;
