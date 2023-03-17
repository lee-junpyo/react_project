// store 만드는 단축어
import { createStore } from "redux";
import reducer from "./reducer/reducer";

// store안에 reducer가 추가해야됨
let store = createStore(reducer);

export default store;