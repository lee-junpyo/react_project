import React from 'react'
import SortDropDown from './SortDropDown';
import FilterDropDown from './FilterDropDown';

const DropDownMenu = ({menuName, open}) => {
  return (
    <div className={open ? 'drop-down-open' :'drop-down-close'}>
        {menuName === 'sort' ? (
            <SortDropDown />
        ) : (
            <FilterDropDown />
        )}
    </div>
  )
}

export default DropDownMenu