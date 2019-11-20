import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { movies } from "./reducers/index";

export const store = createStore(movies, applyMiddleware(thunk));
