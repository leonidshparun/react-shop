import React from 'react';

import { connect } from 'react-redux';

import { debounce } from 'utils/utils';
import { updateSearch } from 'store/actions/actions';

import { Container, SearchBar } from './style';

const FilterSearchConnected = ({ updateFilter }) => (
  <Container>
    <SearchBar
      onInput={e => updateFilter(e.target.value)}
      placeholder="Search..."
    />
  </Container>
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
