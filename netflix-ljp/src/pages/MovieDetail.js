import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { movieAction } from '../redux/action/movieAction';
import { useParams } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
import YouTube from 'react-youtube';
import Reviews from '../component/Reviews';
import MovieCard from '../component/MovieCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

const MovieDetail = () => {
  const dispatch = useDispatch();
  const [selectBtn, setSelectBtn] = useState('');// 0- 리뷰 1- 관련영화
  const { movieDetail, reviews, relatedMovies, movieVideo, loading } = useSelector((state)=> state.movie);
  const [btnLoding, setBtnLoding] = useState(true);
  //console.log('movieDetail',movieDetail);
  //console.log('movieVideo',movieVideo);
  console.log('reviews',reviews);
  let {id} = useParams();
  //console.log('id', id);
  const getDetail = async() =>{
    dispatch(movieAction.getMovieDetail(id));
  }

  useEffect(()=>{
    if(id){
      setBtnLoding(true);
      getDetail();
      window.scrollTo(0, 0);
      setSelectBtn('reviewBtn');
      setBtnLoding(false);
    }
  },[id]);

  const handleChangeBtn = (e) => {
    let { name } = e.target;
    console.log('name', name);
    setSelectBtn(name);
  }

  if(loading){
    return <div className='spiner-area'><ClipLoader color="#ffffff" loading={loading} size={150}/></div>
  }
  return (
    <Container className='detail-container'>
      <Row className="mb-3">
        <Col className='detail-poster-area'>
          <img src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${movieDetail.poster_path}`} />
        </Col>
        <Col>
          <div>
            {movieDetail?.genres?.map((item)=>(
                    <Badge pill bg="danger" className='genre-badge'>
                        {item.name}
                    </Badge>
                ))}
          </div>
          <div>
              <h1>{movieDetail.title}</h1>
              <h5>{movieDetail.tagline}</h5>
          </div>
          <hr/>
          <div className='detail-info'>
            <span><img width={20} src='https://ia.media-imdb.com/images/M/MV5BODc4MTA3NjkzNl5BMl5BcG5nXkFtZTgwMDg0MzQ2OTE@._V1_.png' />{movieDetail.vote_average}</span>
            <span className="imb-score"><FontAwesomeIcon icon={faUsers} />{movieDetail.popularity}</span>
            <span className={movieDetail.adult ? 'adult-text adult-over' : 'adult-text adult-under'}>{movieDetail.adult ? "over 18" : "under 18"}</span>
          </div>
          <hr/>
          {movieDetail.overview && (
            <div>
            <p>{movieDetail.overview}</p>
            <hr />
            </div>
          
          )}
          
          <div className='detail-badge-box'>
            <ul>
              <li><Badge bg="warning" text='dark' className='genre-badge'>Budget</Badge><span>{movieDetail.budget}</span></li>
              <li><Badge bg="warning" text='dark' className='genre-badge'>Revenue</Badge><span>{movieDetail.revenue}</span></li>
              <li><Badge bg="warning" text='dark' className='genre-badge'>Release Day</Badge>{movieDetail.release_date}</li>
              <li><Badge bg="warning" text='dark' className='genre-badge'>Time</Badge>{movieDetail.runtime}</li>
            </ul>
          </div>
          <hr />
            {movieVideo&&
            <div>
            <YouTube videoId={movieVideo.key} opts={{height : '400',playerVars : {
              autoplay : 1,
            }}} />
            <hr />
            </div>
            }
        </Col>
      </Row>
      <Row className="detail-btn-box">
        <Col className='detail-btn-area'>
          <Button className='detail-btns' variant={selectBtn === 'reviewBtn' ? 'danger' : 'light'} name='reviewBtn' onClick={handleChangeBtn}>리뷰({reviews?.length})</Button>
          <Button className='detail-btns' variant={selectBtn === 'moviesBtn' ? 'danger' : 'light'} disabled={relatedMovies?.length === 0 && true}  name='moviesBtn' onClick={handleChangeBtn}>관련 영화{`(${relatedMovies?.length})`}</Button>
        </Col>
      </Row>
      {
        btnLoding ? (
          <Row>
            <Col className='spiner-area'>
              <ClipLoader color="#ffffff" loading={btnLoding} size={150} />
            </Col>
          </Row>
        
        ) :(
          <Row>
          {selectBtn === 'reviewBtn' ? (
            <Col className='review-box'>
              {reviews.length !== 0 ? (
                reviews?.map((item, index)=>(
                  <div className={reviews.length !== (index+1) ? 'review-area border-bottom' : 'review-area'}>
                  <Reviews item={item} />
                  {/* {reviews.length !== (index+1) && <hr />}   */}
                  </div>
                ))
              ) : (
                <div className='review-area'>
                <h6>리뷰가 없습니다.</h6>
                </div>
              )}
              
            </Col>
          ) : (
            <>
            {
            relatedMovies?.length !== 0 ? (
              relatedMovies?.map((item)=> (
                <Col lg={4} className='mb-3 related-movie-box'>
                  {/* <div>{item}</div> */}
                  <MovieCard item={item} />
                </Col>
              ))
            ) : (
              <p>관련 영화가 없습니다.</p>
            )
            }
            </>
          )}
      </Row>
        )
      }
    </Container>
  )
}

export default MovieDetail