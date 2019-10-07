import React, { useState } from 'react';

import { connect } from 'react-redux';
import uniqid from 'uniqid';

import { updateBrands } from 'store/actions/actions';
import { Container, Select } from './style';

const FilterBrandsConnected = ({ initial, updateFilter }) => {
  const [selected, changeSelection] = useState('default');

  const handleBrandChange = value => {
    const update = value === 'all' ? initial : { [value]: true };
    changeSelection(value);
    updateFilter(update);
  };

  return (
    <Container>
      <Select
        name="selectBrand"
        id="brands"
        onBlur={() => {}}
        onChange={e => handleBrandChange(e.target.value)}
        value={selected}
      >
        <option value="all" defaultValue>
          Manufacturer
        </option>
        {Object.keys(initial).map(brand => (
          <option key={uniqid()} id={brand} value={brand}>
            {brand}
          </option>
        ))}
      </Select>
    </Container>
  );
};

const mapStateToProps = state => ({
  initial: state.filter.brandsAll
});

const mapDispatchToProps = dispatch => ({
  updateFilter: brands => dispatch(updateBrands(brands))
});

const FilterBrands = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterBrandsConnected);

export default FilterBrands;
