import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;
function getMovies(){
    return async(dispatch)=> {
        //await 데이터가 올때까지 각 줄이 넘어가는걸 방지 - 여러개 사용 시 퍼포먼스가 안좋음
        dispatch({type:"GET_MOVIES_REQUEST"});
        try {
            const popularMovieApi = api.get(
                `/movie/popular?api_key=${API_KEY}&page=1&language=en-US`
            );
            
            const topRatedApi = api.get(
                `movie/top_rated?api_key=${API_KEY}&page=1&language=en-US`
            );
    
            const upComingApi = api.get(
                `movie/upcoming?api_key=${API_KEY}&page=1&language=en-US`
            );

            const genreApi = api.get(
                `genre/movie/list?api_key=${API_KEY}&language=en-US`
            );
            //병렬로 동시에 호출 promise 값 다 받을때까지 기다림
            let [popularMovies, topRatedMovies, upcomingMovies, genreList] = await Promise.all(
                [popularMovieApi, topRatedApi, upComingApi, genreApi]
            );
            //console.log("genreList", genreList);
            dispatch({
                type : "GET_MOVIES_SUCCESS",
                payload: {popularMovies : popularMovies.data, topRatedMovies: topRatedMovies.data, upcomingMovies : upcomingMovies.data, genreList : genreList.data }
            })
        }catch(error){
            console.log('GET_MOVIES_FAILURE', error);
            //에러 핸들링 하는 곳
            dispatch({
                type : "GET_MOVIES_FAILURE"
            })
        }
    }
}

function getMovieDetail(id){
    //console.log("movie_id",id);
    return async(dispatch)=> {
        try{
            dispatch({type:"GET_MOVIES_REQUEST"});
            const movieDetailApi = api.get(
                `movie/${id}?api_key=${API_KEY}&language=en-US`
            )
            
            const reviewsApi = api.get(
                `movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
            )
            const movieVideoApi = api.get(
                `movie/${id}/videos?api_key=${API_KEY}&language=en-US`
            )

            const relatedMoviesApi = api.get(
                `movie/${id}/recommendations?api_key=${API_KEY}&page=1&language=en-US`
            );
            const genreApi = api.get(
                `genre/movie/list?api_key=${API_KEY}&language=en-US`
            );
            let [movieDetail, reviews, movieVideo, relatedMovies, genreList] = await Promise.all(
                [movieDetailApi, reviewsApi, movieVideoApi, relatedMoviesApi, genreApi]
            );
            // console.log("movieDetail", movieDetail);
            // console.log("reviews", reviews);
            // console.log("relatedMovies", relatedMovies);
            //console.log("movieVideo", movieVideo);
            dispatch({
                type : "GET_MOVIE_DETAIL_SUCCESS",
                payload : {
                    movieDetail : movieDetail.data, 
                    reviews : reviews.data.results, 
                    movieVideo: (movieVideo.data.results.length > 0 ? movieVideo.data.results[0] : ''), 
                    relatedMovies : relatedMovies.data.results, 
                    genreList : genreList.data 
                }
            })
        }catch(error){
             //에러 핸들링 하는 곳
             console.log('GET_MOVIE_DETAIL_FAILURE', error);
             dispatch({
                type : "GET_MOVIE_DETAIL_FAILURE"
            })
        }
    }
}


export const movieAction = {
    getMovies, getMovieDetail
}