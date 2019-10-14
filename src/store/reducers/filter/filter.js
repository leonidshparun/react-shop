import { updateObject } from 'utils/utils';

import {
  UPDATE_BRANDS,
  UPDATE_PRICES,
  UPDATE_SIZES,
  UPDATE_SEARCH,
  UPDATE_SORT_PRICES,
  BUILD_FILTER_CONFIG
} from 'store/actions/action-types';

const filterReducer = (state = {}, action) => {
  switch (action.type) {
    case BUILD_FILTER_CONFIG:
      return {
        base: { ...action.config },
        config: { ...action.config }
      };
    case UPDATE_BRANDS:
      return {
        base: state.base,
        config: updateObject(state.config, { brandsList: action.brands })
      };
    case UPDATE_PRICES:
      return {
        base: state.base,
        config: updateObject(state.config, { pricesRange: action.prices })
      };
    case UPDATE_SIZES:
      return {
        base: state.base,
        config: updateObject(state.config, { sizesList: action.sizes })
      };
    case UPDATE_SEARCH:
      return {
        base: state.base,
        config: updateObject(state.config, { search: action.input })
      };
    case UPDATE_SORT_PRICES:
      return {
        base: state.base,
        config: updateObject(state.config, { sortOrder: action.types })
      };
    default:
      return state;
  }
};

export default filterReducer;
