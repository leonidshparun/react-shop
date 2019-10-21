import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Screens from 'components/Screens/Screens';

import Popup from 'shared/Popup/Popup';

const AppContainer = styled.div`
  position: relative;
`;

const App = () => (
  <BrowserRouter>
    <AppContainer>
      <Popup />
      <Header />
      <Screens />
      <Footer />
    </AppContainer>
  </BrowserRouter>
);

export default App;
