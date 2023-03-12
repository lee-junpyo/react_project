// state 버튼 클릭 시 count 늘리기
import  {useState, useEffect } from "react" //useState = react hook중 하나
import './App.css';


function App() {
  let counter = 0;
  //useState(매개변수)초기값 설정, array 반환 - [상태값, 상태업데이트함수]
  //UI에 보여줘야하는 값은 state로 만들어야함
  const [counter2, setCounter2] = useState(0);
  const [value, setValue] = useState(0);
  const increase = () => {
    counter = counter + 1;
    setCounter2(counter2+1); //함수 호출하여 상태값 변경
    setValue(value+2);
    console.log("counter : ", counter); //count값이 계속 1임 - state 상태변경 시 리렌더링- counter가 초기화(0)됨
    //state 비동기적으로 작동, 시간이 좀 걸림(함수가 끝날때 실행)
    //console.log 시 counter2가 이전의 값임 - 비동기 이기 때문
    console.log("counter2 state : ", counter2);
  }
  useEffect(()=>{
    console.log("useEffect1 fire");
  },[])//매개변수 2개를 받음 (콜백함수, array)
  useEffect(()=>{
    console.log("useEffect2 fire", counter2);
  },[counter2])//배열안의 값이 들어가면 useEffect가 componentDidUpdate 커버함, 배열이기때문에 여러값을 넣을수 있음 -> 배열중 하나라도 state값이 변하면 useEffect 호출됨, 2개 이상의 값이 바뀌어도 한번만 실행함
  
  useEffect(()=>{
    console.log("다른내용 하고 싶어요", value);
  },[, value])
  return (
    <div>
      {console.log("render")}
      <div>{counter}</div>
      <div>stae : {counter2}</div>
      <button onClick={increase}>클릭!</button>
    </div>
  );
  //1. 유저가 버튼을 클릭한다.
  //2. counter+1 해서 1이됨
  //3. setState함수호출
  //4. console.log 실행됨
  //5. 변수값은 1로 보이고 state값은 아직 안변했기 때문에 그전에 값이 보인다.
  //6. 함수 끝
  //7. app 다시 re render
  //8. let count =0을 거치면서 counter 값이 다시 0으로 초기화 된다.
  //9. state값은 update가 되면서 다시 reder를 한다.
  // 변수는 re render 초기화 된다.
  // state값은 비 동기적으로 처리된다.
  // 잠깐 기억해야하는값은 변수 사용
}

export default App;
