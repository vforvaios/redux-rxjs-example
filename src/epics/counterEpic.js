import { pipe } from 'rxjs'
import { ofType } from 'redux-observable'
import { mapTo, delay } from 'rxjs/operators'

const counterIncreaseEpic = pipe(
  ofType('INCREASE'),
  delay(1000),
  mapTo({ type: 'COUNTER_INCREASED' })
)

const counterDecreaseEpic = pipe(
  ofType('DECREASE'),
  delay(1000),
  mapTo({ type: 'COUNTER_DECREASED' })
)

export {
  counterIncreaseEpic,
  counterDecreaseEpic
}
