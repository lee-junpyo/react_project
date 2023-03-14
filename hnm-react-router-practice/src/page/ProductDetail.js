import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col, Button, Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap';
const ProductDetail = () => {
    let {id} = useParams();
    const [product, setProduct] = useState(null);
    const [selectSize, setSelectSize] = useState(null);
    const getProductDetail= async() => {
        let url = `https://my-json-server.typicode.com/lee-junpyo/react_project/products/${id}`
        let response = await fetch(url);
        let data = await response.json();
        setProduct(data);
    }
    const handleSizeChange = (eventKey) => {
        //console.log(eventKey);
        setSelectSize(eventKey);
    }

    useEffect(()=>{
        getProductDetail();
    },[]);

  return (
    <Container>
        <Row className='product-box'>
            <Col className='product-img'>
                <img key={product?.id} src={product?.img} width={"auto"} />
            </Col>
            <Col className='product-info'>
                <div>
                    {product?.title}
                </div>
                <div>
                    {product?.price}
                </div>
                {product?.choice == true && (<div className='choice'>Conscious Choice</div>)}
                {product?.new == true && (<div className='new-product'> 신제품 </div>) }
                <div>
                <DropdownButton variant="outline-dark" as={ButtonGroup} title={selectSize == null ? "사이즈 선택" : selectSize } onSelect={handleSizeChange}>
                        {product?.size.map((item)=>(
                            <Dropdown.Item eventKey={item}>{item}</Dropdown.Item>
                        ))}
                    </DropdownButton>
                </div>
                <div className="d-grid gap-2">
                    <Button variant="dark">추가</Button>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default ProductDetail