// @flow
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import counterReducer from '@Reducers/counter';
import type { state as counterState } from '@Reducers/counter';

export type action = {
  type: string,
  data: any,
};

export type globalState = {
  routing: any,
  counter: counterState,
};

export default combineReducers({
  routing: routerReducer,
  counter: counterReducer,
});
