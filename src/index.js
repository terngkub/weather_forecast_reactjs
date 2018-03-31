import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
	<div className="container">
		<Provider store={createStoreWithMiddleware(reducers)}>
			<App />
		</Provider>
	</div>
	, document.getElementById('root'));

if (module.hot) {
	module.hot.accept();
}
