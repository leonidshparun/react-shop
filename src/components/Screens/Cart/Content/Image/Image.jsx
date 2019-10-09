import React from 'react';

const Image = ({ id, title }) => (
  <td>
    <img src={`../../../img/item${id}.jpg`} alt={title} width="140px" />
  </td>
);

export default Image;
