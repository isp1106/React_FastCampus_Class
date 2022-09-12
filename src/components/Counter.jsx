import React from 'react'
import { increment, decrement, incrementByAmount, decrementByAmount, useCounter} from '../store/slices/counterSlice'
function Counter() {
  const {count, dispatch} = useCounter()
  return (
    <div>
      <p>{count}</p>
      <button onClick={()=> dispatch(increment())}>
        +1
      </button>
      <button onClick={()=> dispatch(decrement())}>
        -1
      </button>
      <button onClick={()=> dispatch(incrementByAmount(2))}>
        +2
      </button>
      <button onClick={()=> dispatch(decrementByAmount(2))}>
        -2
      </button>
    </div>
  )
}

export default Counter