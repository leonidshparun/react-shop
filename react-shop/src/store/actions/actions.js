import {
	UPDATE_BRANDS,
	UPDATE_PRICES,
} from "./action-types";

export const updateBrands = brands => ({ type: UPDATE_BRANDS, brands });
export const updatePrices = prices => ({ type: UPDATE_PRICES, prices });
