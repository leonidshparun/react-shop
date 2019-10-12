import React from 'react';

import styled from 'styled-components';
import devices from 'style/responsive';

import Logo from 'shared/Logo/Logo';
import Links from './Links/Links';

const Wrapper = styled.div`
  max-width: 60vw;
  margin: 0 auto;
  width: 100%;

  @media ${devices.laptopS} {
    max-width: 85vw;
  }
`;

const LogoWrapper = styled.div`
  filter: invert(1);
  padding: 10px 40px;
  @media ${devices.laptopS} {
    text-align: center;
    padding: 10px 0;
  }
`;

const LinksWrapper = styled.div`
  filter: invert(1);
  padding: 10px 40px;
`;

const Information = () => (
  <Wrapper>
    <LogoWrapper>
      <Logo width={240} />
    </LogoWrapper>
    <LinksWrapper>
      <Links />
    </LinksWrapper>
  </Wrapper>
);

export default Information;
