import React, { memo } from 'react';

import styled from 'styled-components';

import { connect } from 'react-redux';
import { removeItemFromCart, changeQuantity } from 'store/actions/actions';
import Quantity from './Quantity/Quantity';
import Prices from './Prices/Prices';

const Container = styled.tr``;

const Description = styled.td`
  width: 300px;
  p {
    text-align: left;
  }
`;

const DeleteBtn = styled.button`
  width: 20px;
  height: 20px;
  background: #222;
  color: white;
  border-radius: 50%;
  font-family: monospace;
  font-weight: bold;
`;

const TotalPrice = styled.td`
  p {
    font-size: 20px;
  }
`;

const CartItemConnected = ({ product, idx, remove, change }) => {
  const {
    title,
    brand,
    style,
    price,
    discount,
    size,
    quantity,
    imageURL
  } = product;
  const priceWithDiscount = price * (1 - discount / 100) * quantity;

  return (
    <Container>
      <td>
        <img src={imageURL} alt={title} width="140px" />
      </td>
      <Description>
        <p>{`${brand} ${title} - ${style}`}</p>
        {size ? <p>Size: {size}</p> : null}
      </Description>
      <td>
        <Prices discount={discount} price={price} />
      </td>
      <td>
        <Quantity
          value={product.quantity}
          update={{
            add: () => {
              change({ quantity: product.quantity + 1, idx });
            },
            remove: () => {
              if (product.quantity === 1) remove(idx);
              else change({ quantity: product.quantity - 1, idx });
            }
          }}
        />
      </td>
      <td>
        <DeleteBtn
          type="button"
          onClick={() => {
            remove(idx);
          }}
        >
          X
        </DeleteBtn>
      </td>
      <TotalPrice>
        <p>{priceWithDiscount.toFixed(2)} €</p>
      </TotalPrice>
    </Container>
  );
};

const mapDispatchToProps = dispatch => ({
  remove: item => dispatch(removeItemFromCart(item)),
  change: qnt => dispatch(changeQuantity(qnt))
});

const CartItem = connect(null, mapDispatchToProps)(CartItemConnected);

export default memo(CartItem);
