import { createStore, combineReducers } from 'redux';
import composedEnhancers from './enhancers';
import missionsReducer from './missions/missions';
import rocketsReducer from './rockets/rockets';

const reducer = combineReducers({ rockets: rocketsReducer, mission: missionsReducer });
const configureStore = createStore(reducer, composedEnhancers);

export default configureStore;
