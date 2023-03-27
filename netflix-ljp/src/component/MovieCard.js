import React from 'react';
import { Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MovieInfo from './MovieInfo';


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
                <MovieInfo popularity={item.popularity} adult={item.adult} vote_average={item.vote_average} />
            </div>
            
        </div>
    </div>
    </div>
  )
}

export default MovieCard