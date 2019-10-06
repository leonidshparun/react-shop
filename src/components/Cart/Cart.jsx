import React, { useState } from 'react';

import { connect } from 'react-redux';
import { removeItemFromCart } from 'store/actions/actions';

import icon from 'static/icons/shopping-cart.png';

import Checkout from './Checkout/Checkout';
import Items from './Items/Items';

import { CartContainer, ToggleIcon } from './Cart.styled';

const CartConnected = ({ items, removeItem }) => {
  const [isVisible, toggleVisibility] = useState(false);

  const total = { price: 0 };

  const remove = idx => {
    const updatedItems = [...items.slice(0, idx), ...items.slice(idx + 1)];
    removeItem(updatedItems);
  };

  const changeTotal = price => {
    total.price += price;
  };

  return (
    <CartContainer show={isVisible}>
      <ToggleIcon onClick={() => toggleVisibility(!isVisible)}>
        <img src={icon} width={30} alt="toggle cart" />
        <p>{items.length}</p>
      </ToggleIcon>
      <p>Cart:</p>
      <Items items={items} remove={remove} changeTotal={changeTotal} />

      <Checkout total={total} />
    </CartContainer>
  );
};

const mapStateToProps = state => ({
  items: state.cart
});

const mapDispatchToProps = dispatch => ({
  removeItem: items => dispatch(removeItemFromCart(items))
});

const Cart = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartConnected);

export default Cart;
