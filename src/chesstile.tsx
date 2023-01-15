import React from "react";

function Tile(props:any){
    return(
        <div className={`${props.color} w-24 h-24 m-0 text-white`}>
            <h1>
                {props.nums}
            </h1>
        </div>
    )
}

export default Tile