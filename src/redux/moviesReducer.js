import {moviesAPI, playlistsAPI} from "../DAL/api";

const GET_POPULAR = 'GET_POPULAR';
const GET_NOW_PLAYING = 'GET_NOW_PLAYING';
const GET_MOVIE_DETAILS = 'GET_MOVIE_DETAILS';
const GET_MOVIE_GENRES = 'GET_MOVIE_GENRES';
const GET_MOVIE_CREDITS = 'GET_MOVIE_CREDITS';
const GET_MOVIE_IMAGES = 'GET_MOVIE_IMAGES';


const initialState={
    movies:null,
    nowPlayingMovies:null,
    movieDetails:null,
    movieGenres:null,
    movieCredits:null,
    movieImages:null,

    currentPage: 1,
    totalPages:null,
};

const moviesReducer=(state=initialState, action)=>{
    switch(action.type){
        case GET_POPULAR:
            return {
                ...state,
                movies: action.data.results,
                totalPages: action.data.total_pages,
                currentPage: action.data.page
            };
        case GET_NOW_PLAYING:
            return{
                ...state,
                nowPlayingMovies:action.data.results,
                totalPages: action.data.total_pages,
                currentPage: action.data.page
            };
        case GET_MOVIE_DETAILS:
            return{
                ...state,
                movieDetails:action.data
            };
        case GET_MOVIE_GENRES:
            return{
                ...state,
                movieGenres:action.data
            };
        case GET_MOVIE_CREDITS:
            return{
                ...state,
                movieCredits: action.data
            };
        case GET_MOVIE_IMAGES:
            return{
                ...state,
                movieImages:action.data
            };
        default:
            return state;
    }
};
//action creators
export const setPopularMovies=(data)=>({type:GET_POPULAR, data});
export const setNowPlayingMovies=(data)=>({type:GET_NOW_PLAYING, data});
export const setMovieDetails=(data)=>({type:GET_MOVIE_DETAILS, data});
export const setMovieGenres=(data)=>({type:GET_MOVIE_GENRES, data});
export const setMovieCredits=(data)=>({type:GET_MOVIE_CREDITS, data});
export const setMovieImages=(data)=>({type:GET_MOVIE_IMAGES, data});

//redux-thunks
export const getPopularMovies=(page)=>{
    return (dispatch)=>{
        moviesAPI.queryPopularMovies(page).then(response=> {
            if (response.results) {
                dispatch(setPopularMovies(response));
            }
        });
    }
};
export const getNowPlayingMovies=(page)=>{
    return (dispatch)=>{
        moviesAPI.queryNowPlayingMovies(page).then(response=> {
            if (response.results) {
                dispatch(setNowPlayingMovies(response));
            }
        });
    }
};
export const getMovieDetails=(movieId)=>{
    return (dispatch)=>{
        moviesAPI.queryMovieDetails(movieId).then(response=> {
            if (response) {
                dispatch(setMovieDetails(response));
            }
        });
    }
};
export const getMovieGenres=()=>{
    return (dispatch)=>{
        moviesAPI.queryMoviesGenres().then(response=>{
            if(response){
                dispatch(setMovieGenres(response));
            }
        })
    }
};
export const getMovieCredits=(movieId)=>{
    return (dispatch)=>{
        moviesAPI.queryMovieCredits(movieId).then(response=>{
            if(response){
                dispatch(setMovieCredits(response));
            }
        })
    }
};
export const getMovieImages=(movieId)=>{
    return (dispatch)=>{
        moviesAPI.queryMovieImages(movieId).then(response=>{
            if(response){
                dispatch(setMovieImages(response));
            }
        })
    }
};

export const rateMovie=(movieId, rating)=>{
  return ()=>{
      moviesAPI.rateMovie(movieId, rating).then(response=>{
          return response;
      })
  }
};

export const addToPlayList=(playlistId,movieId)=>{
    return (dispatch)=>{
        playlistsAPI.addToPlayList(playlistId, movieId).then(response=>{
            if(response.status_code===1){
                alert(response.status_message);
            }
        })
    }
};

export const removeFromPlayList=(playlistId,movieId)=>{
    return (dispatch)=>{
        playlistsAPI.removeFromPlayList(playlistId, movieId).then(response=>{
            if(response.status_code===1){
                alert(response.status_message);
            }
        })
    }
};

export default moviesReducer;