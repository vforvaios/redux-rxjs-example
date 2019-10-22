import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increaseCounter, decreaseCounter, fetchUsers } from './actions/counterActions'

export class ButtonsComponent extends Component {

  render() {
    return (
      <div>
        <button onClick={this.props.increaseCounter}>INCREASE</button>
        <button onClick={this.props.decreaseCounter}>DECREASE</button>
        <button onClick={this.props.fetchUsers}>FETCH USERS</button>
        <span>Counter: {this.props.counter}</span>
        <div>{this.props.message}</div>
        <div>
          {
            this.props.users.map( user => {
              return <div key={user.id}>{user.name}</div>
            } )
          }
        </div>

        <div style={{marginTop: '50px'}}>
          {
            this.props.todos.map( (todo, index) => {
              return <div key={index}>{todo.title}</div>
            } )
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counterReducer.counter,
    message: state.counterReducer.message,
    users: state.counterReducer.users,
    todos: state.counterReducer.todos
  }
}

export default connect(mapStateToProps, { increaseCounter, decreaseCounter, fetchUsers })(ButtonsComponent)
