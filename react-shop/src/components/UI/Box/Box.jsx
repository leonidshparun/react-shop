import styled from 'styled-components';

const Box = styled.div`
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
    border-top: ${props => (props.borders.top ? '1px solid #6477b9' : null)};
    border-bottom: ${props =>
      props.borders.bottom ? '1px solid #6477b9' : null};
    -webkit-transform: scale3d(0, 1, 1);
    transform: scale3d(0, 1, 1);
  }
  ::after {
    border-left: ${props => (props.borders.left ? '1px solid #6477b9' : null)};
    border-right: ${props =>
      props.borders.right ? '1px solid #6477b9' : null};
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
