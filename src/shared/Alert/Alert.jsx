import React from 'react';

import styled from 'styled-components';

const Container = styled.p`
  align-self: center;
  background-color: #fcf8e3;
  color: #8a6d3b;
  font-size: 18px;
  text-align: center;
  padding: 15px;
  border-radius: 15px;
  border: 1px solid #faebcc;
  margin-top: auto;
  margin-bottom: auto;
`;

const Alert = ({ message }) => <Container>{message}</Container>;

export default Alert;
