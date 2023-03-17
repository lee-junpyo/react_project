import { combineReducers } from "redux";
import authenciateReducer from "./authenciateReducer";
import productReducer from "./productReducer";

// 리듀서 여러개 합치기 combineReducers
export default combineReducers({
    auth : authenciateReducer,
    product : productReducer
});