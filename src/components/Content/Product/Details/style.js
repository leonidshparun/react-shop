import styled from 'styled-components';
import devices from 'style/responsive';

export default styled.div`
  display: grid;
  grid-template-areas:
    'brand brand'
    'title price'
    'title discount';
  grid-gap: 3px;
  width: 100%;
  padding: 3px;
  justify-items: flex-start;
  grid-template-columns: auto 65px;
  grid-template-rows: auto 23px 23px;

  @media ${devices.mobileS} {
    height: 70px;
  }
`;
