import React  from "react";
import Timer from "./timer";
function Parent(){
    const message = "hellow";
    return(
        <Timer message = {message}/>
    );
}
export default Parent;