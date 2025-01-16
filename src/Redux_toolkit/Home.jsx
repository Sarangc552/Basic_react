import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, multiplication } from './ExampleSlice';

const Home = () => {
    // const sample=useSelector((state)=>state.test);
    // console.log(sample.value);
    const {value}=useSelector((state)=>state.test);
    const dispatch=useDispatch();
    
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={()=>dispatch(increment())}>increment</button>
      <button onClick={()=>dispatch(decrement())}>decrement</button>
      <button onClick={()=>dispatch(multiplication())}>multiplication</button>
    </div>
  )
}

export default Home