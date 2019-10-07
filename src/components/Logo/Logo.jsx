import React from 'react';

import logo from 'static/logo.png';

const Logo = ({ width }) => (
  <a
    style={{
      height: '100%',
      display: 'block',
      width
    }}
    href="/"
  >
    <img src={logo} alt="compony name" width={width} />
  </a>
);

export default Logo;
