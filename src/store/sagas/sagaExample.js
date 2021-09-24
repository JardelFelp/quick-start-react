import { takeEvery } from 'redux-saga/effects'
import { ExampleTypes } from 'store/ducks/duckExample'

export function* sayHello() {
  yield console.log('Hello World!')
}

export const exampleLinks = [takeEvery(ExampleTypes.SAY_HELLO, sayHello)]
