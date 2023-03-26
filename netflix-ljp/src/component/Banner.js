import React from 'react'
import { useNavigate } from 'react-router-dom';


//배너에는 popularMovies의 첫번째 영화
const Banner = ({movie}) => {
    //console.log('movie',movie)
    const navigate = useNavigate();
    const showDetail = () => {
        navigate(`/movies/${movie.id}`);
    }
  return (
    <div className='banner-area' onClick={showDetail}>
    <div className='banner' style={{
        backgroundImage : "url("+
        `https://www.themoviedb.org/t/p/w440_and_h660_face/${movie.poster_path}`+ 
        ")"
    }}>
        <div className='banner-info'>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
        </div>
    </div>
    </div>
  )
}

export default Banner