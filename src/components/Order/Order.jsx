import React from 'react';

import { connect } from 'react-redux';
import { removeItemFromCart } from 'store/actions/actions';

import Heading from './Heading/Heading';
import Content from './Content/Content';

import { CartContainer } from './Order.styled';

const CartConnected = ({ items, removeItem }) => {
  const total = { price: 0 };

  const remove = idx => {
    const updatedItems = [...items.slice(0, idx), ...items.slice(idx + 1)];
    removeItem(updatedItems);
  };

  const changeTotal = price => {
    total.price += price;
  };

  return (
    <CartContainer>
      <p>SHOPPING-CART SUMMARY</p>

      <table>
        <Heading />

        <Content items={items} remove={remove} total={changeTotal} />
      </table>
      {/* <Items items={items} remove={remove} changeTotal={changeTotal} />

      <Checkout total={total} /> */}
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
