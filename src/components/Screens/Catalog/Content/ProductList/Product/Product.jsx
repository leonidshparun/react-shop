import React from 'react';

import { withRouter } from 'react-router-dom';

import Tag from 'shared/Tag/Tag';

import { ProductContainer, Image } from './style';

import Details from './Details/Details';

const Product = withRouter(({ data, history }) => {
  const { price, discount, brand, title, style, id } = data;

  const link = `${brand} ${title} ${style}==${id}`
    .replace(/\s|\//g, '-')
    .toLowerCase();

  return (
    <ProductContainer
      onClick={() => {
        history.push(`product/${link}`);
      }}
      borders={{ bottom: true }}
    >
      <Image src={`../img/item${id}.jpg`} alt={title} />
      <Details
        price={price}
        discount={discount}
        brand={brand}
        title={title}
        style={style}
      />
      <Tag discount={discount} />
    </ProductContainer>
  );
});

export default Product;
