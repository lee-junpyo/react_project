import React from 'react';
import { Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

const MovieCard = ({ item }) => {
    //console.log('item',item);
    const { genreList } = useSelector((state) => state.movie);
    //console.log('genreList',genreList); 
    const navigate = useNavigate();
    const showDetail = () => {
        navigate(`/movies/${item.id}`);
    }
  return (
    <div className="card-area">
    <div className="card-box" onClick={showDetail} style={{
        backgroundImage : 
        "url(" + 
        `https://www.themoviedb.org/t/p/w440_and_h660_face/${item.poster_path}`
        +")"
    }} >
        <div className='overlay'>
            <h2>{item.title}</h2>
            <hr />
            <div>
                {item.genre_ids?.map((id)=>(
                    <Badge bg="danger" className='genre-badge'>
                        {genreList.find((items) => items.id == id).name}
                    </Badge>
                ))}
            </div>
            <div className='card-info'>
               <span><img width={20} src='https://ia.media-imdb.com/images/M/MV5BODc4MTA3NjkzNl5BMl5BcG5nXkFtZTgwMDg0MzQ2OTE@._V1_.png' />{item.vote_average}</span>
                <span className="imb-score"><FontAwesomeIcon icon={faUsers} />{item.popularity}</span>
                <span className={item.adult ? 'adult-text adult-over' : 'adult-text adult-under'}>{item.adult ? "over 18" : "under 18"}</span>
            </div>
        </div>
    </div>
    </div>
  )
}

export default MovieCard