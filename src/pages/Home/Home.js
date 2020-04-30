import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

const Home = () => {
  const number = useSelector(({ example }) => example.number);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'SAY_HELLO' });
    dispatch({ type: 'SET_NUMBER', number: 3 });
  }, [])

  return (
    <div>
      Home { number }
    </div>
  );
}

export default Home;
