/** @format */

import { useState } from "react";

function App() {
  const [txt, setTxt] = useState("");
  const [txtList, setTxtList] = useState([]);
  return (
    <div id='title'>
      <h1>Daily-View</h1>

      <input onChange={(e) => setTxt(e.target.value)} type='text' value={txt} />
      <button
        onClick={() => {
          alert(txt);
          setTxtList((prev) => [...prev, txt]);
          setTxt("");
        }}>
        Submit
      </button>
      <ul id="post-list" >
        {txtList.map((txt, idx) => (
          <li key={idx}>{txt}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
