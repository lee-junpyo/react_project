import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "./reducers";///자동으로 index.js 읽어옴
import { composeWithDevTools } from 'redux-devtools-extension';//함수 - applyMiddleware 감싸주면됨
let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store