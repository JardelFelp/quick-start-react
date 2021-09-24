import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore } from 'redux-persist'
/* Ducks and Sagas */
import rootReducer from './ducks'
import rootSaga from './sagas'

const middlewares = []
const sagaMiddleware = createSagaMiddleware()

middlewares.push(sagaMiddleware)

const store = createStore(rootReducer, applyMiddleware(...middlewares))

store.persist = () => persistStore(store)

sagaMiddleware.run(rootSaga)

export default store
