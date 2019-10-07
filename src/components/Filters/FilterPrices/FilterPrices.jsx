import React, { useState } from 'react';

import { connect } from 'react-redux';

import Range from 'components/UI/Range/Range';

import { debounce } from 'utils/utils';
import { updatePrices } from 'store/actions/actions';

import Container from './style';

const FilterPricesConnected = ({ initial, updateFilter, prices }) => {
  const [rangeValues, updateRangeValues] = useState([...prices]);

  const handleChangeMax = e => {
    const { value } = e.target;
    const [min] = rangeValues;
    const max = Math.max(value, min);
    updateRangeValues([min, max]);
    updateFilter([min, max]);
  };

  const handleChangeMin = e => {
    const { value } = e.target;
    const [, max] = rangeValues;
    const min = Math.min(value, max);
    updateRangeValues([min, max]);
    updateFilter([min, max]);
  };

  const [min, max] = rangeValues;

  return (
    <Container>
      <span style={{ fontSize: 14 }}>{`${min} € - ${max} €`}</span>
      <Range
        update={{ max: handleChangeMax, min: handleChangeMin }}
        values={{ min, max }}
        init={initial}
      />
    </Container>
  );
};

const mapStateToProps = state => ({
  prices: state.filter.prices,
  initial: state.filter.initialPrices
});

const mapDispatchToProps = dispatch => ({
  updateFilter: debounce(prices => dispatch(updatePrices(prices)), 500)
});

const FilterPrices = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterPricesConnected);

export default FilterPrices;
