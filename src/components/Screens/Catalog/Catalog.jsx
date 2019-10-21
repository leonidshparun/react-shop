import React from 'react';

import { connect } from 'react-redux';
import { buildFilterConfig, fetchData } from 'store/actions/actions';

import Spinner from 'shared/UI/Spinner/Spinner';

import Alert from 'shared/Alert/Alert';

import Filters from './Filters/Filters';
import Content from './Content/Content';

const CatalogConnected = ({ isLoaded, isFilterReady, build, fetch, error }) => {
  if (error.isError) {
    return <Alert message={error.errorMessage} />;
  }

  if (!isLoaded) {
    fetch();
    build();
  }

  return !isLoaded || !isFilterReady ? (
    <Spinner />
  ) : (
    <>
      <Filters />
      <Content />
    </>
  );
};

const mapStateToProps = state => ({
  isLoaded: state.site.isLoaded,
  error: state.site.error,
  isFilterReady: state.filter.base
});

const mapDispatchToProps = dispatch => ({
  build: () => dispatch(buildFilterConfig()),
  fetch: () => dispatch(fetchData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CatalogConnected);
