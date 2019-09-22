import {
	ADD_ITEM,
	REMOVE_ITEM,
} from '../../actions/action-types';

const cartReducer = (state = [], action) => {
	switch (action.type) {
		case ADD_ITEM: return [...state, action.item];
		case REMOVE_ITEM: return [...action.items];
		default: return state;
	}
}

export default cartReducer;