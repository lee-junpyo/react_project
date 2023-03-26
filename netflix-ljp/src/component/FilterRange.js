import React from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import { useDispatch, useSelector } from 'react-redux';
const FilterRange = ({name}) => {
    const { filters } = useSelector((state)=> state.search);
    const dispatch = useDispatch();

    
    const handleChangeRange = (value, type) => {
        console.log('min',value, type);
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
                <span> From : <b className='filter-bold-text'>{name === 'YEAR' ? filters.year.min : filters.score.min}</b></span>
                <span>&nbsp;-&nbsp;</span>
                <span> To : <b className='filter-bold-text'>{name === 'YEAR' ? filters.year.max : filters.score.max}</b></span>
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
                value={filters.score}
                onChange={(value) => handleChangeRange(value, 'score')}
                onChangeComplete={(args) => console.log(args)}
                />
            )}
        </div>
    </div>
  )
}

export default FilterRange