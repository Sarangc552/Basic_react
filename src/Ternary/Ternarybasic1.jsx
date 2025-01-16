import React, { useState } from 'react'
import Mapping_task1 from '../Mapping/Mapping_task1'
import Terinary_form from './Terinary_form'

function Ternarybasic1() {
    const [show, setshow] = useState(false)
    const showbtn=()=>{
       setshow((e)=>!e)

    }
  return (
    <div>
        {show === true?<Terinary_form/>:""}
        <div className='text-center'>
        <button 
        // style={{color:show===true? "red":"green"}} 
        className={show===true? "btn btn-danger":"btn btn-success"} 
        onClick={showbtn}>{show===true?"hide":"show"}</button>
        </div>

    </div>
  )
}

export default Ternarybasic1