import React from 'react';
import { BrowserRouter  } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import burgerBuilderReducer from './store/reducers/burgerBuilder';
import orderReducer from './store/reducers/order';
import authReducer from './store/reducers/auth';
import dashboardReducer from './store/reducers/dashboard';
import { logoutSaga } from './store/sagas/auth';
import thunk from 'redux-thunk';
import createSagaMiddleware from '@redux-saga/core';

const composeEnchancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
	burgerBuilder: burgerBuilderReducer,
	order: orderReducer,
    auth: authReducer,
    dashboard: dashboardReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer,  composeEnchancers(
	applyMiddleware(thunk, sagaMiddleware)
));

sagaMiddleware.run(logoutSaga);

const app = (

	<Provider store={store} >
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
	);


ReactDOM.render( app, document.getElementById('root'));
registerServiceWorker();
