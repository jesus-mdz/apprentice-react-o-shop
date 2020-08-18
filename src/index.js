import React from 'react';
import ReactDOM from 'react-dom';
import '../src/styles/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import { configureFakeBackend } from './utils/fakeBackend';
import history from './utils/history';

configureFakeBackend();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
