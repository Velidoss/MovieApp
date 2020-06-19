import {applyMiddleware, combineReducers, createStore} from "redux";
import authReducer from "./authReducer";
import thunk from "redux-thunk";
import moviesReducer from "./moviesReducer";
import tvShowsReducer from "./tvShowsReducer";

const store = createStore(combineReducers({
        auth:authReducer,
        movies:moviesReducer,
        tvShows:tvShowsReducer,
    }
),applyMiddleware(thunk));

window.store= store;

export default store;