import React, { useState } from 'react';

import { connect } from 'react-redux';

import { updateDiscounts } from 'store/actions/actions';

import icon from 'static/icons/discount.png';
import Container from './style';

const FilterDiscountsConnected = ({ updateFilter }) => {
  const [isActive, toggleSate] = useState(false);

  const handleChangeMin = () => {
    toggleSate(!isActive);
    updateFilter(!isActive);
  };

  return (
    <Container isActive={isActive}>
      <button title="show discounts" type="button" onClick={handleChangeMin}>
        <img src={icon} width={24} alt="show discounts" />
      </button>
    </Container>
  );
};

const mapDispatchToProps = dispatch => ({
  updateFilter: discounts => dispatch(updateDiscounts(discounts))
});

const FilterDiscounts = connect(
  null,
  mapDispatchToProps
)(FilterDiscountsConnected);

export default FilterDiscounts;
