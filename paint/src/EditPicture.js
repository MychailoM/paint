import React, {useState} from "react";
import Picture from "./Picture";
import './styles/EditPicture.css'

const EditPicture = ({onSave}) => {
    const [color, setColor] = useState('#fff');
    const [columns, setColumns] = useState(5);
    const [rows, setRows] = useState(5);
    



    return(
        <div className="container">
            <div className="controlsContainer"> 
                <div className="columns">

                    <button className="add" onClick={()=>setColumns(columns + 5)}>+</button>
                    <p className="number">columns: {columns}</p>
                    <button  className="minus" onClick={()=>setColumns(columns - 5)}>-</button>
                </div>               

                <input className="palette" value={color} onChange={(e) => setColor(e.target.value)} type="color"/>                

                <div  className="rows">
                    <button className="add" onClick={() => setRows(rows + 5)}>+</button>
                    <p className="number">rows: {rows}</p>
                    <button className="minus" onClick={() => setRows(rows - 5)}>-</button>
                </div>
            </div>
            <Picture onSave={onSave}  rows={rows} columns={columns} selectedColor={color} />
        </div>
    )
}

export default EditPicture;