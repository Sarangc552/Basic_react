import React, { useEffect, useState } from 'react'

function Use_effect_basic1() {
    const [name, setname] = useState("jasil")
    const [number, setnumber] = useState(25)
    useEffect(() => {
        alert("The alert is worked")

    }, [name,number])
    const changename=()=>{
        setname("sarang")
    };
    
  return (
    <div>
        <h1>{name}</h1>
        <h1>{number}</h1>
        <button onClick={changename}>change name</button>
        <button onClick={()=>setnumber(20)}>change number</button>

    </div>
  )
}

export default Use_effect_basic1