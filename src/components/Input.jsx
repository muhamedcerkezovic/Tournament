import React, { useState } from "react";
function Input(props) {
    const [inputPlayer, setInputPlayer] = useState("")



    function handleChange(event) {
        const newValue = event.target.value;
        setInputPlayer(newValue);
    }

    
    return (<div>
        <div className="inputi">
            <input onChange={handleChange} type="text" placeholder="Ime igrača" value={inputPlayer} />
            <button 
            onClick={() => {
                props.onAdd(inputPlayer);
                setInputPlayer("");
            }} type="button" id="dugme" className="btn btn-success"> UNESI </button>
        </div>

        
    </div>
    );
}


export default Input;