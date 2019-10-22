import axios from 'axios'
import {from, pipe} from 'rxjs'
import { ofType } from 'redux-observable'
import { mergeMap, map, mapTo, delay } from 'rxjs/operators'
import { fetchTodosSuccessful } from '../actions/counterActions'

const todosEpic = pipe(
  ofType('FETCH_USERS_SUCCESSFUL'),
  delay(1000),
  mapTo({ type: 'FETCH_TODOS' })
)

const todosSuccessfulEpic = pipe(
  ofType('FETCH_TODOS'),
  mergeMap( () => 
    from(axios.get('https://jsonplaceholder.typicode.com/todos'))
      .pipe(map(response => fetchTodosSuccessful(response.data)))
  )
)

export {
  todosEpic,
  todosSuccessfulEpic
}