import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './ducks'
import rootSaga from './sagas'

const middlewares = []
const sagaMiddleware = createSagaMiddleware()

middlewares.push(sagaMiddleware)

const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga)

export default store
