import React from 'react';

import styled from 'styled-components';
import { connect } from 'react-redux';

import { debounce } from '../../../../utils/utils';
import { updateSearch } from '../../../../store/actions/actions';

import Wrapper from '../Filter.styled';

const SearchBar = styled.input`
  border-radius: 15px;
  font-size: 14px;
  border: 1px solid rgb(169, 169, 169);
  padding: 3px;
  padding-left: 10px;
  height: 24px;
`;

const FilterSearchConnected = ({ updateFilter }) => (
  <Wrapper>
    <p>Search: </p>
    <SearchBar onInput={e => updateFilter(e.target.value)} />
  </Wrapper>
);

const mapStateToProps = state => ({
  input: state.filter.input
});

const mapDispatchToProps = dispatch => ({
  updateFilter: debounce(input => dispatch(updateSearch(input)), 800)
});

const FilterSearch = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterSearchConnected);

export default FilterSearch;
