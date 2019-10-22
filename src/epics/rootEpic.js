import { combineEpics } from 'redux-observable'
import { counterIncreaseEpic, counterDecreaseEpic, fetchUsersEpic } from './counterEpic'
import { todosEpic, todosSuccessfulEpic } from './todosEpic'

const rootEpic = combineEpics(
  counterIncreaseEpic,
  counterDecreaseEpic,
  fetchUsersEpic,
  todosEpic,
  todosSuccessfulEpic
)

export default rootEpic