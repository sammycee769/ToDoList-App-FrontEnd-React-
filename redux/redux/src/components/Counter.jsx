import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement,reset,incrementByAmount} from '../slice/counterSlice.jsx'

const Counter = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
    </div>
  )
}

export default Counter
