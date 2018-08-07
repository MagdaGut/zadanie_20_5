import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import registerServiceWorker from './registerServiceWorker';
import DevTools from './DevTools';
import routes from './routes';
import { Router, hashHistory } from 'react-router';
import './country.css';

render(
  <Provider store={store}>
    <div>
      <Router history={hashHistory} routes={routes}/>
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
);


registerServiceWorker();

store.dispatch({type: 'GET_COUNTRIES'});



