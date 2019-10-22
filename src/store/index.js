import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});

const enhancer = composeEnhancers(applyMiddleware(thunk));

/* eslint-disable no-underscore-dangle */
const store = createStore(rootReducer, enhancer);

export default store;
