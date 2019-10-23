import React from 'react';

import { connect } from 'react-redux';

import { updateSortPrices } from 'store/actions/actions';

import img from 'static/icons/order.png';

import { Container, Icon, SortButton } from './style';

const SortPricesConnected = ({ updateSort, sortPrices }) => {
  const handleChange = () => {
    const value = sortPrices !== 'max' ? 'max' : 'min';
    updateSort(value);
  };

  return (
    <Container onClick={handleChange}>
      <span>Sort by price</span>
      <SortButton type="button">
        <Icon
          active={sortPrices !== 'max'}
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
