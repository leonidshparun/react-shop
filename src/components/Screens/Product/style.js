import styled from 'styled-components';

import devices from 'style/responsive';
import { Colors } from 'style/constants';

export const ProductContainer = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: 600px 380px;
  grid-template-rows: auto 110px;
  grid-column-gap: 10px;
  grid-template-areas:
    'sld det'
    'sld fch';

  @media ${devices.laptopM} {
    grid-template-columns: 500px 285px;
  }

  @media ${devices.laptopS} {
    grid-template-columns: 90vw;
    grid-template-rows: auto auto auto;
    grid-row-gap: 20px;
    grid-template-areas:
      'sld'
      'det'
      'fch';
  }
`;

export const DetailsWrapper = styled.div`
  grid-area: det;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;

  @media ${devices.laptopS} {
    justify-content: space-between;
  }
`;

export const TitleWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const PricesWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
  border-bottom: 1px solid ${Colors.border};
`;

export const SizesWrapper = styled.div`
  /* width: 100%; */
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  grid-area: btn;
  margin-top: auto;
  @media ${devices.laptopS} {
    margin: 0;
  }
`;

export const SliderWrapper = styled.div`
  width: 100%;
  grid-area: sld;
`;

export const FeaturesWrapper = styled.div`
  grid-area: fch;
`;
