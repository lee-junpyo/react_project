//로그인 성공 시
function login(id, password){
    return ((dispatch, getState)=>{
        //console.log("login success auth action");
        dispatch({type : "LOGIN_SUCCESS", payload : {id, password}});
    })
}
// 로그아웃 시
function logout(){
    return ((dispatch, getState)=> {
        //console.log('logout action');
        dispatch({type : "LOGOUT", payload : ""});
    })
}

export const authenticateAction = { login, logout };