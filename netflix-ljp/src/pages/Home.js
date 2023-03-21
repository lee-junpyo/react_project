import React, { useEffect } from 'react'
import { movieAction } from '../redux/action/movieAction';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Banner from '../component/Banner';
import MovieSlide from '../component/MovieSlide';
const Home = () => {
    const dispatch = useDispatch();
    const {popularMovies, topRatedMovies, upcomingMovies} = useSelector(state=>state.movie);
    //console.log('home', popularMovies);
    useEffect(()=> {
        dispatch(movieAction.getMovies());
    },[]);
  return (
    <div>
        {/* 조건부 렌더링 */}
        {popularMovies.results && 
            (<Banner movie={popularMovies.results[1]} />)
        }
        <h1>인기 많은 영화(Popular Movie)</h1>
        <MovieSlide movie={popularMovies} />
        <h1>평점 좋은 영화(Top rated Movie)</h1>
        <MovieSlide movie={topRatedMovies} />
        <h1>개봉 예정 영화(Upcoming Movie)</h1>
        <MovieSlide movie={upcomingMovies} />
    </div>
  )
}

export default Home