import {
  UPDATE_BRANDS,
  UPDATE_PRICES,
  UPDATE_SIZES,
  UPDATE_SEARCH,
  UPDATE_SORT_PRICES,
  UPDATE_DISCOUNTS
} from '../../actions/action-types';

import data from '../../../static/products/products.json';

import { updateObject } from '../../../utils/utils';

const brandsAll = [...new Set(data.products.map(product => product.brand))];
const brands = {};
brandsAll.forEach(brand => {
  brands[brand] = true;
});

const pricesRange = [...new Set(data.products.map(product => product.price))];
const prices = [Math.min(...pricesRange), Math.max(...pricesRange)];

const initialPrices = [...prices];

const sizesAll = [
  ...new Set(
    data.products.reduce((acc, val) => acc.concat(val.availableSizes), [])
  )
];
const sizes = {};
sizesAll.forEach(size => {
  sizes[size] = true;
});

const initialState = {
  brands,
  prices,
  sizes,
  search: '',
  sortPrices: 'init',
  sizesAll: Object.keys(sizes),
  brandsAll: { ...brands },
  initialPrices,
  showOnlyDiscounts: false
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_BRANDS:
      return updateObject(state, { brands: action.brands });
    case UPDATE_PRICES:
      return updateObject(state, { prices: action.prices });
    case UPDATE_SIZES:
      return updateObject(state, { sizes: action.sizes });
    case UPDATE_SEARCH:
      return updateObject(state, { search: action.input });
    case UPDATE_SORT_PRICES:
      return updateObject(state, { sortPrices: action.types });
    case UPDATE_DISCOUNTS:
      return updateObject(state, { showOnlyDiscounts: action.value });
    default:
      return state;
  }
};

export default filterReducer;