/** @format */

import { useState } from "react";

function App() {
  const [arr, setArr] = useState([]);
  const [num, setNum] = useState(0);

  return (
    <div id='title'>
      <h1>Daily-View</h1>
      {arr.map((ele, idx) => (
        <span key={idx}>{ele}</span>
      ))}
      <button
        onClick={() => {
          setArr((prev) => [...prev, num]);
          setNum(num + 1);
        }}>
        증가
      </button>
    </div>
  );
}

export default App;
