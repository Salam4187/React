import {configureStore,combineReducers} from '@reduxjs/toolkit';
import { authReducer } from './authReducer';
import GadgetStore from '../Pages/GadgetStore';
import { gadgetsReducer } from './GadgetsReducer';

//when we have muliple reducer
const reducer=combineReducers({
    auth:authReducer,
    gadgets: gadgetsReducer
})


export const store=configureStore({reducer:reducer});
export type AppState= ReturnType<typeof store.getState>;
export type AppDispatch= typeof store.dispatch;