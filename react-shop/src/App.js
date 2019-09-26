import React, { PureComponent } from 'react';

import styled from 'styled-components';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';

import Modal from './components/UI/Modal/Modal';

const AppContainer = styled.main`
  position: relative;
`;

class App extends PureComponent {
  render() {
    return (
      <AppContainer>
        <Products />
        <Cart />
        <Modal />
      </AppContainer>
    );
  }
}

export default App;
