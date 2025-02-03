// import "../styles/component.css"

import { useState } from "react";
import Field from "./fields";


function PracticalExp({initialValue}) {
  const [entries, setEntries] = useState(
    initialValue.work.map((entry) => {
      return ({id: entry.id, editing: false})
    })
  );

  function handleEditClick (entryId) {
    const newEntries = entries.map(entry => {return {...entry}});
    const currentEntry = newEntries.find((entry) => entry.id === entryId);
    
    currentEntry.editing = !currentEntry.editing;
    
    setEntries(newEntries)
  };

  const handleNewClick = () => {
    const newEntries = entries.map(entry => {return {...entry}});
    newEntries.push({id: entries.length, editing: true} )

    setEntries(newEntries)  
  };

  return (
    <div>
      <header>
        <h1>Practical Experience</h1>
        <button className="primaryBtn" onClick={handleNewClick} >Add New</button>
      </header>
      {entries.map((entry) => {
        return (
          <section key={entry.id} className="particulars">
            <div  className="fieldsColumn">
            <Field label="Company Name" initialValue="" editing={entry.editing} />
              <Field label="Position Title" initialValue=""  editing={entry.editing}/>
              <Field label="Responsibility" initialValue="" editing={entry.editing} />
              <Field label="Duration" initialValue=""  editing={entry.editing} />
            </div> 
            <button className="primaryBtn" onClick={() => {handleEditClick(entry.id)}}>{entry.editing ? "Save" : "Edit"}</button>
          </section>
        )
      })}
    </div>
  );
}

export default PracticalExp;