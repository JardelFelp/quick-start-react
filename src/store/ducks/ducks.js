import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import example from './duckExample'

// You need create a Persist Config
const examplePersistConfig = {
  key: 'example-persist',
  storage,
}

export default combineReducers({
  example: persistReducer(examplePersistConfig, example),
})
