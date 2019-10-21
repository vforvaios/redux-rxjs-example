const initialState = {
  counter: 0,
  message: '',
  users: []
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE':
      return {
        ...state,
        counter: state.counter + action.payload
      }
    case 'DECREASE':
      return {
        ...state,
        counter: state.counter - action.payload
      }
    case 'COUNTER_INCREASED':
      return {
        ...state,
        message: state.message + 'Counter increased!'
      }
    case 'COUNTER_DECREASED':
        return {
          ...state,
          message: state.message + 'Counter decreased!'
        }
    case 'FETCH_USERS_SUCCESSFUL':
      return {
        ...state,
        users: [...action.users]
      }
    default:
      return state
  }
}

export default counterReducer