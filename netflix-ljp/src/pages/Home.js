import React, { useEffect, useState } from 'react'
import { movieAction } from '../redux/action/movieAction';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Banner from '../component/Banner';
import MovieSlide from '../component/MovieSlide';
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
    const dispatch = useDispatch();
    const {popularMovies, topRatedMovies, upcomingMovies, loading} = useSelector(state=>state.movie);

    //console.log('home', popularMovies);
    useEffect(()=> {
        dispatch(movieAction.getMovies());
        dispatch({
            type : "SET_KEYWORD",
            payload : ''
          })
    },[]);

    //loding이 trueaus loading 스피너를 보여주고
    // false면 데이터를 보여 줌
    // true : 데이터 도착 전 false : 데이터도착 후, 에러 났을 때
    if(loading){
        return <div className='spiner-area'><ClipLoader color="#ffffff" loading={loading} size={150}/></div>
    }
  return (
    <div>
        {/* 조건부 렌더링 */}
        {/* {popularMovies.results &&  */}
            <Banner movie={popularMovies?.results[0]} />
        {/* } */}
        <div className='movie-list-area'>
        <span className='titles'><b>Popular Movie</b><span>인기 많은 영화</span></span>
        <MovieSlide movies={popularMovies} />
        <span className='titles'><b>Top rated Movie</b><span>평점 좋은 영화</span></span>
        <MovieSlide movies={topRatedMovies} />
        <span className='titles'><b>Upcoming Movie</b><span>개봉 예정 영화</span></span>
        <MovieSlide movies={upcomingMovies} />
        </div>
    </div>
  )
}

export default Home