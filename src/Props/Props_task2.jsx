import React, { useState } from 'react'

function Props_task2(abc) {
    

  return (
    <div>
        
        <h1>{abc.name}</h1>
        <button onClick={abc.btnfn}>Change</button>
    </div>
  )
}

export default Props_task2