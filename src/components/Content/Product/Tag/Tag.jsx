import React from 'react';

import Container from './style';

const Tag = ({ discount }) =>
  discount !== 0 ? <Container>{`${-discount}%`}</Container> : null;

export default Tag;
