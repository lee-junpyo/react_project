import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useDispatch, useSelector } from 'react-redux';


const SortDropDown = () => {
  const dispatch = useDispatch();
  let { sort } = useSelector((state)=>state.search.filters);
  const dropItems = ['popularity.desc', 'popularity.asc', 'release_date.desc','release_date.asc', 'vote_average.desc','vote_average.asc'];
  const handleOnSelect = (item) => {
    dispatch({
      type : "FILTER_SETTING",
      payload : {
        type : 'sort',
        value : item
      }
    })
  }
  return (
    <div className='dropdown-box'>
      <div className='dropdown-name-area'>
        <span className='side-names'>Sort Results By</span>
      </div>
      <div className='sort-dropdown-btn-area' size="lg">
      <DropdownButton className='sort-dropdown-btns' id='dropdown-item-button' title={sort !== '' ? sort : dropItems[0]} variant='outline-light' onSelect={handleOnSelect}>
        {dropItems.map((item)=> (
          <Dropdown.Item as="button" eventKey={item}>{item}</Dropdown.Item>
        ))}
      </DropdownButton>
      </div>
    </div>
  )
}

export default SortDropDown