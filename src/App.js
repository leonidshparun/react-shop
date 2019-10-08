import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import Content from 'components/Content/Content';
import Filters from 'components/Content/Filters/Filters';
import Order from 'components/Order/Order';
import Modal from 'shared/UI/Modal/Modal';

import ProductPage from 'components/ProductPage/ProductPage';

const AppContainer = styled.div`
  position: relative;
`;

const MainView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-width: 320px;
  padding-top: 120px;
  padding-bottom: 40px;
  min-height: calc(100vh - 70px);
`;

const App = () => (
  <BrowserRouter>
    <AppContainer>
      <Header />

      <MainView>
        <Switch>
          <Route exact path="/">
            <Filters />
            <Content />
          </Route>
          <Route path="/order" component={Order} />
          <Route path="/other">
            <Modal />
          </Route>
          <Route path="/product/:id" component={ProductPage} />
        </Switch>
      </MainView>

      <Footer />
    </AppContainer>
  </BrowserRouter>
);
export default App;
