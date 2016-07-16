import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';

import defaultAction from './dummyReducer';

const rootReducer = combineReducers({defaultAction, routing : routerReducer});

export default rootReducer;