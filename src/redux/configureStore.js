import { createStore, combineReducers } from 'redux';
import composedEnhancers from './enhancers';
import rocketsReducer from './rockets/rockets';

const reducer = combineReducers({ rockets: rocketsReducer });
const configureStore = createStore(reducer, composedEnhancers);

export default configureStore;
