import styled from 'styled-components';

import devices from 'style/responsive';

export default styled.p`
  background: #ff4242;
  color: #fff;
  padding: 4px;
  font-weight: 600;
  text-align: center;
  position: ${props => (props.def ? 'static' : 'absolute')};
  top: 20px;
  left: -2px;
  width: 60px;

  @media ${devices.tablet} {
    top: 10px;
  }
`;
