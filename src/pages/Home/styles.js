import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  row-gap: 25px;
`

export const CounterSpan = styled.span`
  font-size: 20px;
`

export const Button = styled.button`
  font-size: 16px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #cccccc;
  cursor: pointer;
  box-shadow: none;
`
