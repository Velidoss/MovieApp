import keys from "../config/config";
import * as axios from "axios";
import cookiesAPI from "./Cookies/CookiesAPI";

let appUrl = keys.appUrl;
let apiKey = keys.api_key;
let url = "https://api.themoviedb.org/3";


const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params:{
        api_key: apiKey,
    },
});

const accountDetails = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params:{
        api_key: apiKey,
    },
});




export const authAPI = {

    newRequestToken:()=>{
        return axios.get(`${url}/authentication/token/new?api_key=${apiKey}`).then(response=>{
                return response.data.request_token;
            }
        )
    },
    authRequestToken:(requestToken)=>{
        window.location.href = `https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=${appUrl}`;
    },

    authLogin:(username, password, requestToken)=>{
        return instance.post(`/authentication/token/validate_with_login?api_key=${apiKey}`, {'username':username, 'password':password, 'request_token':requestToken}).then(response=>{
                return response.data;
            }
        )
    },
    createSessionId:(requestToken)=>{
        return axios.post(`${url}/authentication/session/new?api_key=${apiKey}`,{ "request_token": requestToken}).then(response=>{
            return response.data.session_id
        });
    },
    queryGuestSessionId:()=>{
        return axios.get(`${url}/authentication/guest_session/new?api_key=${apiKey}`).then(response=>{
            return response.data
        });
    },

    deleteSession:(session_id)=>{
        return axios.delete(`${url}/authentication/session?api_key=${apiKey}`, {data:{session_id: session_id}}).then(response=>{
            return response.data;
        })
    }

};

export const moviesAPI={
    queryMovies:(sortType, page)=>{
        return instance.get(`/discover/movie?api_key=${apiKey}&sort_by=${sortType}&page=${page}`).then(response=>{
            return response.data;
        });
    },
    queryPopularMovies:(page)=>{
        return axios.get(`${url}/movie/popular?api_key=${apiKey}&page=${page}`).then(response=>{
            return response.data;
        });
    },
    queryNowPlayingMovies:(page)=>{
        return axios.get(`${url}/movie/now_playing?api_key=${apiKey}&page=${page}`).then(response=>{
            return response.data;
        })
    },
    queryMovieDetails:(movieId)=>{
        return axios.get(`${url}/movie/${movieId}?api_key=${apiKey}&append_to_response=videos`).then(response=>{
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
            return response.data;
        })
    },
    queryMovieImages:(movieId)=>{
        return axios.get(`${url}/movie/${movieId}/images?api_key=${apiKey}`).then(response=>{
            return response.data.backdrops;
        })
    },

    rateMovie:(movieId, guestSessionId, rating)=>{
        return axios.post(`${url}/movie/${movieId}/rating?api_key=${apiKey}&guest_session_id=${guestSessionId}`,
            {"value": rating} ).then(response=>{
                return response.data;
        })
    }
};

export const tvshowsAPI={
    queryPopularTvShows:(page)=>{
        return axios.get(`${url}/tv/popular?api_key=${apiKey}&page=${page}`).then(response=>{
            return response.data;
        })
    },
    queryTopTvShows:(page)=>{
        return axios.get(`${url}/tv/top_rated?api_key=${apiKey}&page=${page}`).then(response=>{
            return response.data;
        })
    },
    queryTvShowsGenres:()=>{
        return axios.get(`${url}/genre/tv/list?api_key=${apiKey}`).then(response=>{
            return response.data.genres;
        });
    },
    queryTvShowDetails:(tvshowId)=>{
        return axios.get(`${url}/tv/${tvshowId}?api_key=${apiKey}&append_to_response=videos`).then(response=>{
            return response.data;
        })
    },
    queryTvShowCredits:(tvshowId)=>{
        return axios.get(`${url}/tv/${tvshowId}/credits?api_key=${apiKey}`).then(response=>{
            return response.data.cast;
        })
    },
    queryTvShowImages:(tvshowId)=>{
        return axios.get(`${url}/tv/${tvshowId}/images?api_key=${apiKey}`).then(response=>{
            return response.data.backdrops;
        })
    }

};
export const actorsAPI = {
  queryPopularActors:(page)=> {
      return axios.get(`${url}/person/popular?api_key=${apiKey}&page=${page}`).then(response => {
          return response.data;
      })
  },
    queryActorDetails:(actorId)=>{
        return axios.get(`${url}/person/${actorId}?api_key=${apiKey}&append_to_response=movie_credits`).then(response => {
            return response.data;
        })
    },
};

export const searchAPI = {
    searchQuery: (query)=>{
        return axios.get(`${url}/search/multi?api_key=${apiKey}&query=${query}&include_adult=false`).then(response=>{
            return response.data;
        })
    }
};

export const userAPI = {
    queryAccDetails:()=>{
        return accountDetails.get(`/account?api_key=${apiKey}&session_id=${cookiesAPI.getSessionCookie()}`).then(response=>{
            return response.data;
        })
    },
    queryCreatedLists:(accountId)=>{
        return accountDetails.get(`/account/${accountId}/lists?api_key=${apiKey}&session_id=${cookiesAPI.getSessionCookie()}`).then(response=>{
            return response.data;
        })
    },
    queryFavoriteMovies:(accountId)=>{
        return accountDetails.get(`/account/${accountId}/favorite/movies?api_key=${apiKey}&session_id=${cookiesAPI.getSessionCookie()}`).then(response=>{
            return response.data;
        })
    },
    queryFavoriteTvShows:(accountId)=>{
        return accountDetails.get(`/account/${accountId}/favorite/tv?api_key=${apiKey}&session_id=${cookiesAPI.getSessionCookie()}`).then(response=>{
            return response.data;
        })
    },
    queryMovieWatchList:(accountId)=>{
        return accountDetails.get(`/account/${accountId}/watchlist/movies?api_key=${apiKey}&session_id=${cookiesAPI.getSessionCookie()}`).then(response=>{
            return response.data;
        })
    },
    queryTvSHowsWatchList:(accountId)=>{
        return accountDetails.get(`/account/${accountId}/watchlist/tv?api_key=${apiKey}&session_id=${cookiesAPI.getSessionCookie()}`).then(response=>{
            return response.data;
        })
    },
    queryRatedMovies:(accountId)=>{
        return accountDetails.get(`/account/${accountId}/rated/movies?api_key=${apiKey}&session_id=${cookiesAPI.getSessionCookie()}`).then(response=>{
            return response.data;
        })
    },
    queryRatedTvSHows:(accountId)=>{
        return accountDetails.get(`/account/${accountId}/rated/tv?api_key=${apiKey}&session_id=${cookiesAPI.getSessionCookie()}`).then(response=>{
            return response.data;
        })
    },

    addToWatchList:(accountId, mediaType, id)=>{
        return accountDetails.post(`/account/${accountId}/watchlist?api_key=${apiKey}&session_id=${cookiesAPI.getSessionCookie()}`, {"media_type":mediaType, "media_id":id, "watchlist": true}).then(response=>{
            return response.data;
        })
    },
    addToFavorites:(accountId, mediaType, id)=>{
        return accountDetails.post(`/account/${accountId}/favorite?api_key=${apiKey}&session_id=${cookiesAPI.getSessionCookie()}`, {"media_type":mediaType, "media_id":id, "favorite": true}).then(response=>{
            return response.data;
        })
    },
    removeFromWatchList:(accountId, mediaType, id)=>{
        return accountDetails.post(`/account/${accountId}/watchlist?api_key=${apiKey}&session_id=${cookiesAPI.getSessionCookie()}`, {"media_type":mediaType, "media_id":id, "watchlist": false}).then(response=>{
            return response.data;
        })
    },
    removeFromFavorites:(accountId, mediaType, id)=>{
        return accountDetails.post(`/account/${accountId}/favorite?api_key=${apiKey}&session_id=${cookiesAPI.getSessionCookie()}`, {"media_type":mediaType, "media_id":id, "favorite": false}).then(response=>{
            return response.data;
        })
    },
};

export const playlistsAPI={
    queryPlaylistDetails:(playlistId)=>{
        return accountDetails.get(`/list/${playlistId}?api_key=${apiKey}`).then(response=>{
            return response.data;
        })
    },
    addToPlayList:(playlistId, id)=>{
        return accountDetails.post(`/list/${playlistId}/add_item?api_key=${apiKey}&session_id=${cookiesAPI.getSessionCookie()}`, {"media_id":id, })
    }
};

