import React from 'react';

import {combineReducers} from "redux";
import Functions from "./Functions";

const rootReducer = combineReducers(
    {
        myReducer:Functions
    });
export default rootReducer;

