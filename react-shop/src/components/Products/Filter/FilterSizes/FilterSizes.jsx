import React, { useState } from 'react';

import styled from 'styled-components';
import { connect } from 'react-redux';
import Selector from '../../../UI/Selector/Selector';

import Wrapper from '../Filter.styled';

import { updateSizes } from '../../../../store/actions/actions';

const Button = styled.button`
  border: ${props =>
    !props.active ? 'thin solid rgb(169, 169, 169)' : 'thin dashed grey'};
  right: 20px;
  top: 20px;
  border-radius: 50%;
  width: 25px;
  height: 25px;
`;

const ToggleButton = styled.button`
  border: 1px solid #00bcd4;
  border-radius: 50%;
  width: 25px;
  height: 25px;
`;

const SizesContainer = styled.div`
  position: absolute;
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  opacity: ${props => (props.show ? 1 : 0)};
  transition: opacity 0.5s ease;
  bottom: -40px;
  left: 0;
  width: 100%;
  height: 40px;
  padding: 5px;
  box-shadow: 0 15px 15px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 20px 20px;
`;

const FilterSizesConnected = ({ initial, sizes, updateFilter }) => {
  const [isFilterEnabled, updateFilterState] = useState(false);
  const [isSelectorVisible, updateSelectorVisibility] = useState(false);

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
    <Wrapper>
      <p>Size:</p>
      <>
        <ToggleButton
          onClick={() => {
            updateSelectorVisibility(!isSelectorVisible);
          }}
        >
          {isSelectorVisible ? '-' : '+'}
        </ToggleButton>
        <Button
          active={isFilterEnabled}
          type="button"
          onClick={() => selectAllSizes()}
        >
          all
        </Button>
      </>

      <SizesContainer show={isSelectorVisible}>
        <Selector
          data={initial}
          select={size => handleSizeChange(size)}
          selected={selected}
        />
      </SizesContainer>
    </Wrapper>
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
