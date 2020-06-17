import {applyMiddleware, combineReducers, createStore} from "redux";
import authReducer from "./authReducer";
import thunk from "redux-thunk";
import moviesReducer from "./moviesReducer";

const store = createStore(combineReducers({
        auth:authReducer,
        movies:moviesReducer,
    }
),applyMiddleware(thunk));

window.store= store;

export default store;