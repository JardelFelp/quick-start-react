import { all, takeEvery } from 'redux-saga/effects'

import { ExampleType } from 'store/ducks/duckExample'
import { sayHello } from './sagaExample'

const exampleLinks = [takeEvery(ExampleType.SAY_HELLO, sayHello)]

export default function* rootSaga() {
  yield all([...exampleLinks])
}
