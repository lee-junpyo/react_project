//rafce - 리액트 컴포넌트 자동 생성
import React from 'react'

const Box = (props) => {
    console.log("props : ", props)
  return (
    <div className='box'>
        Box{props.num}
        {/* 다이내믹값을 보여주기위해 {}사용 */}
        <p>{props.name}</p>
    </div>
  )
}

export default Box