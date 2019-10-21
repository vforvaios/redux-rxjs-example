import { pipe } from 'rxjs'
import { ofType } from 'redux-observable'
import { mapTo, delay } from 'rxjs/operators'

const counterIncreaseEpic = pipe( // or  = action$ = action$.pipe(
  ofType('INCREASE'),
  delay(1000),
  mapTo({ type: 'COUNTER_INCREASED' })
)

const counterDecreaseEpic = pipe( // or  = action$ = action$.pipe(
  ofType('DECREASE'),
  delay(1000),
  mapTo({ type: 'COUNTER_DECREASED' })
)

export {
  counterIncreaseEpic,
  counterDecreaseEpic
}
