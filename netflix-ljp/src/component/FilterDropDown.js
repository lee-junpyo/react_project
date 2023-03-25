import React from 'react';
import FilterRange from './FilterRange';
import Category from './Category';
const FilterDropDown = () => {
  return (
    <div>
      <FilterRange name={'YEAR'} />
      <FilterRange name={'IBM Score'} />
      <Category />
    </div>
  )
}

export default FilterDropDown