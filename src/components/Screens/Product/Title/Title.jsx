import styled from 'styled-components';

import devices from 'style/responsive';
import { Colors } from 'style/constants';

export default styled.h1`
  font-family: 'Montserrat', Roboto, sans-serif;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 32px;
  line-height: 1.1;
  color: ${Colors.textMain};

  @media ${devices.laptopM} {
    font-size: 22px;
  }

  @media ${devices.laptopS} {
    font-size: 26px;
  }
`;
