import {createStore} from 'redux';
import {rootReducer} from './store';

export const store = createStore(rootReducer);