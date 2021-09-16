import React, { useState } from "react";


function Selected ({pup,changeBehavior}){

return (
    <div id="dog-info"> 
    <h2>{pup.name}</h2>
    <img src={pup.image}/>
    <button onClick={()=> changeBehavior(pup.id)}>{pup.isGoodDog ? "Is Good": "Not Good"}</button>
    </div>
)
}
export default Selected