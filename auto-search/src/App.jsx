import React, { useEffect } from "react";
import "./App.css";
import Data from "./Data/countryData.json";
import { useState } from "react";

function App() {

  const [inputValue, setValue] = useState("");
  const [result, setResult] = useState([]);
  const [display, setDisplay] = useState(false);

  // to Store the inout value
  const handleInput = (value) => {
    setValue(value);
  };
  
  useEffect(() => {
    // to Store the result data
    const handleResult = () => {
      let temp = inputValue.trimStart();
      if (temp != "" && display) {
        let data = Data.filter((e) =>
          e.name.toLowerCase().startsWith(temp.toLowerCase(), 0)
        );
        setResult(data);
      } else {
        setResult([]);
      }
    };
    handleResult();
  }, [inputValue, display]);

  // to show/hide when Escape key is pressed
  const handleEscape = (e) => {
    if (e == "Escape") {
      console.log(e);
      setDisplay(false);
    } else {
      setDisplay(true);
    }
  };

  return (
    <div>
      <h2>Search</h2>
      <div>
        <input
          type="text"
          placeholder="hello"
          value={inputValue}
          autoFocus
          onKeyDown={(e) => handleEscape(e.key)}
          onChange={(e) => handleInput(e.target.value)}
        />
        <button>Search</button>
      </div>
      <div>
        {display ? result.map((e) => <h4 key={e.code}>{e.name}</h4>) : ""}
      </div>
    </div>
  );
}

export default App;
