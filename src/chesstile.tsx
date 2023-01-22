import React from "react";

function Tile(props:any){
    return(
        <div className={`${props.color} w-24 h-24 m-0`}>
            {props.children}
        </div>
    )
}

export default Tile