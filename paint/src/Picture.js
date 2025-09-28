import React, {useState} from "react";
import './styles/Picture.css'

const Picture = ({rows, columns, selectedColor}) => {
    const picture = [];
    const pixels = columns * rows;
    const [color, setColor] = useState(() => picture.map(() => "#fff"));
    let i = 1;
    
    while(i <= pixels){
        picture.push(i);
        i++;
    }   
    
    const paint = (index) => {
    const newColor = [...color];
    newColor[index] = selectedColor;
    setColor(newColor);
  };

    return(
        <div className="picture" style={{width: rows * 32, height: columns * 32}}>
            {picture.map((val, index) => (
                <div className="pixel" style={{backgroundColor: color[index], width: 30, height: 30}} onClick={() => paint(index)} key={val}></div>
            ))}
        </div>
    )
}

export default Picture;
