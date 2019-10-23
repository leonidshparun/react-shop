import React from 'react';

import { connect } from 'react-redux';
import {
  buildFilterConfig,
  fetchData,
  updateRoute
} from 'store/actions/actions';
import { withRouter } from 'react-router-dom';

import Spinner from 'shared/UI/Spinner/Spinner';

import Alert from 'shared/Alert/Alert';

import Filters from './Filters/Filters';
import Content from './Content/Content';

const CatalogConnected = props => {
  const {
    isLoaded,
    filterBase,
    currentRoute,
    build,
    fetch,
    error,
    match,
    setRoute
  } = props;

  const newRoute = match.params.type;

  if (error.isError) {
    return <Alert message={error.errorMessage} />;
  }

  if (!isLoaded) {
    fetch()
      .then(setRoute(newRoute))
      .then(build(newRoute));
  }

  if (currentRoute !== newRoute) {
    setRoute(newRoute).then(build(newRoute));
  }

  return !isLoaded || !filterBase ? (
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
  filterBase: state.filter.base,
  currentRoute: state.filter.route
});

const mapDispatchToProps = dispatch => ({
  build: b => dispatch(buildFilterConfig(b)),
  fetch: () => dispatch(fetchData()),
  setRoute: r => dispatch(updateRoute(r))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CatalogConnected)
);
