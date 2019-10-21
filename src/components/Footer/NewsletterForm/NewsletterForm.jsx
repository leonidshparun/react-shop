import React, { useState } from 'react';

import styled from 'styled-components';

import devices from 'style/responsive';

import Server from 'server/server';

import { connect } from 'react-redux';
import { showPopup } from 'store/actions/actions';

import { Colors } from 'style/constants';

const Container = styled.section`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: 210px;
`;

const Heading = styled.p`
  font-family: Roboto, sans-serif;
  font-weight: ${props => (props.sub ? '500' : '800')};
  font-size: ${props => (props.sub ? '18px' : '30px')};
  letter-spacing: -1px;
  color: ${props => (props.sub ? '#7e828c' : '#fff')};
  margin: 3px;
`;

const Form = styled.form`
  display: flex;
  margin: 10px;
  font-family: 'Montserrat', Roboto, sans-serif;
  height: 44px;

  @media ${devices.mobileM} {
    flex-flow: column;
    height: auto;
    button {
      height: 44px;
    }
    input {
      height: 44px;
      text-align: center;
    }
  }

  input {
    font-size: 15px;
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
    line-height: 27px;
    border: 1px solid #f5f5f5;
    padding: 0 20px 0 20px;
  }

  button {
    user-select: none;
    background: #222222;
    color: #fff;
    text-align: center;
    padding: 0 40px;
    outline: none;
    font-weight: 500;
    font-size: 14px;

    :hover {
      background: ${Colors.buttonHover};
    }
  }
`;

const NewsletterFormConnected = ({ popup }) => {
  const [input, updateInput] = useState('');

  const addMail = e => {
    e.preventDefault();
    popup();
    Server.addEmailSubscription({ mail: input });
  };

  return (
    <Container>
      <Heading>NEWSLETTER</Heading>
      <Heading sub>Don`t miss anything</Heading>
      <Form onSubmit={e => addMail(e)}>
        <input
          type="email"
          placeholder="Enter your e-mail"
          onInput={e => updateInput(e.target.value)}
        />
        <button type="submit">SIGN UP</button>
      </Form>
    </Container>
  );
};

const mapDispatchToProps = dispatch => ({
  popup: () => dispatch(showPopup('THANKS'))
});

export default connect(
  null,
  mapDispatchToProps
)(NewsletterFormConnected);
