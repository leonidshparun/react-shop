import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Screens from 'components/Screens/Screens';

import Popup from 'shared/Popup/Popup';

const App = () => (
  <BrowserRouter>
    <div style={{ position: 'relative' }}>
      <Popup />
      <Header />
      <Screens />
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
