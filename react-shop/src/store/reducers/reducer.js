import {
	UPDATE_BRANDS,
	UPDATE_PRICES,
	UPDATE_SIZES,
} from '../actions/action-types';


import data from '../../static/products/products.json';

const brandsAll = [...new Set(data.products.map(product => product.brand))];
const brands = {};
brandsAll.forEach(brand => brands[brand] = true);

const pricesRange = [...new Set(data.products.map(product => product.price))];
const prices = [Math.min(...pricesRange), Math.max(...pricesRange)];

const sizesAll = [...new Set(data.products
	.reduce((acc, val) => acc.concat(val.availableSizes), []))];
const sizes = {};
sizesAll.forEach(size => sizes[size] = true);

const initialState = {
	filter: {
		brands,
		prices,
		sizes,
	}
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_BRANDS:
			return {
				...state,
				filter: {
					...state.filter,
					brands: action.brands
				}
			};
		case UPDATE_PRICES:
			return {
				...state,
				filter: {
					...state.filter,
					prices: action.prices
				}
			};
		case UPDATE_SIZES:
			return {
				...state,
				filter: {
					...state.filter,
					sizes: action.sizes
				}
			};

		default:
			return state
	}
}
export default rootReducer;