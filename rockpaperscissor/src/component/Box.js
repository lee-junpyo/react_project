import React from 'react'

const Box = (props) => {
  return (
    <div className={`box ${props.result}`}>
        {/* 타이틀 */}
        <h1>{props.title}</h1> 
         {/* 값이 없을경우 에러방지를 위해 조건을 추가  */}
        <img className='item-img' src={props.item && props.item.img} />
        <h2>{props.result}</h2>
    </div>
  )
}

export default Box