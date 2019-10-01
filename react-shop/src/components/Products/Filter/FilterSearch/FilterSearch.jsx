import React from 'react';

import styled from 'styled-components';
import { connect } from 'react-redux';

import { debounce } from 'utils/utils';
import { updateSearch } from 'store/actions/actions';

const Container = styled.div`
  grid-area: sc;
`;

const SearchBar = styled.input`
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #eee;
  padding: 3px;
  width: -webkit-fill-available;
  height: 33px;
  border-radius: 15px;
  padding-left: 10px;
`;

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
