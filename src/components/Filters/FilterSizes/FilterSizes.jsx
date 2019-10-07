import React, { useState } from 'react';

import { connect } from 'react-redux';
import Selector from 'components/UI/Selector/Selector';

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
  const [isFilterEnabled, updateFilterState] = useState(false);
  const [isOptionsVisible, toggleVisibility] = useState(false);

  const handleSizeChange = size => {
    let copySizes = {};
    if (isFilterEnabled) {
      copySizes = { ...sizes };
      copySizes[size] = !copySizes[size];
    } else {
      copySizes[size] = true;
      updateFilterState(true);
    }
    updateFilter(copySizes);
  };

  const selectAllSizes = () => {
    const copySizes = {};
    initial.forEach(key => {
      copySizes[key] = true;
    });
    updateFilterState(false);
    updateFilter(copySizes);
  };

  const selected = isFilterEnabled
    ? Object.keys(sizes).filter(key => sizes[key])
    : [];

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
          data={initial}
          select={size => handleSizeChange(size)}
          selected={selected}
        />
      </FilterOptions>
    </Container>
  );
};

const mapStateToProps = state => ({
  sizes: state.filter.sizes,
  initial: state.filter.sizesAll
});

const mapDispatchToProps = dispatch => ({
  updateFilter: sizes => dispatch(updateSizes(sizes))
});

const FilterSizes = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterSizesConnected);

export default FilterSizes;
