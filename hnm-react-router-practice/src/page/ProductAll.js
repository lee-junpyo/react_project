import React, { useEffect, useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import ProductCard from '../component/ProductCard';
import { useSearchParams } from 'react-router-dom';
import { productAction } from '../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';
const ProductAll = () => {
    //const [productList, setProductList] = useState([]); useSelector로 교체
    // combinereducers를 쓴다면  state.reducer명. 으로 호출해야됨
    const productList = useSelector((state) => state.product.productList);
    const [query, setQuery] = useSearchParams();
    const dispatch = useDispatch();
    const getProducts = () => {
        let searchQuery = query.get('q') || "";
        //console.log("쿼리값은?", searchQuery);
        dispatch(productAction.getProducts(searchQuery));

        // 리덕스 미들웨어로 교체
        //q=${쿼리} 하면 알아서 json-server에서 찾아줌
        // let url = `https://my-json-server.typicode.com/lee-junpyo/react_project/products?q=${searchQuery}`;  
        // let response = await fetch(url);
        // let data = await response.json();
        // setProductList(data);
    }
    useEffect(()=>{
        getProducts();
    },[query])
  return (
    <div>
        <Container>
            <Row>
            {productList.map((menu)=>(
                <Col lg={3}><ProductCard item={menu} /></Col>
            ))}
            </Row>
        </Container>
    </div>
  )
}

export default ProductAll