import {applyMiddleware, combineReducers, createStore} from "redux";
import authReducer from "./authReducer";
import thunk from "redux-thunk";
import moviesReducer from "./moviesReducer";
import tvShowsReducer from "./tvShowsReducer";
import actorsReducer from "./actorsReducer";
import listReducer from "./listReducer";
import searchReducer from "./searchReducer";

const store = createStore(combineReducers({
        auth:authReducer,
        movies:moviesReducer,
        tvShows:tvShowsReducer,
        actors:actorsReducer,
        list:listReducer,
        search: searchReducer
    }
),applyMiddleware(thunk));

window.store= store;

export default store;