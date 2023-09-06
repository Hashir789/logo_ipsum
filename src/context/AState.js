import React, { useState } from "react";
import AContext from "./aContext";

const AState = (props) =>{
    const [active, setActive] = useState('Home')
  return(
        <AContext.Provider value={{active, setActive}}>
            {props.children}
        </AContext.Provider>
    )
}
export default AState;