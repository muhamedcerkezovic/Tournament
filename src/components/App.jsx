import React,{useState} from "react";
import Header from "./Header";
import Input from "./Input";
import ToAddPlayer from "./ToAddPlayer";

function App(){

    const [players,setPlayer]=useState([]);
    function savePlayer(inputPlayer){
        setPlayer(previousPlayer =>{
            return [...previousPlayer, inputPlayer]
        });
     }

     function deletePlayer(id) {
        setPlayer(previousPlayer => {
            return previousPlayer.filter((player, index) => {
                return index !== id;
            })
        })
    }

    return (
    
    <div className="container">
<Header />
    
   <Input onAdd={savePlayer}/>
  <div className="lista">
            <ol>
                {players.map((toAddPlayer, index) => (
                    <ToAddPlayer
                        key={index}
                        id={index}
                        text={toAddPlayer}
                        onChecked={deletePlayer}
                    />
                ))}
            </ol>
        </div>
  </div>
  
    
    )
}

export default App;