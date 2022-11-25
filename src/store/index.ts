import {createStore } from 'redux';
import { rootReducer } from './guntt/index';

export const store = createStore(rootReducer);