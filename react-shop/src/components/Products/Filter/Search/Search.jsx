import React from 'react';

import Checkbox from '../../../UI/CheckBox/Checkbox';

import FiltersWrapper from '../Filter.styled';

const Search = ({ brands, change }) => {
  return (
    <FiltersWrapper>
      <p>Brands:</p>
      <button type="button" onClick={() => change()}>
        X
      </button>
      {Object.keys(brands).map(brand => (
        <label htmlFor={brand} key={brand}>
          <Checkbox
            id={brand}
            checked={brands[brand]}
            onChange={() => change(brand)}
          />
          <span style={{ marginLeft: 8, fontSize: 18 }}>{brand}</span>
        </label>
      ))}
    </FiltersWrapper>
  );
};

export default Search;
