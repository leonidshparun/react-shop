import styled from 'styled-components';

import { Colors } from 'style/constants';

const mainColor = `1px solid ${Colors.border}`;
const hoverColor = `1px solid ${Colors.borderHover}`;

const Box = styled.div`
  border-top: ${props => (props.borders.top ? mainColor : null)};
  border-bottom: ${props => (props.borders.bottom ? mainColor : null)};
  border-left: ${props => (props.borders.left ? mainColor : null)};
  border-right: ${props => (props.borders.right ? mainColor : null)};

  ::before,
  ::after {
    box-sizing: inherit;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
  }

  ::before,
  ::after {
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transform-origin: center;
  }
  ::before {
    border-top: ${props => (props.borders.top ? hoverColor : null)};
    border-bottom: ${props => (props.borders.bottom ? hoverColor : null)};
    transform: scale3d(0, 1, 1);
  }
  ::after {
    border-left: ${props => (props.borders.left ? hoverColor : null)};
    border-right: ${props => (props.borders.right ? hoverColor : null)};
    transform: scale3d(1, 0, 1);
  }
  :hover::before,
  :hover::after {
    transform: scale3d(1, 1, 1);
    transition: transform 0.5s;
  }
`;

export default Box;
