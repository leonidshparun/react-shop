import { updateObject } from 'utils/utils';

import {
  UPDATE_BRANDS,
  UPDATE_PRICES,
  UPDATE_SIZES,
  UPDATE_SEARCH,
  UPDATE_SORT_PRICES,
  BUILD_FILTER_CONFIG,
  UPDATE_FILTER_ROUTE
} from 'store/actions/action-types';

const filterReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_FILTER_ROUTE:
      return updateObject(state, { route: action.route });
    case BUILD_FILTER_CONFIG:
      return {
        route: state.route,
        base: { ...action.config },
        config: { ...action.config }
      };
    case UPDATE_BRANDS:
      return {
        route: state.route,
        base: state.base,
        config: updateObject(state.config, { brandsList: action.brands })
      };
    case UPDATE_PRICES:
      return {
        route: state.route,
        base: state.base,
        config: updateObject(state.config, { pricesRange: action.prices })
      };
    case UPDATE_SIZES:
      return {
        route: state.route,
        base: state.base,
        config: updateObject(state.config, { sizesList: action.sizes })
      };
    case UPDATE_SEARCH:
      return {
        route: state.route,
        base: state.base,
        config: updateObject(state.config, { search: action.input })
      };
    case UPDATE_SORT_PRICES:
      return {
        route: state.route,
        base: state.base,
        config: updateObject(state.config, { sortOrder: action.types })
      };
    default:
      return state;
  }
};

export default filterReducer;
