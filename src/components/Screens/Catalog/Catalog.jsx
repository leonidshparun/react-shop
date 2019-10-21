import React from 'react';

import { connect } from 'react-redux';
import { buildFilterConfig } from 'store/actions/actions';

import Spinner from 'shared/UI/Spinner/Spinner';

import Alert from 'shared/Alert/Alert';

import Filters from './Filters/Filters';
import Content from './Content/Content';

const CatalogConnected = ({ isLoaded, buildConfig, error }) => {
  if (error.isError) {
    return <Alert message={error.errorMessage} />;
  }
  if (!isLoaded) {
    buildConfig();
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
  isLoaded: state.site.isLoaded,
  error: state.site.error
});

const mapDispatchToProps = dispatch => ({
  buildConfig: () => dispatch(buildFilterConfig())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CatalogConnected);
