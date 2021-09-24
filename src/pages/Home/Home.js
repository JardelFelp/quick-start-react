import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { ExampleTypes } from 'store/ducks/duckExample'

import { Container, CounterSpan, Button } from './styles'

const Home = () => {
  const number = useSelector(({ example }) => example.number)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: ExampleTypes.SAY_HELLO })
  }, [dispatch])

  const incrementNumber = useCallback(() => {
    dispatch({ type: ExampleTypes.SET_NUMBER, number: number + 1 })
  }, [dispatch, number])

  const decrementNumber = useCallback(() => {
    dispatch({ type: ExampleTypes.SET_NUMBER, number: number - 1 })
  }, [dispatch, number])

  return (
    <Container>
      <CounterSpan>Count: {number}</CounterSpan>
      <Button onClick={incrementNumber}>Increment</Button>
      <Button onClick={decrementNumber}>Decrement</Button>
    </Container>
  )
}

export default Home
