import React from "react";

const List=(props)=>{
    return (
        <div>
            {props.name} <button onClick={()=>{props.addToPlaylist(props.id)}}>+</button>
        </div>
    )
};

export default List;