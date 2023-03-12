import React, { Component } from 'react'
import BoxClass from './component/BoxClass';
// 클래스 컴포넌트에서 life cycle 함수를 제공
//2019년에 함수형 컴포넌트에서도 lifecycle함수가 제공(hook)이 되면서 함수형 컴포넌트로 많이 넘어가고있는 추세

export default class AppClass extends Component {
  //constructor - 생성자, 클래스를 생성할때 사용, lifecycle function중 하나
  constructor(props){ 
    super(props)
    this.state={// state 생성, state object에 원하는 state를 넣으면됨
      counter2 : 0,
      num:1,
      value:0
    };
    console.log("constructor");// state 생성
  }
  increase = () => {
    this.setState({counter2:this.state.counter2 + 1, value : this.state.value + 1 });
    console.log("increase function", this.state);//비동기 처리이기 때문에 값이 아직 안바뀜
  };
  componentDidMount(){
    // api 콜, render 끝나고 호출되는 함수
    console.log("componentDidMount");
  }
  componentDidUpdate(){//최신 업데이트된 값을 가지고 작업 시 사용
    console.log("componentDidUpdate", this.state);// 최신 업데이트 state 값
  }
  render() {
    console.log("render");//UI 그리는것
    return (
      <div>
        {/* this.state. 을 넣어야함 */}
        <div>stae : {this.state.counter2}</div>
        <button onClick={this.increase}>클릭!</button>
        {/* 자바스크립트랑 html 이랑 섞어서 작업시 {} 써야함 */}
        {this.state.counter2 < 3 && <BoxClass num={this.state.value} />}
      </div>
    )
  }
}
