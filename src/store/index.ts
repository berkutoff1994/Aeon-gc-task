import { createStore } from 'redux';
import { rootReducer } from './taskArray/index';

export const store = createStore(rootReducer);