import styled from 'styled-components';
import devices from 'style/responsive';

export default styled.div`
  display: grid;
  grid-template-columns: repeat(4, 300px);
  grid-column-gap: 10px;
  grid-row-gap: 20px;
  justify-items: center;

  @media ${devices.laptopM} {
    grid-template-columns: repeat(3, 290px);
  }

  @media ${devices.laptopS} {
    grid-template-columns: repeat(2, 290px);
    grid-column-gap: 0;
  }

  @media ${devices.mobileL} {
    grid-template-columns: repeat(2, 210px);
  }

  @media ${devices.mobileS} {
    grid-template-columns: repeat(1, 300px);
  }
`;
