import React from 'react';

import devices from 'style/responsive';
import styled from 'styled-components';

import secure from 'static/icons/locked.png';
import safety from 'static/icons/stopwatch.png';
import delivery from 'static/icons/truck.png';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;

  @media ${devices.laptopS} {
    flex-flow: column;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 10px;
  img {
    transition: all 0.3s ease-in-out;
  }

  img:hover {
    transform: translateY(-5px);
  }
`;

const Features = () => (
  <Wrapper>
    <Container>
      <img width={30} src={delivery} alt="Shipping Worldwide" />
      <p>Shipping Worldwide</p>
    </Container>
    <Container>
      <img width={30} src={safety} alt="Fast and reliable delivery" />
      <p>Fast and reliable delivery</p>
    </Container>
    <Container>
      <img width={30} src={secure} alt="100% secure payment" />
      <p>100% secure payment</p>
    </Container>
  </Wrapper>
);

export default Features;
