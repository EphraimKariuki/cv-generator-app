import { useState } from "react";
import Field from "./fields";



function EducationExp({initialValue}) {
  
  const [entries, setEntries] = useState(
    initialValue.education.map((entry) => {
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
    <div className="education-exp">
      <header> 
        <h1>Education</h1>
        <button className="primaryBtn" onClick={handleNewClick}>Add New</button>
      </header>  
       {entries.map((entry) => {
        return (
          <section key={entry.id} className="particulars">
            <div  className="fieldsColumn">
              <Field label="School Name" initialValue="" editing={entry.editing} />
              <Field label="Course Title" initialValue=""  editing={entry.editing}/>
              <Field label="Duration of Study" initialValue="" editing={entry.editing} />
            </div> 
            <button className="primaryBtn" onClick={() => {handleEditClick(entry.id)}}>{entry.editing ? "Save" : "Edit"}</button>
          </section>
        )
      })}
    </div>
  );
}

export default EducationExp;