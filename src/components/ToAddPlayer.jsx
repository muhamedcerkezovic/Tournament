import React from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function ToAddPlayer(props){
    return(
    <li>{props.text} <IconButton aria-label="delete" onClick={() =>{
        props.onChecked(props.id)
    } }>
  <DeleteIcon />
</IconButton></li>
    )
}

export default ToAddPlayer;