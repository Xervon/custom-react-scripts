// @flow
import { bindActionCreators } from 'redux';

import type { globalState } from '@Reducers/reducers';

import { changePage } from '@Actions/Router';

export type props = {
  changePage: Function,
};

export const mapDispatchToProps = (dispatch: Function) =>
  bindActionCreators(
    {
      changePage,
    },
    dispatch
  );

export const mapStateToProps = (state: globalState) => ({});
