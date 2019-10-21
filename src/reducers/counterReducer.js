const initialState = {
  counter: 0,
  message: ''
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
    default:
      return state
  }
}

export default counterReducer