import { createStore } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import { celReducer } from "./celebrities/celReducer";

const rootReducer = combineReducers({
    celebrities: celReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));