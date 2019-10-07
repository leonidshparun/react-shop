import styled from 'styled-components';

import { Colors } from 'style/constants';

const Button = styled.button`
  background: ${props =>
    props.active ? Colors.buttonActive : Colors.buttonDisabled};
  height: 40px;
  width: ${props => props.width};
  height: ${props => props.height};
  color: #fff;
  cursor: pointer;
  transition: background-color 0.2s;

  :hover {
    background: ${props => (props.active ? Colors.buttonHover : '')};
  }
`;

export default Button;
