import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Productpage = () => {
    let [query, setQuery] = useSearchParams();
    console.log("dddd", query.get('num'));
  return (
    <div>
        <h1>Show All Products!</h1>
    </div>
  )
}

export default Productpage