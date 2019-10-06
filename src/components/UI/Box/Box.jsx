import styled from 'styled-components';

const mainColor = '1px solid #ccc';
const hoverColor = '1px solid #6477b9';

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
  :hover {
    color: #6477b9;
  }
  ::before,
  ::after {
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    -webkit-transform-origin: center;
    transform-origin: center;
  }
  ::before {
    border-top: ${props => (props.borders.top ? hoverColor : null)};
    border-bottom: ${props => (props.borders.bottom ? hoverColor : null)};
    -webkit-transform: scale3d(0, 1, 1);
    transform: scale3d(0, 1, 1);
  }
  ::after {
    border-left: ${props => (props.borders.left ? hoverColor : null)};
    border-right: ${props => (props.borders.right ? hoverColor : null)};
    -webkit-transform: scale3d(1, 0, 1);
    transform: scale3d(1, 0, 1);
  }
  :hover::before,
  :hover::after {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
    transition: -webkit-transform 0.5s;
    transition: transform 0.5s;
    transition: transform 0.5s, -webkit-transform 0.5s;
  }
`;

export default Box;
