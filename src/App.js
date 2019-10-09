import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Screens from 'components/Screens/Screens';

const AppContainer = styled.div`
  position: relative;
`;

const App = () => (
  <BrowserRouter>
    <AppContainer>
      <Header />
      <Screens />
      <Footer />
    </AppContainer>
  </BrowserRouter>
);

export default App;
