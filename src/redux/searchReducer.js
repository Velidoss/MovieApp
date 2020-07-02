import {searchAPI} from "../DAL/api";

const CHANGE_QUERY = 'CHANGE_QUERY';
const FETCH_QUERY_RESULT = 'FETCH_QUERY_RESULT';

let initialState  = {
  query:null,
    queryResult:null
};

const searchReducer = (state=initialState, action)=>{
    switch(action.type){
        case CHANGE_QUERY:
            return {...state, query: action.query};
        case FETCH_QUERY_RESULT:
            return {...state, queryResult: action.queryResult};
        default:
            return state;
    }
};

export const changeQuery = (query)=>({type:CHANGE_QUERY, query});
export const fetchQueryResult = (queryResult)=>({type:FETCH_QUERY_RESULT, queryResult});

export const searchByQuery=(query)=>{
    return (dispatch)=>{
        searchAPI.searchQuery(query).then(response=>{
            dispatch(fetchQueryResult(response.results));
        })
    }
};

export default searchReducer;