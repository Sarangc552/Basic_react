import React, { useContext } from 'react'
import { sampleContext } from './App_parent'

const Task1_usecontext = () => {
    const enter=()=>{
        setname("my name is sarang")
    }
    const{name,setname}=useContext(sampleContext)
  return (
    <div>
        <h1>{name}</h1>
        <button onClick={enter}>click</button>
    </div>
  )
}

export default Task1_usecontext