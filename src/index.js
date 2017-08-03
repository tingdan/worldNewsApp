import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import promise from 'redux-promise'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import newsApp from './reducers'

let store = createStore(newsApp, applyMiddleware(promise));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
