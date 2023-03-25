import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import DropDownMenu from './DropDownMenu';
const SideBtnSection = ({menuName}) => {
    const [open, setOpen] = useState(false);
  return (
    <div className='side-btn-box'>
        <div className='side-btn-area' onClick={()=>setOpen(!open)}>
            <span>{menuName.toUpperCase()}</span>
            <span>
                {open ? (
                    <FontAwesomeIcon icon={faArrowDown} />
                ) : (
                    <FontAwesomeIcon icon={faArrowRight} />
                )}
                
            </span>
        </div>
        <DropDownMenu menuName={menuName} open={open} />
    </div>
  )
}

export default SideBtnSection