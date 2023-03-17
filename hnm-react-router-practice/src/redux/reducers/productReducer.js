let initialState = {
    productList : [],
    selectItem : null,
}

function productReducer(state=initialState, action){
    let {type, payload} = action;
    switch(type){
        case "GET_PRODUCT_SUCCESS" : 
            return { ...state, productList: payload.data }
        case "GET_SINGLE_PRODUCT_SUCCESS" : 
            console.log('single_product_reducer');
            return {...state, selectItem : payload.data}
        default : 
            return { ...state }
    }
}

export default productReducer;