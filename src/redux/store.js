import {applyMiddleware, combineReducers, createStore} from "redux";
import authReducer from "./authReducer";
import thunk from "redux-thunk";

const store = createStore(combineReducers({
        auth:authReducer
    }
),applyMiddleware(thunk));

window.store= store;

export default store;