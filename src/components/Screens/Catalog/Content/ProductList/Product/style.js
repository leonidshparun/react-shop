import styled from 'styled-components';

import devices from 'style/responsive';

import Box from 'shared/UI/Box/Box';

export const ProductContainer = styled(Box)`
  height: 300px;
  width: 270px;
  display: flex;
  flex-flow: column;
  align-items: center;
  user-select: none;
  transition: all 0.3s;
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-flow: column;

  @media ${devices.tablet} {
    height: 255px;
    width: 210px;
  }

  @media ${devices.mobileL} {
    height: 230px;
    width: 180px;
  }

  @media ${devices.mobileS} {
    width: 260px;
    height: 270px;
  }

  background: white;
  img {
    transition: all 0.3s ease-in-out;
  }

  :hover {
    img {
      box-shadow: 0 7px 10px rgba(0, 0, 0, 0.25);
    }
  }
`;

export const Image = styled.img`
  width: 270px;

  @media ${devices.tablet} {
    width: 210px;
  }

  @media ${devices.mobileL} {
    width: 180px;
  }

  @media ${devices.mobileS} {
    width: 250px;
  }
`;
