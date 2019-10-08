import styled from 'styled-components';

import { Colors } from 'style/constants';

const Button = styled.button`
  background: ${props =>
    props.active ? Colors.buttonActive : Colors.buttonDisabled};
  width: ${props => (props.width ? props.width : '100%')};
  height: ${props => (props.height ? props.height : '100%')};
  color: #fff;
  cursor: pointer;
  transition: background-color 0.2s;

  :hover {
    background: ${Colors.buttonHover};
  }
`;

export default Button;
