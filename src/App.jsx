import {  useState } from "react";
import usePasswordGenerator from "./hooks/usePasswordGenerator";
import StrengthChecker from "./components/StrengthChecker";

function App() {
  
  const [length,setLength] = useState(4);
  const [checkboxData,setCheckboxData] = useState([
      {title:"Include Uppercase", state: false},
    {title:"Include Lowercase", state: false},
    {title:"Include Numbers", state: false},
    {title:"Include Symbols", state: false}
  ]);
  
  const [copied, setCopied] = useState(false);

  const handleCheckBoxChange = (index) => {
         const updatedCheckboxData = [...checkboxData];
         updatedCheckboxData[index].state = !updatedCheckboxData[index].state;
         setCheckboxData(updatedCheckboxData);
  }
   
  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }

  const {password,errorMessage,generatePassword} = usePasswordGenerator();
  return (
    <div className="container">
      {password &&<div className="header">
        <div className="title">{password}</div>
        <button className="copyBtn" onClick={handleCopy}>
          {copied ? "Copied" : "copy"}
        </button>
      </div>}

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
      <StrengthChecker password={password} />
      {/* Error message display */}
      {errorMessage && <div className="error">{errorMessage}</div>}


      <button className="generateBtn" onClick={()=>generatePassword(checkboxData,length)}>Generate Password</button>
    </div>
  );
}

export default App;