import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import Content from 'components/Content/Content';
import Filters from 'components/Filters/Filters';
import Order from 'components/Order/Order';
import Modal from 'components/UI/Modal/Modal';

const AppContainer = styled.div`
  position: relative;
`;

const MainView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-width: 320px;
  padding-top: 110px;
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
          <Route path="/order">
            <Order />
          </Route>
          <Route path="/other">
            <Modal />
          </Route>
        </Switch>
      </MainView>

      <Footer />
    </AppContainer>
  </BrowserRouter>
);
export default App;
