import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import rocketsReducer, { LOAD_ROCKETS } from './redux/rockets/rockets';
import missonsReducer, { LOAD_MISSIONS } from './redux/missions/missions';
import { rockets, missions } from './redux/mock/data';

const middlewares = [thunkMiddleWare];
const middlewareEnhancers = applyMiddleware(...middlewares);

const reducer = combineReducers({ rockets: rocketsReducer, missions: missonsReducer});
const store = createStore(reducer, middlewareEnhancers);

const rocketsCreator = {
  type: LOAD_ROCKETS,
  payload: rockets,
};

const missionsCreator = {
  type: LOAD_MISSIONS,
  payload: missions,
};

store.dispatch(rocketsCreator);
store.dispatch(missionsCreator);

const Wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;
const render = (ui, options) => {
  return rtlRender(ui, { wrapper: Wrapper, ...options });
}

export * from '@testing-library/react';
export { render };