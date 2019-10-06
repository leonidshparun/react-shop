import React, { useState } from 'react';

import { connect } from 'react-redux';

import styled from 'styled-components';
import uniqid from 'uniqid';

import { updateBrands } from 'store/actions/actions';

const Container = styled.div`
  grid-area: mn;
`;

const Select = styled.select`
  font-size: 14px;
  padding: 5px;
  border: 1px solid #eee;
  height: 33px;
  width: 100%;
  border-radius: 15px;
`;

const FilterBrandsConnected = ({ initial, updateFilter }) => {
  const [selected, changeSelection] = useState('def');

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
