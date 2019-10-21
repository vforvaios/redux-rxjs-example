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

export const fetchUsers = () => {
  return {
    type: 'FETCH_USERS'
  }
}

export const fetchUsersSuccessful = users => {
  return {
    type: 'FETCH_USERS_SUCCESSFUL',
    users
  }
}