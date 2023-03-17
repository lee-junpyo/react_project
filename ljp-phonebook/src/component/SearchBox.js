import React, { useState } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
const SearchBox = () => {
    const [keyword, setKeyword] = useState();
    const dispatch = useDispatch();
    const searchByName = () => {
        dispatch({
            type : "SEARCH_BY_NAME",
            payload : {keyword}
        })
    }
  return (
    <Row className='search-area'>
        <Col lg={10}>
            <Form.Control type="text" placeholder="이름을 입력해주세요." onChange={(event)=> setKeyword(event.target.value)} />
        </Col>
        <Col lg={2}>
            <div className="d-grid gap-2">
                <Button onClick={searchByName}>찾기</Button>
            </div>
        </Col>
    </Row>
  )
}

export default SearchBox