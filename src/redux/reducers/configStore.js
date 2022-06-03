import { applyMiddleware, combineReducers } from "redux";
import { legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { ThemeReducer } from "./ThemeReducer";



const rootReducer = combineReducers({
  ThemeReducer

});

export const store = createStore(rootReducer, applyMiddleware(thunk));

