import styled from 'styled-components';

export const CartContainer = styled.div`
  width: 460px;
  background-color: #607d8b;
  height: 100%;
  position: fixed;
  top: 0;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  right: ${props => (props.show ? 0 : '-460px')};
  transition: right 0.2s;
`;

export const ToggleIcon = styled.button`
  position: absolute;
  left: -50px;
  top: 0;
  height: 50px;
  width: 50px;
  background-color: gold;
  font-size: 30px;

  p {
    background-color: #ff5722;
    font-size: 16px;
    color: white;
    position: absolute;
    bottom: -2px;
    left: -2px;
    width: 18px;
    height: 18px;
  }
`;
