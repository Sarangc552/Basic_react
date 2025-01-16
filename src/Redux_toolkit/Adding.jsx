import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addition, division, multiplication, substraction } from './ExampleSlice2';

const Adding = () => {
    const {value}=useSelector((state)=>state.test1);
    const dispatch=useDispatch();
    
  return (
    <div>
        <h1>{value}</h1>
        <button onClick={()=>dispatch(addition())}>adding</button>
        <button onClick={()=>dispatch(substraction())}>substraction</button>
        <button onClick={()=>dispatch(multiplication())}>multiplication</button>
        <button onClick={()=>dispatch(division())}>division</button>
    </div>
  )
}

export default Adding