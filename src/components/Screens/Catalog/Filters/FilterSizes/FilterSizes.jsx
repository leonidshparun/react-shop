import React, { useState } from 'react';

import updateFilterState from 'hooks/updateFilterState';

import { connect } from 'react-redux';
import Selector from 'shared/UI/Selector/Selector';

import { updateSizes } from 'store/actions/actions';

import icon from 'static/icons/arrow.png';

import {
  Container,
  Controls,
  SelectAllButton,
  ToggleVisibilityButton,
  FilterOptions
} from './style';

const FilterSizesConnected = ({ initial, sizes, updateFilter }) => {
  const [isFilterEnabled, toggleFilterState] = useState(false);
  const [isOptionsVisible, toggleVisibility] = useState(false);

  const handleSizeChange = size => {
    let copySizes = {};
    if (isFilterEnabled) {
      copySizes = { ...sizes };
      copySizes[size] = !copySizes[size];
    } else {
      copySizes[size] = true;
      toggleFilterState(true);
    }
    updateFilter(copySizes);
  };

  const selectAllSizes = () => {
    const copySizes = {};
    Object.keys(initial).forEach(key => {
      copySizes[key] = true;
    });
    toggleFilterState(false);
    updateFilter(copySizes);
  };

  const selected = isFilterEnabled
    ? Object.keys(sizes).filter(key => sizes[key])
    : [];

  updateFilterState(toggleFilterState, initial, false);
  updateFilterState(toggleVisibility, initial, false);
  return (
    <Container>
      <Controls>
        <span>Size</span>

        <SelectAllButton
          active={isFilterEnabled}
          type="button"
          onClick={() => selectAllSizes()}
        >
          all
        </SelectAllButton>
        <ToggleVisibilityButton
          onClick={() => toggleVisibility(!isOptionsVisible)}
        >
          <img src={icon} width={16} alt="all sizes" />
        </ToggleVisibilityButton>
      </Controls>

      <FilterOptions show={isOptionsVisible}>
        <Selector
          data={Object.keys(initial)}
          select={size => handleSizeChange(size)}
          selected={selected}
        />
      </FilterOptions>
    </Container>
  );
};

const mapStateToProps = state => ({
  sizes: state.filter.config.sizesList,
  initial: state.filter.base.sizesList
});

const mapDispatchToProps = dispatch => ({
  updateFilter: sizes => dispatch(updateSizes(sizes))
});

const FilterSizes = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterSizesConnected);

export default FilterSizes;
