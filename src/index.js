// import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';
import reducer from './reducers/reducers';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}><App /></Provider>, document.querySelector('#root'));
