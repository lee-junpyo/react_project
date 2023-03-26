import React from 'react';
import FilterRange from './FilterRange';
import Category from './Category';
import { useSelector } from 'react-redux';
const FilterDropDown = () => {
  const { keyword } = useSelector((state)=> state.search);
  return (
    <div>
      <FilterRange name={'YEAR'} />
      <FilterRange name={'IBM Score'} />
      {keyword === '' && (<Category />)}
      
    </div>
  )
}

export default FilterDropDown