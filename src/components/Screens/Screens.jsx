import React from 'react';

import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Catalog from 'components/Screens/Catalog/Catalog';
import Cart from 'components/Screens/Cart/Cart';
import Modal from 'shared/UI/Modal/Modal';

import ProductPage from 'components/Screens/Product/Product';

const Screen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-width: 320px;
  min-height: calc(100vh - 70px);
  padding: 145px 0 60px;
`;

const Screens = () => (
  <Screen>
    <Switch>
      <Route exact path="/" component={Catalog} />

      <Route path="/order" component={Cart} />

      <Route path="/other">
        <Modal />
      </Route>

      <Route path="/product/:id" component={ProductPage} />
    </Switch>
  </Screen>
);

export default Screens;
