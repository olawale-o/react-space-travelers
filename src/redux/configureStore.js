import { createStore, combineReducers } from 'redux';
import dragonsReducer from './dragons/dragons';
import composedEnhancers from './enhancers';
import missionsReducer from './missions/missions';
import rocketsReducer from './rockets/rockets';

const reducer = combineReducers({
  rockets: rocketsReducer, mission: missionsReducer, dragons: dragonsReducer,
});
const configureStore = createStore(reducer, composedEnhancers);

export default configureStore;
