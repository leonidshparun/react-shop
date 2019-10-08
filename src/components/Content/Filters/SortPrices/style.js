import { Colors } from 'style/constants';

import styled from 'styled-components';

export const Container = styled.div`
  grid-area: st;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${Colors.border};
  border-radius: 15px;
  padding: 3px 10px;
  cursor: pointer;
`;

export const Icon = styled.img`
  transform: ${props => (props.active ? `rotate(180deg)` : null)};
  transition: transform 0.5s;
`;

export const SortButton = styled.button`
  width: 25px;
  height: 25px;
`;
