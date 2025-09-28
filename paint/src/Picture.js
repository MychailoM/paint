import React, {useState} from "react";

const Picture = ({props}) => {
    const picture = [];
    const pixels = props.columns * props.rows;
    let i = 1;

    while(i <= pixels){
        picture.push(i);
        i++;
    }    

    return(
        <div>
            {picture.map((val, i) => (
                <div key={i}>{val}</div>
            ))}
        </div>
    )
}

export default Picture;