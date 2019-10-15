import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';

import Server from 'server/server';
import Alert from 'shared/Alert/Alert';

import Spinner from 'shared/UI/Spinner/Spinner';

import Button from 'shared/UI/Button/Button';

import Heading from './Heading/Heading';
import Content from './Content/Content';
import Footer from './Footer/Footer';

import { CartContainer, Table } from './style';

const CartConnected = ({ items }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const total = {
    price: 0,
    discount: 0
  };

  const updateTotal = products => {
    products.forEach(item => {
      const sum = item.price * (1 - item.discount / 100);
      const discount = item.price - sum;
      total.price += sum * item.quantity;
      total.discount += discount * item.quantity;
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const dataFromServer = items.map(item =>
        Server.getProduct(item.id - 1, item.size, item.quantity)
      );
      const loadedData = await Promise.all(dataFromServer);
      setData(loadedData);
      setIsLoading(false);
    };
    fetchData();
  }, [items]);

  updateTotal(data);

  const submitOrder = () => {
    const order = data.map(
      (item, idx) =>
        `Item ${idx + 1}: ${item.brand} ${item.title} - ${item.style}, Size: ${
          item.size
        }\n`
    );
    alert(`Your ORDER: \n${order}`);
  };

  const cart = items.length ? (
    <CartContainer>
      <p
        style={{
          fontSize: 30,
          padding: '14px 0'
        }}
      >
        SHOPPING-CART SUMMARY
      </p>
      <Table>
        <Heading />
        <Content items={data} />
        <Footer total={total} />
      </Table>
      <div style={{ float: 'right', marginTop: 10 }}>
        <Button onClick={submitOrder} height="40px" width="320px" active>
          ORDER
        </Button>
      </div>
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
