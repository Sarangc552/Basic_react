import React, { useState } from 'react'
import Props_task2 from './Props_task2'

function Prop_task2_3() {
  const [name, setname] = useState("sarang")
  const changename=()=>{
    setname("My name is sarang")
  }
  return (
    <div>
      <Props_task2 name={name} btnfn={changename}/>
    </div>
  )
}

export default Prop_task2_3