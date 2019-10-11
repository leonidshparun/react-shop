import React, { useState, useEffect } from 'react';

import Server from 'server/server';

import { connect } from 'react-redux';

import Selector from 'shared/UI/Selector/Selector';
import Button from 'shared/UI/Button/Button';

import Spinner from 'shared/UI/Spinner/Spinner';
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
  const [, productId] = match.params.id.split('==');

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [selectedSize, selectSize] = useState([0]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await Server.getProduct(productId - 1);
      setData(result);
      const { availableSizes } = result;
      selectSize([availableSizes[0]]);
      setIsLoading(false);
    };
    fetchData();
  }, [productId]);

  const productLoaded = () => {
    const { price, discount, brand, title, style, id, availableSizes } = data;
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
              onClick={() =>
                addItem({ id, size: selectedSize[0], quantity: 1 })
              }
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

  return isLoading ? <Spinner /> : productLoaded();
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItemToCart(item))
});

const ProductPage = connect(
  null,
  mapDispatchToProps
)(ProductPageConnected);

export default ProductPage;
