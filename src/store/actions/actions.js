import Server from 'server/server';

import getFilterBase from 'utils/filter';

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
  FETCH_DATA_SUCCESS
} from './action-types';

export const updateBrands = brands => ({ type: UPDATE_BRANDS, brands });
export const updatePrices = prices => ({ type: UPDATE_PRICES, prices });
export const updateSizes = sizes => ({ type: UPDATE_SIZES, sizes });

export const updateSearch = input => ({ type: UPDATE_SEARCH, input });

export const addItemToCart = item => ({ type: ADD_ITEM, item });
export const removeItemFromCart = pos => ({ type: REMOVE_ITEM, pos });

export const updateSortPrices = types => ({ type: UPDATE_SORT_PRICES, types });

export const changeQuantity = item => ({ type: CHANGE_QUANTITY, item });

export const fetchDataError = () => ({ type: FETCH_DATA_ERROR });

export const fetchDataStarted = () => ({ type: FETCH_DATA_START });

export const fetchDataSuccess = () => ({
  type: FETCH_DATA_SUCCESS,
  payload: true
});

export const buildFilterConfig = () => async dispatch => {
  try {
    const data = await Server.getData();
    const config = getFilterBase(data);
    dispatch({ type: BUILD_FILTER_CONFIG, config });
  } catch (exc) {
    dispatch({ error: exc, type: 'ERROR' });
  }
};

export const fetchData = () => async dispatch => {
  dispatch(fetchDataStarted());
  try {
    await Server.getData();
    dispatch(fetchDataSuccess());
  } catch (exc) {
    dispatch(fetchDataError());
  }
};
