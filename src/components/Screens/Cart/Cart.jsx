import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { removeItemFromCart } from 'store/actions/actions';

import Server from 'server/server';

import Spinner from 'shared/UI/Spinner/Spinner';

import Heading from './Heading/Heading';
import Content from './Content/Content';

import { CartContainer } from './style';

const CartConnected = ({ items, removeItem }) => {
  const total = { price: 0 };

  const remove = idx => {
    const updatedItems = [...items.slice(0, idx), ...items.slice(idx + 1)];
    removeItem(updatedItems);
  };

  const changeTotal = price => {
    total.price += price;
  };

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const dataFromServer = items.map(item => {
        return Server.getProduct(item.id);
      });
      const loadedData = await Promise.all(dataFromServer);
      setData(loadedData);
      setIsLoading(false);
    };
    fetchData();
  }, [items]);

  return isLoading ? (
    <Spinner />
  ) : (
    <CartContainer>
      <p>SHOPPING-CART SUMMARY</p>

      <table>
        <Heading />

        <Content items={data} remove={remove} total={changeTotal} />
      </table>
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
