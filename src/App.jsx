import { useState } from "react";

function App() {
  
  const [length,setLength] = useState(4);
  const [checkboxData,setCheckboxData] = useState([
      {title:"Include Uppercase", state: false},
    {title:"Include Lowercase", state: false},
    {title:"Include Numbers", state: false},
    {title:"Include Symbols", state: false}
  ]);
  
  const handleCheckBoxChange = (index) => {
         const updatedCheckboxData = [...checkboxData];
         updatedCheckboxData[index].state = !updatedCheckboxData[index].state;
         setCheckboxData(updatedCheckboxData);
  }

  
  return (
    <div className="container">
      <div className="header">
        <div className="title">jry8762$#</div>
        <button className="copyBtn" onClick={() => {}}>
          copy
        </button>
      </div>

      <div className="charlength">
        <span>
          <label>Character Length</label>
          <label>{length}</label>
        </span>
        <input type="range" min='4' max='20' onChange={(e)=>setLength(e.target.value)} value={length} 
        
        />
      </div>
      <div className="checkboxes">
        {checkboxData.map((item, index) => (
          <div className="checkbox" key={index}>
            <input type="checkbox" checked={item.state} onChange={() => handleCheckBoxChange(index)} />
            <label>{item.title}</label>
          </div>
        ))}
      </div>
      {/*strength*/}

      <button className="generateBtn" onClick={()=>{

      }}>Generate Password</button>
    </div>
  );
}

export default App;