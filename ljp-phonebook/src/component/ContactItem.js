import React from 'react'
import {Row, Col} from 'react-bootstrap';

const ContactItem = ({item}) => {
  return (
    <Row className='item-box'>
        <Col lg={2}>
            <img width={50} src='https://t3.ftcdn.net/jpg/03/53/11/00/360_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg' />
        </Col>
        <Col lg={10}>
            <div className='item-name'>{item.name}</div>
            <div className='item-phoneNum'>{item.phoneNumber}</div>
        </Col>
    </Row>
  )
}

export default ContactItem