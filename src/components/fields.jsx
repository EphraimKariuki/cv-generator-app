import {useState} from "react"
import "../styles/component.css"

function Field({label, initialValue, editing}) {
    const [value, setValue] = useState(initialValue)
    const handleChange = (e) => {
        setValue(e.target.value)
    };
  return (
    <div className="fieldDiv">
        <label className="fieldLbl">{label} :</label>
        {editing ? 
            (<input
                className="fieldInput"
                 type="text"
                 value={value} 
                 onChange={handleChange} 
            />) :
            (<div>{value}</div>)
        }
    </div>
  );
}

export default Field;