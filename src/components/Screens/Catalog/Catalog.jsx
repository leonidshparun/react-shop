import React from 'react';

import { connect } from 'react-redux';
import { fetchData, buildFilterConfig } from 'store/actions/actions';

import Spinner from 'shared/UI/Spinner/Spinner';

import Filters from './Filters/Filters';
import Content from './Content/Content';

const CatalogConnected = ({ isLoaded, fetch, buildConfig }) => {
  if (!isLoaded) {
    buildConfig();
    fetch();
    return <Spinner />;
  }
  return (
    <>
      <Filters />
      <Content />
    </>
  );
};

const mapStateToProps = state => ({
  isLoaded: state.isLoaded
});

const mapDispatchToProps = dispatch => ({
  fetch: () => dispatch(fetchData()),
  buildConfig: () => dispatch(buildFilterConfig())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CatalogConnected);
