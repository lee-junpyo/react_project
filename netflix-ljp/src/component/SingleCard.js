import React from 'react'
import {  Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import MovieInfo from './MovieInfo';

const SingleCard = ({movie}) => {
    const { genreList } = useSelector((state)=> state.search);
    // console.log('singlecard', movie);
    const navigate = useNavigate();
    const onClickHandleCard = () => {
        navigate(`/movies/${movie.id}`);
    }
  return (
    <div style={{
        background : 
        "linear-gradient(to left , rgba(20, 20, 20, 0) 10%,rgba(20, 20, 20, 0.25) 25%,rgba(20, 20, 20, 0.5) 50%,rgba(20, 20, 20, 0.75) 75%,rgba(20, 20, 20, 1) 100%), url("+ `https://www.themoviedb.org/t/p/w440_and_h660_face/${movie.poster_path}`+") no-repeat",

    }} className='single-card-box' onClick={onClickHandleCard}>
        <div className='card-header'>
            <img height={80} src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${movie.poster_path}`} />
            <ul>
                <li><h1 className='card-title'>{movie.title}</h1></li>
                <li><span>{movie.release_date.split('-')[0]}</span></li>
            </ul>
        </div>
        <div className='card-body'>
            <div className='mb-3'>
            {movie.genre_ids?.map((id)=>(
                    <Badge bg="danger" className='genre-badge'>
                        {genreList.find((items) => items.id == id).name}
                    </Badge>
                ))}
            </div>
            <p className='card-overview'>{movie.overview}</p>
        </div>
        <div className='card-footer'>
            <MovieInfo popularity={movie.popularity} adult={movie.adult} vote_average={movie.vote_average} />
        </div>
    </div>
  )
}

export default SingleCard