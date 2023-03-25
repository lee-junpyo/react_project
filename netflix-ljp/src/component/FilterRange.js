import React, { useEffect, useState } from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import { useDispatch, useSelector } from 'react-redux';
import { searchAction } from '../redux/action/searchAction';
const FilterRange = ({name}) => {
    const { filters } = useSelector((state)=> state.search);
    const dispatch = useDispatch();
    const [state, setState] = useState(
        name === 'YEAR' ? {min : 1990, max : 2023} : {min : 0, max :10}
    );
    
    useEffect(()=>{
        //dispatch(searchAction.getFiltersList);
    },[filters])
    const handleChangeRange = (value, type) => {
        console.log('min',value, type);
        setState(value);
        dispatch({
            type : 'FILTER_SETTING',
            payload : {type : type, value : value}
        })
    }
  return (
    <div className='dropdown-box'>
        <div className='dropdown-name-area'>
            <span className='side-names'>{name} Filter</span>
        </div>
        <div className='range-area'>
            <div className='range-value-area'>
                <span> From : <b className='filter-bold-text'>{state.min}</b></span>
                <span>&nbsp;-&nbsp;</span>
                <span> To : <b className='filter-bold-text'>{state.max}</b></span>
            </div>
            {name === 'YEAR' ? (
                <InputRange
                formatLabel={(value) => null}
                draggableTrack={false}
                allowSameValues={false}
                step={1}
                maxValue={2023}
                minValue={1990}
                value={filters.year}
                onChange={(value) => handleChangeRange(value, 'year')}

                />
            )
             : (
                <InputRange
                formatLabel={(value) => null}
                draggableTrack={false}
                allowSameValues={false}
                step={1}
                maxValue={10}
                minValue={0}
                value={state}
                onChange={(value) => handleChangeRange(value, 'score')}
                onChangeComplete={(args) => console.log(args)}
                />
            )}
        </div>
    </div>
  )
}

export default FilterRange