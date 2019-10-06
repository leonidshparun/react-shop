import React, { useState } from 'react';

import styled from 'styled-components';
import { connect } from 'react-redux';
import Selector from 'components/UI/Selector/Selector';

import { updateSizes } from 'store/actions/actions';

import icon from 'static/icons/arrow.png';

const Container = styled.div`
  grid-area: sz;
`;

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #eee;
  padding: 3px;
  border-radius: 15px;
  padding-left: 10px;
`;

const SelectAllButton = styled.button`
  border: ${props => (!props.active ? '1px solid #9e9e9e' : '1px dashed grey')};
  right: 20px;
  top: 20px;
  width: 25px;
  height: 25px;
  margin-left: auto;
  margin-right: 10px;
  border-radius: 15px;
`;

const ToggleVisibilityButton = styled.button`
  width: 25px;
  height: 25px;
`;

const FilterOptions = styled.div`
  position: absolute;
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  opacity: ${props => (props.show ? 1 : 0)};
  transition: opacity 0.5s ease;
  left: 0;
  width: 100%;
  min-height: 40px;
  padding: 5px;
  box-shadow: 0 15px 15px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 20px 20px;
  background: white;
`;

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
