import React from 'react';

import styled from 'styled-components';

const AlertContainer = styled.p`
  align-self: center;
  background-color: #fcf8e3;
  color: #8a6d3b;
  font-size: 18px;
  text-align: center;
  padding: 10px;
  border-radius: 15px;
  border: 1px solid #faebcc;
`;

const Alert = ({ message }) => <AlertContainer>{message}</AlertContainer>;

export default Alert;
