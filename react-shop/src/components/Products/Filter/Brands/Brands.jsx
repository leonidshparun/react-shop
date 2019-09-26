import React from 'react';

import Checkbox from '../../../UI/CheckBox/Checkbox';

import Wrapper from '../Filter.styled';

const Brands = ({ brands, change }) => {
  return (
    <Wrapper>
      <p>Brands:</p>
      <button type="button" onClick={() => change()}>
        X
      </button>
      {Object.keys(brands).map(brand => (
        <label htmlFor={brand} key={brand}>
          <Checkbox
            id={brand}
            type="checkbox"
            checked={brands[brand]}
            onChange={() => change(brand)}
          />
          <span style={{ marginLeft: 8, fontSize: 18 }}>{brand}</span>
        </label>
      ))}
    </Wrapper>
  );
};

export default Brands;
