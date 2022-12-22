import React, { useState } from "react";

function App(){
const [inputPlayer,setInputPlayer]=useState("")
const [player,setPlayer]=useState([]);


function handleChange(event){
    const newValue=event.target.value;
    setInputPlayer(newValue);
}
 function savePlayer(){
    setPlayer(previousPlayer =>{
        return [...previousPlayer, inputPlayer]
    });
    setInputPlayer("");
 }

    return (
    
    <div className="container">
    <div className="header">
<h1>Bingo Open</h1>
    </div>
    
    <div className="inputi">
<input  onChange={handleChange} type="text" placeholder="Ime igrača" value={inputPlayer} />
<button onClick={savePlayer}type="button" id="dugme" className="btn btn-success"> UNESI </button>  
</div>
  <div className="lista">
    <ul>
{player.map(toAddPlayer =>(
    <li>{toAddPlayer}</li>
))}
    </ul>
  </div>
  </div>
  
    
    )
}

export default App;