import Server from 'server/server';

import { buildFIlterConfig as getFilterBase } from 'utils/filter';

import {
  UPDATE_BRANDS,
  UPDATE_PRICES,
  UPDATE_SIZES,
  ADD_ITEM,
  REMOVE_ITEM,
  UPDATE_SORT_PRICES,
  UPDATE_SEARCH,
  CHANGE_QUANTITY,
  BUILD_FILTER_CONFIG,
  FETCH_DATA_ERROR,
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  SHOW_POPUP,
  HIDE_POPUP,
  UPDATE_FILTER_ROUTE
} from './action-types';

export const updateBrands = brands => ({ type: UPDATE_BRANDS, brands });
export const updatePrices = prices => ({ type: UPDATE_PRICES, prices });
export const updateSizes = sizes => ({ type: UPDATE_SIZES, sizes });

export const updateSearch = input => ({ type: UPDATE_SEARCH, input });

export const addItemToCart = item => ({ type: ADD_ITEM, item });
export const removeItemFromCart = pos => ({ type: REMOVE_ITEM, pos });

export const updateSortPrices = types => ({ type: UPDATE_SORT_PRICES, types });

export const changeQuantity = item => ({ type: CHANGE_QUANTITY, item });

export const fetchDataStarted = () => ({ type: FETCH_DATA_START });

export const fetchDataSuccess = () => ({
  type: FETCH_DATA_SUCCESS,
  payload: true
});

export const fetchDataError = error => ({
  type: FETCH_DATA_ERROR,
  payload: error
});

export const buildFilterConfig = type => async dispatch => {
  try {
    const data = await Server.getData();
    const config = getFilterBase(data, type);
    dispatch({ type: BUILD_FILTER_CONFIG, config });
  } catch (exc) {
    dispatch(
      fetchDataError('Sorry, the service is not available at this time')
    );
  }
};

export const updateRoute = route => async dispatch => {
  try {
    return dispatch({ type: UPDATE_FILTER_ROUTE, route });
  } catch (exc) {
    return dispatch(
      fetchDataError('Sorry, the service is not available at this time')
    );
  }
};

export const fetchData = () => async dispatch => {
  dispatch(fetchDataStarted());
  try {
    const data = await Server.getData();
    return dispatch(fetchDataSuccess(data));
  } catch (exc) {
    return dispatch(
      fetchDataError('Sorry, the service is not available at this time')
    );
  }
};

export const hidePopup = () => async dispatch => {
  dispatch({ type: HIDE_POPUP });
};

export const showPopup = message => async dispatch => {
  dispatch({ type: SHOW_POPUP, payload: message });
};
