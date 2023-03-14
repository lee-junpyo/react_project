import React from 'react'
import { useParams } from 'react-router-dom';

const ProductDetailpage = () => {
    const {id} = useParams();
    console.log("ooo", id);
  return (
    <div>
        <h1>Show Product Detail {id}</h1>
    </div>
  )
}

export default ProductDetailpage