let initialState = {
    count:0,
    id: "",
    password : "",
}

//reducer 2개의 매개변수 - state,action
//state 초기화 필요
//reducer는 리턴을 항상 해줘야함 - 무조건 기본리턴 필요
//reducer에서 return 값으로 store값이 바뀜
function reducer(state=initialState, action){
    //console.log("action?", action);
    // if문
    // if(action.type === "INCREMENT"){
    //     //...state 해준 이유 - 여러개의 state가 있을 경우 다른 값은 그대로 유지하도록 하는 것
    //     return {...state, count: state.count + 1}
    // }
    // return { ...state };

    // switch 문
    switch(action.type){
        case "INCREMENT" : 
            return {...state, count: state.count + action.payload}
        case "LOGIN" : 
            return {
                ...state,
                id : action.payload.id,
                password : action.payload.password,
            }
        case "DECREMENT" :
            return {...state, count: state.count - action.payload}
        default:
            return { ...state };

    }
}

export default reducer;