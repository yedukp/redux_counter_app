import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/counterSlice'

function Counter() {
  //state to hold value from input box
  const [range, setRange]=useState("")

  //hook to dispatch a function in action
  const dispatch = useDispatch()
  //component can access the state by using useSelecter hook
  const count = useSelector((state)=>state.counter.value)

  //range
  console.log(range);

  return (
    <>
      <div className='d-flex align-items-center justify-content-center w-100 mt-5 flex-column mb-5'>
          <h1 style={{fontSize:"90px"}}>{count}</h1>
          <div className='mt-5'>
              <button onClick={()=>dispatch(decrement(Number(range)))} className='btn btn-warning p-3'>Decrement</button>{/* Number is used to convert string into number */}
              <button onClick={()=>dispatch(reset())} className='btn btn-danger p-3 ms-3'>Reset</button>
              <button onClick={()=>dispatch(increment(Number(range)))} className='btn btn-success p-3 ms-3'>Increment</button>
          </div>
      </div>
      {/* input box */}
      <div>
            <input onChange={(e)=>setRange(e.target.value)} type="text" className='form-control w-100 mt-3' placeholder='Enter the range' style={{borderColor:"green", }}/>
          </div>
    </>
  )
}

export default Counter