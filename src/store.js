import { legacy_createStore as createStore } from 'redux';
import rootReducer from "./reducers";
import React from "react";
import Functions from "./reducers/Functions";
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {persistReducer} from 'redux-persist'
import {combineReducers} from "@reduxjs/toolkit";

const persistConfig = {
    key:"root",
    version:1,
    storage
}
const reducer = combineReducers ({
    func : Functions
});

const persistedReducer = persistReducer (persistConfig,reducer);
export const  store = configureStore({
    reducer: persistedReducer
})


