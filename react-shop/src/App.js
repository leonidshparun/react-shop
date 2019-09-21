import React, { Component } from 'react';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';

import styled from 'styled-components';

import Modal from './components/UI/Modal/Modal';

const AppContainer = styled.main`
  position: relative;
`;

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Products />
        <Cart />
        <Modal />
      </AppContainer >
    )
  }
}

export default App;
