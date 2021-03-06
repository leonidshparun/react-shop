import React, { useState, useEffect } from 'react';

import Server from 'server/server';

import { connect } from 'react-redux';

import Selector from 'shared/UI/Selector/Selector';
import Button from 'shared/UI/Button/Button';

import Spinner from 'shared/UI/Spinner/Spinner';
import Features from 'shared/Features/Features';

import { addItemToCart, showPopup } from 'store/actions/actions';

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

const ProductPageConnected = ({ match, addItem, popup }) => {
  const [, productId] = match.params.id.split('==');

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [selectedSize, selectSize] = useState([0]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await Server.getProduct(productId);
      setData(result);
      const { availableSizes } = result;
      const size = availableSizes ? availableSizes[0] : null;
      selectSize([size]);
      setIsLoading(false);
    };
    fetchData();
  }, [productId]);

  const productLoaded = () => {
    const {
      price,
      discount,
      brand,
      title,
      style,
      id,
      type,
      availableSizes,
      imageURL
    } = data;

    const handleClick = () => {
      popup();
      addItem({ id, size: selectedSize[0], quantity: 1 });
    };

    return (
      <ProductContainer>
        <SliderWrapper>
          <Carousel id={id} imageURL={imageURL} />
        </SliderWrapper>

        <DetailsWrapper>
          <TitleWrapper>
            <Title>{`${brand} - ${title} - ${style}`}</Title>
          </TitleWrapper>
          <PricesWrapper>
            <Prices price={price} discount={discount} />
          </PricesWrapper>
          {type !== 'lifestyle' ? (
            <SizesWrapper>
              <p>Select size:</p>
              <Selector
                type="big"
                data={availableSizes}
                selected={selectedSize}
                select={e => selectSize([e])}
              />
            </SizesWrapper>
          ) : null}
          <ButtonWrapper>
            <Button active height="80px" type="button" onClick={handleClick}>
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
  addItem: item => dispatch(addItemToCart(item)),
  popup: () => dispatch(showPopup('ADDED!'))
});

const ProductPage = connect(
  null,
  mapDispatchToProps
)(ProductPageConnected);

export default ProductPage;
