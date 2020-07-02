const CHANGE_MOVIES_MENU_STATE = 'CHANGE_MOVIES_MENU_STATE';
const CHANGE_TVSHOWS_MENU_STATE = 'CHANGE_TVSHOWS_MENU_STATE';
const CHANGE_ACTORS_MENU_STATE = 'CHANGE_ACTORS_MENU_STATE';

const initialState = {
    moviesMenuOpen : false,
    tvShowsMenuOpen : false,
    actorsMenuOpen : false,
};

const listReducer = (state=initialState, action)=>{
    switch(action.type){
        case CHANGE_MOVIES_MENU_STATE :
            if (!state.moviesMenuOpen){
                return {...state, moviesMenuOpen: true}
            }else if(state.moviesMenuOpen){
                return {...state, moviesMenuOpen: false}
            }
        case CHANGE_TVSHOWS_MENU_STATE :
            if (!state.tvShowsMenuOpen){
                return {...state, tvShowsMenuOpen: true}
            }else if(state.tvShowsMenuOpen){
                return {...state, tvShowsMenuOpen: false}
            }
        case CHANGE_ACTORS_MENU_STATE :
            if (!state.actorsMenuOpen){
                return {...state, actorsMenuOpen: true}
            }else if(state.actorsMenuOpen){
                return {...state, actorsMenuOpen: false}
            }
        default:
            return state;
    }
};

export const toggleMoviesMenu = ()=>({type:CHANGE_MOVIES_MENU_STATE});
export const toggleTvShowsMenu = ()=>({type:CHANGE_TVSHOWS_MENU_STATE});
export const toggleActorsMenu = ()=>({type:CHANGE_ACTORS_MENU_STATE});


export default listReducer;