let initialState = {
    popularMovies : {},
    topRatedMovies : {},
    upcomingMovies : {},
    genreList : [],
    loading : true,
    movieDetail : {},
    reviews : [],
    relatedMovies : [],
    movieVideo : {}
}


function movieReducer (state=initialState, action){
    let {type, payload} = action;
    switch (type){
        case "GET_MOVIES_REQUEST" : 
            return {...state, loading: true};
        case "GET_MOVIES_SUCCESS" : 
            return {
                ...state, 
                popularMovies : payload.popularMovies, 
                topRatedMovies : payload.topRatedMovies,
                upcomingMovies : payload.upcomingMovies,
                genreList : payload.genreList.genres,
                loading: false,
            };
        case "GET_MOVIES_FAILURE" : 
            return {...state, loading: false};
        case "GET_MOVIE_DETAIL_SUCCESS" : 
            return {
                ...state,
                movieDetail : payload.movieDetail,
                reviews : payload.reviews,
                movieVideo : payload.movieVideo,
                relatedMovies : payload.relatedMovies, 
                genreList : payload.genreList.genres,
                loading: false
            }
        case "GET_MOVIE_DETAIL_FAILURE" : 
            return {...state, loading: false};
        default : 
            return { ...state };
    }
}



export default movieReducer;