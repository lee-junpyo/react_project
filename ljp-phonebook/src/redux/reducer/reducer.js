//리듀서는 기능에 따라 여러 파일로 만들어 줄 수 있음

let initialState = {
    contactList : [],
    keyword : ""
}

function reducer(state=initialState, action){
    const {type, payload} = action;
    switch(type){
        case "ADD_CONTACT" :
            console.log('add');
            return {...state, contactList:[...state.contactList, {name: payload.name, phoneNumber: payload.phoneNumber}]}
        case "SEARCH_BY_NAME" :
            console.log('payload.keyword', payload.keyword);
            if(payload.keyword !== undefined && payload.keyword !== ""){
                //console.log('값 있음');
                return {...state, keyword :  payload.keyword }
            }else{
                //console.log('값 없음');
                return {...state, keyword : "" }
            }
        default :
            return {...state};
    }
}

export default reducer;
