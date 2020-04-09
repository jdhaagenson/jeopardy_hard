// import {createBrowserHistory} from 'history';
import {configureStore} from '@reduxjs/toolkit';
import {combineReducers } from 'redux';
import {connectRouter} from 'connected-react-router';
// import {reducers} from './reducers';

export * from './actions';
export * from './reducers';


export const store = configureStore({
    reducer: {
        router: connectRouter(),
        rootReducer: combineReducers(reducers)
    },
    preloadedState: {},
    devTools: process.env.NODE_ENV !== 'production'
});

