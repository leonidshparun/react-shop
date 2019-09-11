import {
	UPDATE_BRANDS,
	UPDATE_PRICES,
} from '../actions/action-types';


import data from '../../static/products/products.json';

const brandsAll = [...new Set(data.products.map(product => product.brand))];
const brands = {};
brandsAll.forEach(brand => brands[brand] = true);
const pricesRange = Array.from(new Set(data.products.map(product => product.price)));
const prices = [Math.min(...pricesRange), Math.max(...pricesRange)];
const sizes = Array.from(new Set(...data.products.map(product => product.availableSizes)));

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
		default:
			return state
	}
}
export default rootReducer;