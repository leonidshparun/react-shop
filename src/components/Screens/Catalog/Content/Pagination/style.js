import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
`;

export const NavButton = styled.button`
  margin: 5px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  border-radius: 15px;
  border: ${props => (props.active ? '1px solid #c0c0c0' : 'none')};
`;
