import React, { useState } from 'react';

import Server from 'server/server';

import { connect } from 'react-redux';

import Selector from 'shared/UI/Selector/Selector';
import Button from 'shared/UI/Button/Button';

import Features from 'shared/Features/Features';

import { addItemToCart } from 'store/actions/actions';

import {
  ProductContainer,
  DetailsWrapper,
  TitleWrapper,
  SliderWrapper,
  PricesWrapper,
  SizesWrapper,
  ButtonWrapper,
  FeaturesWrapper
} from './style';

import Title from './Title/Title';
import Prices from './Prices/Prices';
import Carousel from './Carousel/Carousel';

const ProductPageConnected = ({ match, addItem }) => {
  const productId = match.params.id.split('==')[1] - 1;
  const productData = Server.getProduct(productId);

  const {
    price,
    discount,
    brand,
    title,
    style,
    id,
    availableSizes
  } = productData;

  const [selectedSize, selectSize] = useState([availableSizes[0]]);

  return (
    <ProductContainer>
      <SliderWrapper>
        <Carousel id={id} />
      </SliderWrapper>

      <DetailsWrapper>
        <TitleWrapper>
          <Title>{`${brand} - ${title} - ${style}`}</Title>
        </TitleWrapper>
        <PricesWrapper>
          <Prices price={price} discount={discount} />
        </PricesWrapper>
        <SizesWrapper>
          <p>Select size:</p>
          <Selector
            type="big"
            data={availableSizes}
            selected={selectedSize}
            select={e => selectSize([e])}
          />
        </SizesWrapper>
        <ButtonWrapper>
          <Button
            active
            height="80px"
            type="button"
            onClick={() => addItem({ id, size: selectedSize[0] })}
          >
            ADD TO CART
          </Button>
        </ButtonWrapper>
      </DetailsWrapper>

      <FeaturesWrapper>
        <Features />
      </FeaturesWrapper>
    </ProductContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItemToCart(item))
});

const ProductPage = connect(
  null,
  mapDispatchToProps
)(ProductPageConnected);

export default ProductPage;
