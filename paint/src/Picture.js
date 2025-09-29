import React, { useState, useEffect } from "react";
import "./styles/Picture.css";

const Picture = ({ rows, columns, selectedColor, onSave }) => {
  const pixels = columns * rows;

  const [picture, setPicture] = useState(() => {
    const arr = [];
    let i = 0;
    while (i < pixels) {
      arr.push("#ffffff");
      i++;
    }
    
    return arr;
  });

  useEffect(() => {
    const arr = [];
    let i = 0;
    while (i < pixels) {
      arr.push("#ffffff");
      i++;
    }
    setPicture(arr);
    
  }, [rows, columns]);

  const paint = (index) => {
    const newPicture = [...picture];
    newPicture[index] = selectedColor;
    setPicture(newPicture);    
  };

  return (
<>
    <div className="picture" style={{ width: columns * 32, height: rows * 32 }}>
      {picture.map((color, index) => (
        <div
          className="pixel"
          onClick={() => paint(index)}
          style={{ backgroundColor: color, width: 30, height: 30 }}
          key={index}
        ></div>
      ))}
    </div>    
    <button onClick={() => onSave(picture)}>SAVE</button>
</>
  );
};

export default Picture;
