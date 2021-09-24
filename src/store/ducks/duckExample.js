import { createReducer, createActions } from 'reduxsauce'

/* Initial State */
export const INITIAL_STATE = {
  number: 1,
}

/* Types & Actions Creators */
export const { Types: ExampleTypes, Creators } = createActions({
  sayHello: [],
  setNumber: ['number'],
})

/* Methods */
export const setNumber = (state = INITIAL_STATE, { number }) => ({
  ...state,
  number,
})

/* Reducers */
export default createReducer(INITIAL_STATE, {
  [ExampleTypes.SET_NUMBER]: setNumber,
})
