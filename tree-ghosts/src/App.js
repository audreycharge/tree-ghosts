// import logo from './logo.svg';
import './App.css';
import React, { useState, useRef } from "react";
import TreeMap from "./components/treemap";
// import Button from 'react-bootstrap/Button'

function App() {
  var title = "The Trees "
  const titleRef = useRef(null)
  // const treenodes = insert tree data here;

  const [
    selectedValue,
    setSelectedValue,
  ] = useState("Past");

  const handleRadioChange = (
    value
  ) => {
      setSelectedValue(value);
      title = "The Trees " + value
      titleRef.current.textContent = title
      console.log(titleRef.current.textContent);

      //add functionality to toggle view
  };
  return (
    <div className="App">
      <header className="App-header">
        Ghosts of Trees
      </header>
      <section>
        <div id ='title' ref={titleRef}>The Trees Past</div>
        <br/>
        <br/>
        <TreeMap/>
        <div className="floating container">
          <div className="radioGroup">
            <div className='radioButton'>
              <input 
                type='radio' 
                id='Past' 
                value="Past" 
                checked={selectedValue === "Past"} 
                onChange={()=>handleRadioChange("Past")}/>
              <label htmlFor='Past'>Past</label>
            </div>
            <div className='radioButton'>
              <input 
                type='radio' 
                id='present' 
                value="Present" 
                checked={selectedValue === "Present"} 
                onChange={()=>handleRadioChange("Present")}/>
              <label htmlFor='present'>Present</label>
            </div>
            <div className='radioButton'>
              <input 
                type='radio' 
                id='future' 
                value="Future" 
                checked={selectedValue === "Future"} 
                onChange={()=>handleRadioChange("Future")}/>
              <label htmlFor='future'>Future</label>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
