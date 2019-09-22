import { createStore, applyMiddleware } from "redux";

import rootReducer from './reducers/reducer';

const logger = store => next => action => {
	console.group(action.type)
	console.log('current state', store.getState())
	console.info('dispatching', action)
	const result = next(action)
	console.log('next state', store.getState())
	console.groupEnd(action.type)
	return result
}

const store = createStore(
	rootReducer,
	applyMiddleware(logger),
);

export default store;