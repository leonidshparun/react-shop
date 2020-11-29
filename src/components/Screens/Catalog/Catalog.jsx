import React from 'react';

import Server from 'server/server';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
  buildFilterConfig,
  fetchData,
  updateRouteParams,
  saveFilteredContent
} from 'store/actions/actions';

import Spinner from 'shared/UI/Spinner/Spinner';
import Alert from 'shared/Alert/Alert';

import Filters from './Filters/Filters';
import Content from './Content/Content';

const CatalogConnected = props => {
  const { isLoaded, error, build, fetch, update, save, match, filter } = props;

  const { gender, type } = match.params;
  const filterConfig = filter.config;
  const currentRoute = filter.route;
  const currentGender = filter.gender;

  if (error.isError) {
    return <Alert message={error.errorMessage} />;
  }

  if (!isLoaded) {
    fetch();
    return <Spinner />;
  }

  if (!filterConfig) {
    build(type, gender);
    update(type, gender);
    return <Spinner />;
  }

  if (currentRoute !== type || currentGender !== gender) {
    update(type, gender);
    build(type, gender);
    return <Spinner />;
  }

  save(Server.getFiltredContent(filterConfig, type, gender));

  return (
    <>
      <Filters />
      <Content />
    </>
  );
};

const mapStateToProps = state => ({
  isLoaded: state.site.isLoaded,
  error: state.site.error,
  filter: state.filter
});

const mapDispatchToProps = dispatch => ({
  fetch: () => dispatch(fetchData()),
  build: (d, t, g) => dispatch(buildFilterConfig(d, t, g)),
  update: (r, g) => dispatch(updateRouteParams(r, g)),
  save: c => dispatch(saveFilteredContent(c))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CatalogConnected)
);
