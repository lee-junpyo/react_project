import React from 'react'

const Reviews = ({item}) => {
  return (
    <div>
        <h3>{item.author}</h3>
        <p>{item.content}</p>
    </div>
  )
}

export default Reviews