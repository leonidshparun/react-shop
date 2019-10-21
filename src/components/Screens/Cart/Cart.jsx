import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';

import Server from 'server/server';
import Alert from 'shared/Alert/Alert';

import Spinner from 'shared/UI/Spinner/Spinner';

import Button from 'shared/UI/Button/Button';

import Heading from './Heading/Heading';
import Content from './Content/Content';
import Footer from './Footer/Footer';

import { CartContainer, Table, CartHeading, OrderButtonWrapper } from './style';

const CartConnected = ({ items }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const total = {
    price: 0
  };

  const updateTotal = products => {
    products.forEach(item => {
      const sum = item.price * (1 - item.discount / 100);
      total.price += sum * item.quantity;
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const dataFromServer = items.map(item =>
        Server.getProduct(item.id, item.size, item.quantity)
      );
      const loadedData = await Promise.all(dataFromServer);
      setData(loadedData);
      setIsLoading(false);
    };
    fetchData();
  }, [items]);

  updateTotal(data);

  const submitOrder = () => {
    const order = data.map(item => {
      const { brand, discount, id, price, style, title, size, quantity } = item;
      return { brand, discount, id, price, style, title, size, quantity };
    });
    Server.submitOrder({
      order,
      total: total.price.toFixed(2),
      customer: { data: 'customer data...' },
      timestamp: new Date().toISOString()
    });
  };

  const cart = items.length ? (
    <CartContainer>
      <CartHeading>SHOPPING-CART SUMMARY</CartHeading>
      <Table>
        <Heading />
        <Content items={data} />
        <Footer total={total} />
      </Table>
      <OrderButtonWrapper>
        <Button onClick={submitOrder} height="40px" width="320px" active>
          ORDER
        </Button>
      </OrderButtonWrapper>
    </CartContainer>
  ) : (
    <Alert message="Your shopping cart is empty" />
  );

  return isLoading ? <Spinner /> : cart;
};

const mapStateToProps = state => ({
  items: state.cart
});

const Cart = connect(mapStateToProps)(CartConnected);

export default Cart;
