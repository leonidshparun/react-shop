import {
	UPDATE_SORT_PRICES,
} from '../../actions/action-types';

import { updateObject } from '../../../utils/utils';

const initialState = {
	prices: 'init',
};

const sortReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_SORT_PRICES: return updateObject(state, { prices: action.types });
		default: return state;
	}
}

export default sortReducer;