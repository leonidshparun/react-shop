import React, { useState } from 'react';

import { connect } from 'react-redux';

import { updateSortPrices } from 'store/actions/actions';

import img from 'static/icons/order.png';

import { Container, Icon, SortButton } from './style';

const SortPricesConnected = ({ updateSort }) => {
  const [sortType, changeType] = useState();

  const handleChange = () => {
    const value = sortType !== 'max' ? 'max' : 'min';
    changeType(value);
    updateSort(value);
  };

  return (
    <Container onClick={handleChange}>
      <span>Sort by price</span>
      <SortButton type="button">
        <Icon
          active={sortType !== 'max'}
          src={img}
          width={18}
          alt="reorder products by prices"
        />
      </SortButton>
    </Container>
  );
};

const mapStateToProps = state => ({
  sortPrices: state.filter.config.sortOrder
});

const mapDispatchToProps = dispatch => ({
  updateSort: type => dispatch(updateSortPrices(type))
});

const SortPrices = connect(
  mapStateToProps,
  mapDispatchToProps
)(SortPricesConnected);

export default SortPrices;
