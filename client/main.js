import React from 'react';

import { render } from 'react-dom';

// import css

import scss from './styles/style.scss';

//components
import App from './components/App';


// import react router
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

//import store
import { Provider } from 'react-redux';
import  store, { history} from './store'

const router = (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
			</Route>
			
		</Router>
	</Provider>

)

render(router, document.getElementById('root'));
