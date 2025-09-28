import React, {useState} from "react";
import Picture from "./Picture";

const EditPicture = () => {
    const [color, setColor] = useState('#fff');
    const [columns, setColumns] = useState(5);
    const [rows, setRows] = useState(5);

    const save = () => {

    }

    return(
        <div>
            <div>
                <button onClick={save}>SAVE</button>
                <input value={color} onChange={(e) => setColor(e.target.value)} type="color"/>
                <div>
                    <button onClick={()=>setColumns(columns + 5)}>+</button>
                    <p>{columns}</p>
                    <button onClick={()=>setColumns(columns - 5)}>-</button>
                </div>

                <div>
                    <button onClick={() => setRows(rows + 5)}>+</button>
                    <p>{rows}</p>
                    <button onClick={() => setRows(rows - 5)}>-</button>
                </div>
            </div>
            <Picture rows={rows} columns={columns} selectedColor={color} />
        </div>
    )
}

export default EditPicture;