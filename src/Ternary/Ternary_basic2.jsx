import React, { useState } from "react";
import Use_effect_basic1 from "../Use_effect_hook/Use_effect_basic1";

const Ternary_basic2 = () => {
  const [show, setshow] = useState(true);
  const Hide = () => {
    setshow((e) => !e);
  };
  return (
    <div>
      {/* {show===true&&<Use_effect_basic1/>}--This is logical operator */}
      {show === true ? <Use_effect_basic1 /> : ""}
      <button
        onClick={Hide}
        // className={show === true ? "btn btn-danger" : "btn btn-success"}
        style={{backgroundColor:show===true?"red":"green"}}
      >
        {show === true ? "Hide" : "show"}
      </button>
    </div>
  );
};

export default Ternary_basic2;
