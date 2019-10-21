export const increaseCounter = () => {
  return {
    type: 'INCREASE',
    payload: 1
  }
}

export const decreaseCounter = () => {
  return {
    type: 'DECREASE',
    payload: 1
  }
}