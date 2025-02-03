import { useState } from "react";
import Field from "./fields";

export default function GeneralInfo(){
    const [editing, setEditing] = useState(false);

    const handleEditClick = (e) => {
        setEditing(!editing);
    };

    return (
        <div>
            <header>
                <h1>General Information</h1>
              
            </header>
            <section className="particulars">
                <div className="fieldsColumn">
                    <Field label="First Name" initialValue="" editing={editing}/>
                    <Field label="Last Name" initialValue=""  editing={editing}/>
                    <Field label="Email" initialValue="" editing={editing} />
                    <Field label="Phone" initialValue=""  editing={editing} />
                </div>
                <button className="primaryBtn" onClick={handleEditClick}>{editing ? "Save" : "Edit"}</button>
            </section>
           
           
        </div>
    );
}