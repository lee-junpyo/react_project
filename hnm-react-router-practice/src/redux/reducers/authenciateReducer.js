let initialState = {
    id : "",
    password : "",
    authenticate : false
}

function authenciateReducer(state=initialState, action){
    let { type, payload } = action;
    switch(type){
        case "LOGIN_SUCCESS" : 
            //console.log("login success auth reducer");
            return {
                ...state,
                id : payload.id,
                password : payload.password,
                authenticate : true,
            }
        case "LOGOUT" : 
            return{
                id : "",
                password : "",
                authenticate : false,
            }
        default : 
            return { ...state };
    }
}

export default authenciateReducer