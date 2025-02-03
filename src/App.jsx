import { useState } from 'react'
import GeneralInfo from './components/generalInformation.jsx'
import EducationExp from './components/EducationExp.jsx';
import PracticalExp from './components/practicalExp.jsx';
import "./styles/component.css"
import initailValues from './components/initialValues.js';


function App() {
  return (
    <div>
      <GeneralInfo initialValue={initailValues} />
      <EducationExp initialValue={initailValues}/>
      <PracticalExp initialValue={initailValues} />
    </div>  
  );
}

export default App
