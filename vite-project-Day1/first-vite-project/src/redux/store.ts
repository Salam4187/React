import {configureStore,combineReducers} from '@reduxjs/toolkit';
import { authReducer } from './authReducer';

//when we have muliple reducer
const reducer=combineReducers({
    auth:authReducer
})


export const store=configureStore({reducer:reducer});
export type AppState= ReturnType<typeof store.getState>;
export type AppDispatch= typeof store.dispatch;