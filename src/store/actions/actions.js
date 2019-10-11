import {
  UPDATE_BRANDS,
  UPDATE_PRICES,
  UPDATE_SIZES,
  ADD_ITEM,
  REMOVE_ITEM,
  UPDATE_SORT_PRICES,
  UPDATE_SEARCH,
  CHANGE_QUANTITY
} from './action-types';

export const updateBrands = brands => ({ type: UPDATE_BRANDS, brands });
export const updatePrices = prices => ({ type: UPDATE_PRICES, prices });
export const updateSizes = sizes => ({ type: UPDATE_SIZES, sizes });

export const updateSearch = input => ({ type: UPDATE_SEARCH, input });

export const addItemToCart = item => ({ type: ADD_ITEM, item });
export const removeItemFromCart = pos => ({ type: REMOVE_ITEM, pos });

export const updateSortPrices = types => ({ type: UPDATE_SORT_PRICES, types });

export const changeQuantity = item => ({ type: CHANGE_QUANTITY, item });
