import { combineEpics } from 'redux-observable'
import { counterIncreaseEpic, counterDecreaseEpic, fetchUsersEpic } from './counterEpic'

const rootEpic = combineEpics(
  counterIncreaseEpic,
  counterDecreaseEpic,
  fetchUsersEpic
)

export default rootEpic