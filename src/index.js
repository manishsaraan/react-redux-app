import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import routes from './routes';
import './styles/styles.css' 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//setup initial state here
const store = configureStore();

render(
	<Provider store={store}>
       <Router history={browserHistory} routes={routes} />
    </Provider>,
       document.getElementById('app')
	);