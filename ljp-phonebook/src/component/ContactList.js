import React, { useState, useEffect } from 'react'
import SearchBox from './SearchBox'
import ContactItem from './ContactItem'
import {Row, Col} from 'react-bootstrap';
import { useSelector } from 'react-redux';

const ContactList = () => {
    const {contactList, keyword} = useSelector(state=> state);
    let [filterList, setFilterList] = useState([]);

    useEffect(()=> {
        if(keyword !== ""){ //검색할경우
            //console.log("keyword1", keyword);
            let list = contactList.filter((item) => item.name.includes(keyword));
            //console.log('필터거른 list', list);
            setFilterList(list);
        }else{
            //console.log("keyword2", keyword);
            //console.log('contactList', contactList);
            setFilterList(contactList);
            
        }
    },[keyword, contactList])

  return (
    <>
    <Row className="mb-3">
        <Col>
            <SearchBox />
        </Col>
    </Row>
    <Row className="mb-3">
        <Col>
            <div>총 수 : {filterList.length}</div>
            <div>
                {filterList?.map((item)=>(
                    <ContactItem item={item} />
                ))}
            </div>
        </Col>
    </Row>
    </>
  )
}

export default ContactList