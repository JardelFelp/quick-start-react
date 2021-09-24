import { all } from 'redux-saga/effects'

import { exampleLinks } from './sagaExample'


export default function* rootSaga() {
  yield all([...exampleLinks])
}
