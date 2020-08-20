export const selectPopularActors = (state)=>{
    return state.actors.popularActors;
};

export const selectCurrentPage = (state)=>{
    return state.actors.currentPage;
};

export const selectTotalPages = (state)=>{
    return state.actors.totalPages;
};

