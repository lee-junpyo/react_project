import React from 'react';
import { Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ item }) => {
    //console.log('item',item);
    const { genreList } = useSelector((state) => state.movie);
    //console.log('genreList',genreList); 
    const navigate = useNavigate();
    const showDetail = () => {
        navigate(`/movies/${item.id}`);
    }
  return (
    <div className="card-box" onClick={showDetail} style={{
        backgroundImage : 
        "url(" + 
        `https://www.themoviedb.org/t/p/w440_and_h660_face/${item.poster_path}`
        +")"
    }}>
        <div className='overlay'>
            <h4>{item.title}</h4>
            <hr />
            <div>
                {item.genre_ids?.map((id)=>(
                    <Badge bg="danger" className='genre-badge'>
                        {genreList.find((items) => items.id == id).name}
                    </Badge>
                ))}
            </div>
            <div>
                <p>{item.vote_average}</p>
                <p>{item.popularity}</p>
                <p>{item.adult ? "청소년 관람불가" : "청소년 관람가능"}</p>
            </div>
        </div>
    </div>
  )
}

export default MovieCard