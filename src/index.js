import React from 'react';
import ReactDOM from 'react-dom';

import './css/index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';
// import configureStore from './store';
import rootReducer from './reducers/rootReducer';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import getPersonSaga from './sagas/characterSaga';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(getPersonSaga)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
