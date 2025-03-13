import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import TreeCard from "./components/treecard";
import Button from 'react-bootstrap/Button'

function App() {

  // const treenodes = insert tree data here;

  const [
    selectedValue,
    setSelectedValue,
  ] = useState("past");

  const handleRadioChange = (
    value
  ) => {
      setSelectedValue(value);
      console.log("test");
      //add functionality to toggle view
  };
  return (
    <div className="App">
      <header className="App-header">
        Ghosts of Trees
      </header>
      <section>
        <div id ='title'>The Trees Past</div>
        insert map here
        <TreeCard/>
        <div className="floating container">
          <div className="radioGroup">
            <div className='radioButton'>
              <input 
                type='radio' 
                id='past' 
                value="past" 
                checked={selectedValue === "past"} 
                onChange={()=>handleRadioChange("past")}/>
              <label htmlFor='past'>Past</label>
            </div>
            <div className='radioButton'>
              <input 
                type='radio' 
                id='present' 
                value="present" 
                checked={selectedValue === "present"} 
                onChange={()=>handleRadioChange("present")}/>
              <label htmlFor='present'>Present</label>
            </div>
            <div className='radioButton'>
              <input 
                type='radio' 
                id='future' 
                value="future" 
                checked={selectedValue === "future"} 
                onChange={()=>handleRadioChange("future")}/>
              <label htmlFor='future'>Future</label>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
