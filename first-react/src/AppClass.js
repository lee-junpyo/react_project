import React, { Component } from 'react'

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
  }
  //class형에서는 const 사용X
  increase = () => {
    this.setState({counter2:this.state.counter2 + 1, value : this.state.value + 1 });
  };

  render() {
    return (
      <div>
        {/* this.state. 을 넣어야함 */}
        <div>stae : {this.state.counter2}</div>
        <button onClick={this.increase}>클릭!</button>
      </div>
    )
  }
}
