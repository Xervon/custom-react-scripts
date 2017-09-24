// @flow
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import store, { history } from '@@/store';
import registerServiceWorker from '@@/registerServiceWorker';

import AppRouter from '@Components/AppRouter/';

import '@Styles/main.scss';

const target = document.getElementById('root');

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppRouter />
    </ConnectedRouter>
  </Provider>,
  target
);

registerServiceWorker();
