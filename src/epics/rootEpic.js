import { combineEpics } from 'redux-observable'
import { counterIncreaseEpic, counterDecreaseEpic } from './counterEpic'

const rootEpic = combineEpics(
  counterIncreaseEpic,
  counterDecreaseEpic
)

export default rootEpic