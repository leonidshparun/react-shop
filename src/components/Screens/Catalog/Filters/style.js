import styled from 'styled-components';

import devices from 'style/responsive';
import { zIndex } from 'style/constants';

export const Container = styled.div`
  padding: 20px;
  position: relative;
  display: grid;
  justify-content: center;
  z-index: ${zIndex.filter};

  grid-template-columns: auto 190px 220px 170px 150px;
  grid-gap: 10px;
  grid-template-areas:
    'sc sc aa aa aa'
    'ti mn pr sz st';

  @media ${devices.laptopM} {
    grid-template-columns: auto 170px 200px 140px 140px;
  }

  @media ${devices.laptopS} {
    grid-template-columns: auto 180px auto;
    grid-template-areas:
      'sc st st'
      'ti mn mn'
      'sz pr pr';
  }

  @media ${devices.mobileL} {
    width: 100%;
    grid-template-columns: 60% 30px;
    grid-template-areas:
      'sc sc'
      'st st'
      'ti ti'
      'mn mn'
      'pr pr'
      'sz sz';
  }

  @media ${devices.mobileS} {
    width: 100%;
    grid-template-columns: 80% 30px;
    grid-template-areas:
      'sc sc'
      'st st'
      'ti ti'
      'mn mn'
      'pr pr'
      'sz sz';
  }
`;

export const Title = styled.p`
  grid-area: ti;
  font-size: 16px;
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;
`;
