import React, { useState, useEffect } from "react";
import Pup from "./Pup"
import Selected  from "./Selected";

function App() {
  const [pups,setPup] = useState([])
  const [pupDetails, setPupDetails] = useState({});
  const [currentDog, setCurrentDog] = useState({});
  const [clickedGood, setClickedGood]= useState(false);  

  let url=`http://localhost:3001/pups`

  const handlePup=(pup)=>{
    setPup(...pups,pup)
    console.log(pups)
  }

  useEffect(()=>{
    fetch(url)
    .then(r=>r.json())
    .then(pupData => setPup(pupData))
    },[])

    const changeBehavior =(id)=> {
      fetch(`http://localhost:3001/pups/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          isGoodDog: !currentDog.isGoodDog
      })
    })

      .then(r=>r.json())
      .then(newPup => setCurrentDog(newPup))
    }

    const alldogs=(pups)=>{
      return(
        <div>{pups.map(pup => <span key={pup.id} onClick={()=>setCurrentDog(pup)}> {pup.name}</span>)}</div>
      )
    }
    
    const filterdogs=(pups)=>{
      return(
        <div>{pups.map(pup => <span key={pup.id} onClick={()=>setCurrentDog(pup)}> {pup.name}</span>)}</div>
      )
    }

    return (
      <div className="App">
        <div id="filter-div">
          <button id="good-dog-filter">  Filter good dogs: OFF</button>
        </div>
        
        
        {/* <div id="dog-bar">   {pups.map(pup => <span key={pup.id} onClick={()=>setCurrentDog(pup)}> {pup.name}</span>)}    </div> */}


        <div id="dog-bar">{alldogs(pups)}    </div>



        
        <div id="dog-summary-container">
          <h1>DOGGO:</h1>
          <Selected pup={currentDog}  changeBehavior={changeBehavior} />
          <div id="dog-info">

          </div>
        <Pup pups={pups}></Pup>
        </div>
      </div>
    );
  }
  
  export default App;
  