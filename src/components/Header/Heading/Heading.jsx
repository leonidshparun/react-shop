import React from 'react';

import fb from 'static/icons/socials/facebook.png';
import ig from 'static/icons/socials/instagram.png';
import tw from 'static/icons/socials/twitter.png';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  justify-content: space-around;
  background: #222;
  color: white;
  img {
    filter: invert(1);
  }
`;

const Socials = styled.div`
  display: flex;

  img {
    margin: 3px;
  }
`;

const Slogan = styled.p``;
const AuthForm = styled.div``;

const Heading = ({ isFull }) => {
  return (
    <Container isFull={isFull}>
      <Socials>
        <a href="/">
          <img src={fb} alt="facebook" width={16} />
        </a>
        <a href="/">
          <img src={ig} alt="instagramm" width={16} />
        </a>
        <a href="/">
          <img src={tw} alt="twitter" width={16} />
        </a>
      </Socials>
      <Slogan>Shipping Worldwide</Slogan>
      <AuthForm>
        <a href="/">Sign-in</a>
      </AuthForm>
    </Container>
  );
};

export default Heading;
