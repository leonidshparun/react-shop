import React from 'react';

const Description = ({ title, brand, style, size }) => (
  <td>
    <p>{`${brand} ${title} - ${style}`}</p>
    <p>Size: {size}</p>
  </td>
);

export default Description;
