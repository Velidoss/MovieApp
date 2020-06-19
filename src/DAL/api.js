import keys from "../config/config";
import * as axios from "axios";

let appUrl = keys.appUrl;
let apiKey = keys.api_key;
let url = "https://api.themoviedb.org/3";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    withCredentials:true,
    params:{
        "Authorization": keys.api_token,
    }
});

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
    queryPopularMovies:()=>{
        return axios.get(`${url}/movie/popular?api_key=${apiKey}`).then(response=>{
            return response.data;
        });
    },
    queryNowPlayingMovies:()=>{
        return axios.get(`${url}/movie/now_playing?api_key=${apiKey}&region=UA`).then(response=>{
            return response.data;
        })
    },
    queryMovieDetails:(movieId)=>{
        return axios.get(`${url}/movie/${movieId}?api_key=${apiKey}`).then(response=>{
            return response.data;
        })
    },
    queryMoviesGenres:()=>{
        return axios.get(`${url}/genre/movie/list?api_key=${apiKey}`).then(response=>{
            return response.data.genres;
        });
    },
    queryMovieCredits:(movieId)=>{
        return axios.get(`${url}/movie/${movieId}/credits?api_key=${apiKey}`).then(response=>{
            return response.data.cast;
        })
    }
};

export const tvshowsAPI={
    queryPopularTvShows:()=>{
        return axios.get(`${url}/tv/popular?api_key=${apiKey}`).then(response=>{
            return response.data;
        })
    },
    queryTopTvShows:()=>{
        return axios.get(`${url}/tv/top_rated?api_key=${apiKey}`).then(response=>{
            return response.data;
        })
    },
    queryTvShowsGenres:()=>{
        return axios.get(`${url}/genre/tv/list?api_key=${apiKey}`).then(response=>{
            return response.data.genres;
        });
    },

}

