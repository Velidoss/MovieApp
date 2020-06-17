import keys from "../config/config";
import * as axios from "axios";

let appUrl = keys.appUrl;
let apiToken = keys.api_token;
let apiKey = keys.api_key;
let url = "https://api.themoviedb.org/3";

export const authAPI = {

    newRequestToken:()=>{
        return axios.get(`${url}/authentication/token/new?api_key=${apiKey}`).then(response=>{
                return response.data.request_token;
            }
        )
    },
    authRequestToken:(requestToken)=>{
        return axios.get(`https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=${appUrl}`).then(response=>{
            return response.data;
        })
    },
    createSessionId:(requestToken)=>{
        return axios.post(`${url}/authentication/session/new?api_key=${apiKey}`,{ "request_token": requestToken}).then(response=>{
            return response.data.session_id
        });
    }
};

export const moviesAPI={
    getPopularMovies:()=>{
        return axios.get(`${url}/movie/popular?api_key=${apiKey}`).then(response=>{
            return response.data;
        });
    }
};

