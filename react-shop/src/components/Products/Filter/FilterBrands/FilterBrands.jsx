import React, { useState } from 'react';

import { connect } from 'react-redux';

import styled from 'styled-components';
import uniqid from 'uniqid';

import Wrapper from '../Filter.styled';

import { updateBrands } from '../../../../store/actions/actions';

const Select = styled.select`
  border-radius: 15px;
  font-size: 14px;
  border: 1px solid rgb(169, 169, 169);
  padding: 3px;
  padding-left: 10px;
  height: 24px;
`;

const FilterBrandsConnected = ({ initial, updateFilter }) => {
  const [selected, changeSelection] = useState('def');

  const handleBrandChange = e => {
    console.log(e.target.value);

    const { value } = e.target;
    const update = value === 'all' ? initial : { [value]: true };
    changeSelection(value);
    updateFilter(update);
  };

  return (
    <Wrapper>
      <p>Brands:</p>
      <Select
        name="selectBrand"
        id="brands"
        onBlur={() => {}}
        onChange={e => handleBrandChange(e)}
        value={selected}
      >
        <option value="all" defaultValue>
          All
        </option>
        {Object.keys(initial).map(brand => (
          <option key={uniqid()} id={brand} value={brand}>
            {brand}
          </option>
        ))}
      </Select>
    </Wrapper>
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
