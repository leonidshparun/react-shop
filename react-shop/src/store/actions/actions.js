import {
	UPDATE_BRANDS,
	UPDATE_PRICES,
	UPDATE_SIZES,
} from "./action-types";

export const updateBrands = brands => ({ type: UPDATE_BRANDS, brands });
export const updatePrices = prices => ({ type: UPDATE_PRICES, prices });
export const updateSizes = sizes => ({ type: UPDATE_SIZES, sizes });
