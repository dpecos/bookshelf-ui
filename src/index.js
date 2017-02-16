import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'

import makeRoutes from './routes'

import store from './store/DataStore';

import 'bootstrap/dist/css/bootstrap.css'
import './index.css';

const routes = makeRoutes()

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}
      routes={routes} />
  </Provider>,
  document.getElementById('root')
);
