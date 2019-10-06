import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Navigation from 'components/Navigation/Navigation';

import Content from 'components/Content/Content';
import Filters from 'components/Filters/Filters';
import Order from 'components/Order/Order';
import Modal from 'components/UI/Modal/Modal';

const AppContainer = styled.main`
  position: relative;
`;

const MainView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 320px;
`;

const Shopping = () => (
  <MainView>
    <Filters />
    <Content />
  </MainView>
);

const Cart = () => (
  <MainView>
    <Order />
  </MainView>
);

const App = () => (
  <AppContainer>
    <BrowserRouter>
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Shopping />
          </Route>
          <Route path="/order">
            <Cart />
          </Route>
          <Route path="/other">
            <Modal />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  </AppContainer>
);
export default App;
