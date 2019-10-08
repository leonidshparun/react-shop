import React from 'react';

import Container from './style';

const Tag = ({ discount, def }) =>
  discount !== 0 ? <Container def={def}>{`${-discount}%`}</Container> : null;

export default Tag;
