import React from 'react'
import Props_task4_1 from './Props_task4_1';

function Props_task_4() {
    let obj={name:"sarang",age:"24",qualification:"Bca"};
    
  return (
    <div>
        <Props_task4_1 name={obj}/>

    </div>
  )
}

export default Props_task_4