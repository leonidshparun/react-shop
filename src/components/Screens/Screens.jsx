import React from 'react';

import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Catalog from 'components/Screens/Catalog/Catalog';
import Cart from 'components/Screens/Cart/Cart';

import ProductPage from 'components/Screens/Product/Product';

import ScrollToTop from 'hooks/scrollToTop';

const Screen = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-x: auto;
  min-width: 320px;
  min-height: 600px;
  padding: 155px 0 60px;
`;

const Screens = () => (
  <Screen>
    <div style={{ margin: '0 auto' }}>
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={Catalog} />
          <Route path="/prod/:type?/:gender?" component={Catalog} />
          <Route path="/product/:id" component={ProductPage} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </ScrollToTop>
    </div>
  </Screen>
);

export default Screens;
