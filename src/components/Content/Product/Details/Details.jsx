import React from 'react';

import Description from './Description/Description';
import Prices from './Prices/Prices';

import Container from './style';

const Details = ({ price, discount, brand, title, style }) => {
  return (
    <Container>
      <Description brand={brand} title={title} style={style} />
      <Prices price={price} discount={discount} />
    </Container>
  );
};

export default Details;
