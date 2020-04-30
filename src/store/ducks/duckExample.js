import { createReducer, createActions } from 'reduxsauce'

/* Types & Actions Creators */
const { Types, Creators } = createActions({
  sayHello: [],
  setNumber: ['number'],
})

export const ExampleType = Types
export default Creators

/* Initial State */
export const INITIAL_STATE = {
  number: 5,
}

/* Methods */
const setNumber = (state = INITIAL_STATE, { number }) => ({
  ...state,
  number
})

/* Reducers */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_NUMBER]: setNumber,
})