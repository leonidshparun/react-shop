import React from 'react';

import logo from 'static/logo.png';

const Logo = ({ width }) => (
  <a href="/">
    <img src={logo} alt="company name" width={width || '100%'} />
  </a>
);

export default Logo;
