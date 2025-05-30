// import logo from './logo.svg';
import './App.css';
import React, { useState, useRef } from "react";
import TreeMap from "./components/treemap";
// import pin from "./assets/treepin.svg"
var val = "Past";

function App() {
  var title = "The Trees "
  const titleRef = useRef(null)
  const overlayRef = useRef(null)
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
      val = value;
      titleRef.current.textContent = title
      if (value === "Past") {
        overlayRef.current.className = "past"
      } else if (value === "Present") {
        overlayRef.current.className = "present"
      } else {
        overlayRef.current.className = "future"
      }

      //add functionality to toggle view
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Witness Trees of Oakland Cemetery</h1>
        <h4>Similar to Champion Trees, but these are trees' significance is defined not by their size, but by the events they've seen.</h4>
      </header>
      <section>
      {/* <img src={pin} alt="Tree Pin" /> */}
        <div id ='title' ref={titleRef}>The Trees Past</div>
        <br/>
        <br/>
        <div ref={overlayRef} className='past'>
          <TreeMap state={val}/>
        </div>
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
      <footer>
        <p>Created by <a href="https://audschung.com/">Audrey Chung</a> & <a href="https://cubic-star-b3a.notion.site/Sheleah-Harris-Portfolio-8f93f4865a9149d5806dd5e27db3d7e4">Sheleah Harris</a></p>
        <p>Information by Mary Price & Cooper Sanchez</p>
      </footer>
    </div>
  );
}

export default App;
