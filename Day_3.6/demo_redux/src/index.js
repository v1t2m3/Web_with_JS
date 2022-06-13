import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.css';
import App from './App';
import reducer from './reducer';

const store = createStore(reducer);
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
