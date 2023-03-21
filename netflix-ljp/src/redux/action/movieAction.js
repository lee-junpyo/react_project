import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;
function getMovies(){
    return async(dispatch)=> {
        //await 데이터가 올때까지 각 줄이 넘어가는걸 방지 - 여러개 사용 시 퍼포먼스가 안좋음
        
        const popularMovieApi = api.get(
            `/movie/popular?api_key=${API_KEY}&page=1&language=ko-KR`
        );
        
        const topRatedApi = api.get(
            `movie/top_rated?api_key=${API_KEY}&page=1&language=ko-KR`
        );

        const upComingApi = api.get(
            `movie/upcoming?api_key=${API_KEY}&page=1&language=ko-KR`
        );
        //병렬로 동시에 호출 promise 값 다 받을때까지 기다림
        let [popularMovies, topRatedMovies, upcomingMovies] = await Promise.all(
            [popularMovieApi, topRatedApi, upComingApi]
        );
        dispatch({
            type : "GET_MOVIES_SUCCESS",
            payload: {popularMovies : popularMovies.data, topRatedMovies: topRatedMovies.data, upcomingMovies : upcomingMovies.data }
        })
        // console.log('popularMovies', popularMovies);
        // console.log('topRatedMovies', topRatedMovies);
        // console.log('upcomingMovies', upcomingMovies);
    }
}

export const movieAction = {
    getMovies,
}