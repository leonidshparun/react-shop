import React from 'react';

import { connect } from 'react-redux';

import { addItemToCart } from 'store/actions/actions';
import { ProductContainer, Image } from './style';

import Tag from './Tag/Tag';
import Details from './Details/Details';

const ProductConnected = ({ data, addItem }) => {
  const { price, discount, brand, title, style, id } = data;

  const size = 45; // temporary

  return (
    <ProductContainer
      onClick={() => addItem({ id, size })}
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
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItemToCart(item))
});

const Product = connect(
  null,
  mapDispatchToProps
)(ProductConnected);

export default Product;
