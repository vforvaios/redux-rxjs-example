import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increaseCounter, decreaseCounter } from './actions/counterActions'

export class ButtonsComponent extends Component {

  render() {
    return (
      <div>
        <button onClick={this.props.increaseCounter}>INCREASE</button>
        <button onClick={this.props.decreaseCounter}>DECREASE</button>
        <span>Counter: {this.props.counter}</span>
        <div>{this.props.message}</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counterReducer.counter,
    message: state.counterReducer.message
  }
}

export default connect(mapStateToProps, { increaseCounter, decreaseCounter })(ButtonsComponent)
