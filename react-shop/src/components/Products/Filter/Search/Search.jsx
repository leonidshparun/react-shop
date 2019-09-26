import React from 'react';

import { connect } from 'react-redux';

import styled from 'styled-components';

import { updateSearch } from '../../../../store/actions/actions';

import { debounce } from '../../../../utils/utils';

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  p {
    font-size: 18px;
  }
  input {
    margin: 10px;
    font-size: 18px;
  }
`;

const SearchConnected = props => {
  return (
    <SearchContainer>
      <p>Search: </p>
      <input onInput={e => props.updateSearch(e.target.value)} />
    </SearchContainer>
  );
};

const mapStateToProps = state => ({
  input: state.filter.search
});

const mapDispatchToProps = dispatch => ({
  updateSearch: debounce(brands => dispatch(updateSearch(brands)), 1000)
});

const Search = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchConnected);

export default Search;
