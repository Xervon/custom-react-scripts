// @flow
import { bindActionCreators } from 'redux';

import type { globalState } from '@Reducers';

import { changeCounter, setCounter } from '@Actions/Counter';

export type props = {
  changeCounter: number => void,
  setCounter: number => void,
  counterValue: number,
};

export const mapDispatchToProps = (dispatch: Function) =>
  bindActionCreators(
    {
      changeCounter,
      setCounter,
    },
    dispatch
  );

export const mapStateToProps = (state: globalState) => ({
  counterValue: state.counter.value,
});
