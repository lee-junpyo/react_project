import React from 'react';
import SideBtnSection from './SideBtnSection';
const SideBar = () => {
  return (
    <div>
        <SideBtnSection menuName="sort" />
        <SideBtnSection menuName="filter" />
    </div>
  )
}

export default SideBar