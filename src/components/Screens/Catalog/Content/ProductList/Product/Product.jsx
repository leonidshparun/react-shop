import React from 'react';

import { withRouter } from 'react-router-dom';

import Tag from 'shared/Tag/Tag';
import Details from './Details/Details';
import { ProductContainer, Image } from './style';

const Product = withRouter(({ data, history }) => {
  const { price, discount, brand, title, style, id, imageURL } = data;

  const link = `${brand} ${title} ${style}==${id}`
    .replace(/\s|\//g, '-')
    .toLowerCase();

  return (
    <ProductContainer
      onClick={() => {
        history.push(`/product/${link}`);
      }}
      bottom
    >
      <Image src={imageURL} alt={title} />
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
