import React from 'react';

import styled from 'styled-components';

const Text = styled.p`
  color: white;
  text-align: center;
  padding: 10px;
  background: #222;
  font-family: 'Monserat';
  font-size: 18px;
`;

const Copyright = () => <Text>Sneaker shop, 2019</Text>;

export default Copyright;
