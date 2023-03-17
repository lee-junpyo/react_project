import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Box from './component/Box';
function App() {
  const count = useSelector(state => state.count)// 함수가 매개 변수(state는 store의 값)
  const id = useSelector(state => state.id)
  const password = useSelector(state => state.password)
  const dispatch = useDispatch();//dispatch-함수
  const increase = () => {
    // console.log('count', count);
    // setCount(count+1);
    dispatch({type : "INCREMENT", payload: 5});//action은 객체 object - 반드시 type-액션의 이름, payload-매개변수(내가 원하는 정보를 보내줄수 있음) 키가 있어야함
  }
  const decrement = () => {
    dispatch({type : "DECREMENT", payload : 1});
  }

  const login = () => {
    dispatch({type:"LOGIN", payload : {id:'mememe', password : '1234'}});
  }
  return (
    <div>
      <h1>{id},{password} </h1>
      <h1>{count}</h1>
      <button onClick={increase}>증가</button>
      <button onClick={decrement}>감소</button>
      <br/>
      <button onClick={login}>Login</button>
      <Box />
    </div>
  );
}

export default App;
