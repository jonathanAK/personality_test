import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';
import {saveState} from './store/localStorage';
import throttle from 'lodash/throttle';


const store = configureStore();

store.subscribe(throttle(()=>{
    saveState(store.getState());
},1500));

if (window.location.hostname.indexOf('localhost') > -1) {
    // @ts-ignore
    window['store'] = store;
}

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
