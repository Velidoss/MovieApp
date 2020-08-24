import keys from "../config/config";
import cookiesAPI from "./Cookies/CookiesAPI";
const axios = require('axios').default;
let appUrl = keys.appUrl;
let apiKey = keys.api_key;
let url = "https://api.themoviedb.org/3";


const AccountInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

AccountInstance.interceptors.request.use(config=>{
    config.params={
        'api_key': apiKey,
        'session_id':cookiesAPI.getSessionCookie(),
        ...config.params
    };
    return config;
});

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

instance.interceptors.request.use(config=>{
    config.params={
        'api_key': apiKey,
        ...config.params
    };
    return config;
});




export const authAPI = {

    newRequestToken:()=>{
        return instance.get(`${url}/authentication/token/new`).then(response=>{
                return response.data.request_token;
            }
        )
    },
    authRequestToken:(requestToken)=>{
        window.location.href = `https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=${appUrl}`;
    },

    authLogin:(username, password, requestToken)=>{
        return instance.post(`/authentication/token/validate_with_login`, {'username':username, 'password':password, 'request_token':requestToken}).then(response=>{
                return response.data.request_token;
            }
        )
    },
    createSessionId:(requestToken)=>{
        return instance.post(`${url}/authentication/session/new`,{ "request_token": requestToken}).then(response=>{
            return response.data.session_id
        });
    },
    queryGuestSessionId:()=>{
        return instance.get(`${url}/authentication/guest_session/new`).then(response=>{
            return response.data
        });
    },

    deleteSession:(session_id)=>{
        return instance.delete(`${url}/authentication/session`, {data:{session_id: session_id}}).then(response=>{
            return response.data;
        })
    }

};

export const moviesAPI={
    queryMovies:(sortType, page)=>{
        return instance.get(`/discover/movie?&sort_by=${sortType}&page=${page}`).then(response=>{
            return response.data;
        });
    },
    queryPopularMovies:(page)=>{
        return instance.get(`/movie/popular?page=${page}`).then(response=>{
            return response.data;
        });
    },
    queryNowPlayingMovies:(page)=>{
        return instance.get(`/movie/now_playing?page=${page}`).then(response=>{
            return response.data;
        })
    },
    queryMovieDetails:(movieId)=>{
        return instance.get(`/movie/${movieId}?append_to_response=videos`).then(response=>{
            return response.data;
        })
    },
    queryMoviesGenres:()=>{
        return instance.get(`/genre/movie/list`).then(response=>{
            return response.data.genres;
        });
    },
    queryMovieCredits:(movieId)=>{
        return instance.get(`/movie/${movieId}/credits`).then(response=>{
            return response.data;
        })
    },
    queryMovieImages:(movieId)=>{
        return instance.get(`/movie/${movieId}/images`).then(response=>{
            return response.data.backdrops;
        })
    },

    rateMovie:(movieId, guestSessionId, rating)=>{
        return AccountInstance.post(`/movie/${movieId}/rating`,
            {"value": rating} ).then(response=>{
                return response.data;
        })
    }
};

export const tvshowsAPI={
    queryPopularTvShows:(page)=>{
        return instance.get(`/tv/popular?page=${page}`).then(response=>{
            return response.data;
        })
    },
    queryTopTvShows:(page)=>{
        return instance.get(`${url}/tv/top_rated?page=${page}`).then(response=>{
            return response.data;
        })
    },
    queryTvShowsGenres:()=>{
        return instance.get(`${url}/genre/tv/list`).then(response=>{
            return response.data.genres;
        });
    },
    queryTvShowDetails:(tvshowId)=>{
        return instance.get(`${url}/tv/${tvshowId}?append_to_response=videos`).then(response=>{
            return response.data;
        })
    },
    queryTvShowCredits:(tvshowId)=>{
        return instance.get(`${url}/tv/${tvshowId}/credits`).then(response=>{
            return response.data.cast;
        })
    },
    queryTvShowImages:(tvshowId)=>{
        return instance.get(`${url}/tv/${tvshowId}/images`).then(response=>{
            return response.data.backdrops;
        })
    }

};
export const actorsAPI = {
  queryPopularActors:(page)=> {
      return instance.get(`${url}/person/popular?page=${page}`).then(response => {
          return response.data;
      })
  },
    queryActorDetails:(actorId)=>{
        return instance.get(`${url}/person/${actorId}?append_to_response=movie_credits`).then(response => {
            return response.data;
        })
    },
};

export const searchAPI = {
    searchQuery: (query)=>{
        return instance.get(`${url}/search/multi?query=${query}&include_adult=false`).then(response=>{
            return response.data;
        })
    }
};

export const userAPI = {
    queryAccDetails:()=>{
        return AccountInstance.get(`/account`).then(response=>{
            return response.data;
        })
    },
    queryCreatedLists:(accountId)=>{
        return AccountInstance.get(`/account/${accountId}/lists`).then(response=>{
            return response.data;
        })
    },
    queryFavoriteMovies:(accountId)=>{
        return AccountInstance.get(`/account/${accountId}/favorite/movies`, ).then(response=>{
            return response.data;
        })
    },
    queryFavoriteTvShows:(accountId)=>{
        return AccountInstance.get(`/account/${accountId}/favorite/tv`).then(response=>{
            return response.data;
        })
    },
    queryMovieWatchList:(accountId)=>{
        return AccountInstance.get(`/account/${accountId}/watchlist/movies`).then(response=>{
            return response.data;
        })
    },
    queryTvSHowsWatchList:(accountId)=>{
        return AccountInstance.get(`/account/${accountId}/watchlist/tv`).then(response=>{
            return response.data;
        })
    },
    queryRatedMovies:(accountId)=>{
        return AccountInstance.get(`/account/${accountId}/rated/movies`).then(response=>{
            return response.data;
        })
    },
    queryRatedTvSHows:(accountId)=>{
        return AccountInstance.get(`/account/${accountId}/rated/tv`).then(response=>{
            return response.data;
        })
    },

    addToWatchList:(accountId, mediaType, id)=>{
        return AccountInstance.post(`/account/${accountId}/watchlist`, {"media_type":mediaType, "media_id":id, "watchlist": true}).then(response=>{
            return response.data;
        })
    },
    addToFavorites:(accountId, mediaType, id)=>{
        return AccountInstance.post(`/account/${accountId}/favorite`, {"media_type":mediaType, "media_id":id, "favorite": true}).then(response=>{
            return response.data;
        })
    },
    removeFromWatchList:(accountId, mediaType, id)=>{
        return AccountInstance.post(`/account/${accountId}/watchlist`, {"media_type":mediaType, "media_id":id, "watchlist": false}).then(response=>{
            return response.data;
        })
    },
    removeFromFavorites:(accountId, mediaType, id)=>{
        return AccountInstance.post(`/account/${accountId}/favorite`, {"media_type":mediaType, "media_id":id, "favorite": false}).then(response=>{
            return response.data;
        })
    },
};

export const playlistsAPI={
    queryPlaylistDetails:(playlistId)=>{
        return instance.get(`/list/${playlistId}`).then(response=>{
            return response.data;
        })
    },
    addToPlayList:(playlistId, id)=>{
        return AccountInstance.post(`/list/${playlistId}/add_item?session_id=${cookiesAPI.getSessionCookie()}`, {"media_id":id, })
    },
    removeFromPlayList:(playlistId, id)=>{
        return AccountInstance.post(`/list/${playlistId}/remove_item?session_id=${cookiesAPI.getSessionCookie()}`, {"media_id":id, })
    }
};

