// @flow
import update from 'immutability-helper';

import type { action } from '@Reducers';

export type state = {
  value: number,
};

const initialState: state = {
  value: 0,
};

export default (state: state = initialState, action: action) => {
  switch (action.type) {
    case 'counter/CHANGE_VALUE':
      return update(state, {
        value: { $apply: v => v + action.data.value },
      });
    case 'counter/SET_VALUE':
      return update(state, {
        value: { $set: action.data.value },
      });
    default:
      return state;
  }
};
