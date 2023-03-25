import React from 'react'
import {Row, Col} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import SingleCard from './SingleCard';
const MovieList = () => {
    const {filterList} = useSelector((state)=> state.search);
  return (
    <Row>
        {filterList?.map((item)=> (
            <Col md={6} className='mb-3'><SingleCard movie={item} /></Col>    
        ))}
    </Row>
  )
}

export default MovieList