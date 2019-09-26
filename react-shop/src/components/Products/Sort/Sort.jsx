import React from 'react';

import styled from 'styled-components';

import { connect } from 'react-redux';
import { updateSortPrices } from '../../../store/actions/actions';

import Prices from './Prices/Prices';
import Search from '../Filter/Search/Search';

const SortContainer = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  align-items: center;
  height: 40px;
  padding: 10px;
`;

const SortConnected = ({ prices, updateSortForPrices }) => (
  <SortContainer>
    <Prices prices={prices} change={updateSortForPrices} />
    <Search />
  </SortContainer>
);

const mapStateToProps = state => {
  return {
    ...state.sort
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateSortForPrices: type => dispatch(updateSortPrices(type))
  };
};

const Sort = connect(
  mapStateToProps,
  mapDispatchToProps
)(SortConnected);

export default Sort;
