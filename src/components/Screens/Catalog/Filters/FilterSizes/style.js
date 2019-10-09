import { Colors } from 'style/constants';

import styled from 'styled-components';

export const Container = styled.div`
  grid-area: sz;
`;

export const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${Colors.border};
  padding: 3px;
  border-radius: 15px;
  padding-left: 10px;
`;

export const SelectAllButton = styled.button`
  border: ${props => (!props.active ? '1px solid #9e9e9e' : '1px dashed grey')};
  right: 20px;
  top: 20px;
  width: 25px;
  height: 25px;
  margin-left: auto;
  margin-right: 10px;
  border-radius: 15px;
`;

export const ToggleVisibilityButton = styled.button`
  width: 25px;
  height: 25px;
`;

export const FilterOptions = styled.div`
  position: absolute;
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  opacity: ${props => (props.show ? 1 : 0)};
  transition: opacity 0.5s ease;
  left: 0;
  width: 100%;
  min-height: 40px;
  padding: 5px;
  box-shadow: 0 15px 15px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 20px 20px;
  background: ${Colors.backgroundMain};
`;
