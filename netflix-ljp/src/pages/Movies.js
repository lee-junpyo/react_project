import React, {useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import SideBar from '../component/SideBar';
import MovieList from '../component/MovieList';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { searchAction } from '../redux/action/searchAction';

const Movies = () => {
  const dispatch = useDispatch();
  const {keyword} =  useSelector((state)=> state.search);
  
  useEffect(()=>{
    if(keyword === ''){
      dispatch(searchAction.getList());
    }
  },[keyword]);
  return (
    <Container className='movies-container'>
      <Row>
        <Col lg={4}>
          <SideBar />
        </Col>
        <Col lg={8}>
          <MovieList />
        </Col>
      </Row>
    </Container>
  )
}

export default Movies