import React, { memo } from 'react';

import styled from 'styled-components';
import uniqid from 'uniqid';

import Card from '../Card/Card';

const Container = styled.div`
  display: flex;
  width: 1125px;
  height: 840px;
  flex-wrap: wrap;
  place-content: start;
`;

const Page = ({ content }) => (
  <Container>
    {content.map(product => (
      <Card key={uniqid()} data={product} />
    ))}
  </Container>
);

export default memo(Page);
