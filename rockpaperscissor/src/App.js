import {useState} from "react";
import './App.css';
import Box from './component/Box';

// 1.박스 2개(타이틀, 사진, 결과값)
// 2. 가위바위보 버튼
// 3. 버튼 클릭 시 클릭한 값이 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택
// 5. 3,4 결과 가지고 누가 이겼는지 승패를 따진다.
// 6. 승패결과에따라 테두리 색이 바뀐다.(지면 빨강 이기면 초록 비기면 검정)

const choice = {
  rock : {
    name : "Rock",
    img : 'https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-640x514.jpg'
  },
  scissors : {
    name : "Scissors",
    img : "https://img.danawa.com/prod_img/500000/692/086/img/6086692_1.jpg?shrink=330:330&_v=20210426130318"
  },
  paper : {
    name : "Paper",
    img : "https://cdn.crowdpic.net/detail-thumb/thumb_d_8FD8690F83B46D0CDEF1173A1CAEA002.jpg"
  }
}

function App() {
  const [userSelect, setUserSelect] = useState(null);//고객선택값
  const [computerSelect, setComputerSelect] = useState(null);//컴퓨터 선택값
  const [result, setResult] = useState(""); //승패 결과값
  const play = (userChoice) => {
    //console.log('선택됨!', userChoice);//UI 그러줄때 함수를 호출 시킴
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  }
  //컴퓨터 랜덤 선택 함수 - Math.random 
  // [가위,바위,보] - index 활용
  const randomChoice = () => {
    let itemArray = Object.keys(choice);//Object.keys - 객체의 키값만 뽑아 array로 만들어주는 함수
    let randomItem = Math.floor(Math.random() * itemArray.length);// Math.floor - 소수점 버림
    let final = itemArray[randomItem];
    return choice[final];
  }

  const judgement = (user, computer) => {
    console.log('user', user, 'computer', computer);

    // user == computer tie(비김)
    // user == rock, computer == scissors win
    // user == rock, computer == paper lose
    // user == scissors, computer == paper win
    // user == scissors, computer == rock lose
    // user == paper, computer == rock win
    // user == paper, computer == scissors lose
    if(user.name == computer.name){
      return "tie"
    }else if(user.name == "Rock")return computer.name == "Scissors" ? "win" : "lose"
    else if(user.name == "Scissors") return computer.name == "Paper" ? "win" : "lose"
    else if(user.name == "Paper") return computer.name == "Rock" ? "win" : "lose"
  }
  return (
    <div>
      <div className='main'>
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result == '' ? result : result == "tie" ? "tie" : result == "win" ? "lose" : "win"}  />
      </div>
      <div className='main'>
        {/* 콜백함수형태로 넣어줘야함 */}
        <button className="btns" onClick={() => play("rock")}><img className="btn-img" src="https://www.seekpng.com/png/detail/816-8161371_rock-paper-scissor-icon-png.png"/></button>
        <button className="btns" onClick={() => play("scissors")}><img className="btn-img" src="https://www.kindpng.com/picc/m/502-5025731_scissors-clipart-png-download-rock-paper-scissors-clipart.png" /></button>
        <button className="btns" onClick={() => play("paper")}><img className="btn-img" src="https://www.pngitem.com/pimgs/m/266-2667252_transparent-rock-paper-scissors-clipart-rock-paper-scissors.png" /> </button>
      </div>
    </div>
  );
}

export default App;
