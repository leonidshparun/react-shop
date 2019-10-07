import React from 'react';

import icon from 'static/icons/telephone.png';

const Tip = ({ isFull }) =>
  isFull ? (
    <p>
      Any question?
      <a style={{ fontWeight: 600 }} href="tel:+123456789">
        +123456789
      </a>
    </p>
  ) : (
    <a href="tel:+123456789">
      <img src={icon} width={20} alt="call" />
    </a>
  );

export default Tip;
