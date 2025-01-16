import React, { useState } from 'react'
import Mapping_Task3 from '../Mapping/Mapping_Task3'
import Mapping_task4 from '../Mapping/Mapping_task4'

function Props_task1() {
    const [text, settext] = useState("This is my props")
    const [number, setnumber] = useState(10)
    const [example, setexample] = useState("props example")

    const [tittle, settittle] = useState("hello")
  return (
    <div>
        <Mapping_Task3 test={text} number={number} example={example}/>
        <Mapping_task4 tittle={tittle}/>
    </div>
  )
}

export default Props_task1