import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;

function getList(genre){
    return async(dispatch) => {
        try{
            console.log('action genre', genre);
            const nowPlayingMovieApi = api.get(
                `movie/now_playing?api_key=${API_KEY}&language=en-US&with_genres=${genre}&page=1`
            );
            const genreApi = api.get(
                `genre/movie/list?api_key=${API_KEY}&language=en-US`
            );
            let [nowPlayingMovies, genreList] = await Promise.all(
                [nowPlayingMovieApi, genreApi]
            );
            
            if(genre !== undefined){
                console.log('genregogo', nowPlayingMovies.data);
                dispatch({
                    type : "FILTER_SETTING" ,
                    payload: {type: 'genre', genreMovieList : nowPlayingMovies.data, selectedGenre : genre }
                })
            }else{
                dispatch({
                    type : "GET_MOVIE_LIST_SUCCESS",
                    payload: {movies : nowPlayingMovies.data, genreList : genreList.data }
                })    
            }
        }catch(error){
            console.log('GET_MOVIE_LIST_FAILURE', error);
            //에러 핸들링 하는 곳
            dispatch({
                type : "GET_MOVIE_LIST_FAILURE"
            })
        }
    }
}

function getSearchList(keyword){
    return async(dispatch) => {
        try{
            const searchApi = api.get(
                `search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${keyword}`
            )
            const genreApi = api.get(
                `genre/movie/list?api_key=${API_KEY}&language=en-US`
            );
            let [searchList, genreList] = await Promise.all(
                [searchApi, genreApi]
            );
            dispatch({
                type : "GET_SEARCH_LIST_SUCCESS",
                payload: {searchList : searchList.data, genreList : genreList.data }
            })
        }catch(error){
            console.log('GET_SEARCH_LIST_FAILURE', error);
            //에러 핸들링 하는 곳
            dispatch({
                type : "GET_SEARCH_LIST_FAILURE"
            })
        }
    }
}



export const searchAction = {
    getList, getSearchList
}

