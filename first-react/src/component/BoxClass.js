import React, { Component } from 'react'

export default class BoxClass extends Component {
  render() {
    return (
      <div>
        {/* class 컴포넌트는 this. 시작 */}
        Box{this.props.num}
      </div>
    )
  }
}
