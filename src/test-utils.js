import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import PropType from 'prop-types';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import rocketsReducer, { LOAD_ROCKETS } from './redux/rockets/rockets';
import missonsReducer, { LOAD_MISSIONS } from './redux/missions/missions';
import dragonsReducer, { LOAD_DRAGONS } from './redux/dragons/dragons';
import { rockets, missions, dragons } from './redux/mock/data';

const middlewares = [thunkMiddleWare];
const middlewareEnhancers = applyMiddleware(...middlewares);

const reducer = combineReducers({
  rockets: rocketsReducer, missions: missonsReducer, dragons: dragonsReducer,
});
const store = createStore(reducer, middlewareEnhancers);

const rocketsCreator = {
  type: LOAD_ROCKETS,
  payload: rockets,
};

const missionsCreator = {
  type: LOAD_MISSIONS,
  payload: missions,
};

const dragonsCreator = {
  type: LOAD_DRAGONS,
  payload: dragons,
};

store.dispatch(rocketsCreator);
store.dispatch(missionsCreator);
store.dispatch(dragonsCreator);

const Wrapper = ({ children }) => (
  <BrowserRouter>
    <Provider store={store}>{children}</Provider>
  </BrowserRouter>
);

Wrapper.propTypes = {
  children: PropType.node.isRequired,
};

const render = (ui, options) => rtlRender(ui, { wrapper: Wrapper, ...options });

export * from '@testing-library/react';
export { render };
