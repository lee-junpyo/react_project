import React, { Component } from 'react'

export default class BoxClass extends Component {
  render() {
    return (
      <div>
         <div className={`box ${this.props.result}`}>
            {/* 타이틀 */}
            <h1>{this.props.title}</h1> 
            {/* 값이 없을경우 에러방지를 위해 조건을 추가  */}
            <img className='item-img' src={this.props.item && this.props.item.img} />
            <h2>{this.props.result}</h2>
        </div>
      </div>
    )
  }
}
