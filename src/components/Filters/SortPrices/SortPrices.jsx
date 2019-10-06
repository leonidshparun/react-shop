import React, { useState } from 'react';

import styled from 'styled-components';
import { connect } from 'react-redux';

import { updateSortPrices } from 'store/actions/actions';

import img from 'static/icons/order.png';

const Container = styled.div`
  grid-area: st;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #eee;
  border-radius: 15px;
  padding: 3px 10px;
  cursor: pointer;
`;

const Icon = styled.img`
  transform: ${props => (props.active ? `rotate(180deg)` : null)};
  transition: transform 0.5s;
`;

const SortButton = styled.button`
  width: 25px;
  height: 25px;
`;

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
  sortPrices: state.filter.sortPrices
});

const mapDispatchToProps = dispatch => ({
  updateSort: type => dispatch(updateSortPrices(type))
});

const SortPrices = connect(
  mapStateToProps,
  mapDispatchToProps
)(SortPricesConnected);

export default SortPrices;
