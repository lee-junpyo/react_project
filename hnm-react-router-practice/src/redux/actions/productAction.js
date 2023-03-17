//미들웨어 함수
// 함수를 리턴 함
// 상품 리스트 조회
function getProducts (searchQuery) {
    return async(dispatch, getState) => {
        let url = `https://my-json-server.typicode.com/lee-junpyo/react_project/products?q=${searchQuery}`;  
        let response = await fetch(url);
        let data = await response.json();
        //console.log(data);
        dispatch({type:"GET_PRODUCT_SUCCESS", payload : { data }});
    };
}
// 상품 정보 조회
function getProductDetail(id){
    return async(dispatch, getState) => {
        console.log('single_product_action');
         let url = `https://my-json-server.typicode.com/lee-junpyo/react_project/products/${id}`
         let response = await fetch(url);
         let data = await response.json();
         dispatch({type: "GET_SINGLE_PRODUCT_SUCCESS", payload : { data }});
    }
}

export const productAction= {getProducts, getProductDetail};