import React, { Component } from 'react'
import './App.css';
import BoxClass from './component/BoxClass';
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
export default class AppClass extends Component {
    //constructor - 생성자, 클래스를 생성할때 사용, lifecycle function중 하나
    constructor(){
        super();
        this.state={// state 생성, state object에 원하는 state를 넣으면됨
            userSelect : null,
            computerSelect:null,
            result:null
        };
    }
    play = (userChoice) => {
        this.setState({
            userSelect : choice[userChoice],
        })
        //컴퓨터 랜덤 선택
        let computerChoice = this.randomChoice();
        this.setState({
            computerSelect : computerChoice,
            result : this.judgement(choice[userChoice], computerChoice)
        })

    };
    
    //컴퓨터 랜덤 선택 함수 - Math.random 
    // [가위,바위,보] - index 활용
    randomChoice = () => {
        let itemArray = Object.keys(choice);//Object.keys - 객체의 키값만 뽑아 array로 만들어주는 함수
        let randomItem = Math.floor(Math.random() * itemArray.length);// Math.floor - 소수점 버림
        let final = itemArray[randomItem];
        return choice[final];
    };

    judgement = (user, computer) => {
        console.log('user', user, 'computer', computer);
        // user == computer tie(비김)
        // user == rock, computer == scissors win
        // user == rock, computer == paper lose
        // user == scissors, computer == paper win
        // user == scissors, computer == rock lose
        // user == paper, computer == rock win
        // user == paper, computer == scissors lose
        if(user.name === computer.name){
          return "tie"
        }else if(user.name === "Rock")return computer.name == "Scissors" ? "win" : "lose"
        else if(user.name === "Scissors") return computer.name == "Paper" ? "win" : "lose"
        else if(user.name === "Paper") return computer.name == "Rock" ? "win" : "lose"
      }

  render() {
    return (
      <div>
        <div className='main'>
            <BoxClass title="You" item={this.state.userSelect} result={this.state.result} />
            <BoxClass title="Computer" item={this.state.computerSelect} result={this.state.result === null ? this.state.result : this.state.result === "tie" ? "tie" : this.state.result === "win" ? "lose" : "win"}  />
        </div>
        <div className='main'>
        {/* 콜백함수형태로 넣어줘야함 */}
            <button className="btns" onClick={() => this.play("rock")}><img className="btn-img" src="https://www.seekpng.com/png/detail/816-8161371_rock-paper-scissor-icon-png.png"/></button>
            <button className="btns" onClick={() => this.play("scissors")}><img className="btn-img" src="https://www.kindpng.com/picc/m/502-5025731_scissors-clipart-png-download-rock-paper-scissors-clipart.png" /></button>
            <button className="btns" onClick={() => this.play("paper")}><img className="btn-img" src="https://www.pngitem.com/pimgs/m/266-2667252_transparent-rock-paper-scissors-clipart-rock-paper-scissors.png" /> </button>
        </div>
      </div>
    )
  }
}
