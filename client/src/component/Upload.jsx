/** @format */

import React, { useState } from "react";

const Upload = () => {
  const [txt, setTxt] = useState("");
  const [txtList, setTxtList] = useState([]);
  return (
    <div id='title'>
      <input onChange={(e) => setTxt(e.target.value)} type='text' value={txt} />
      <button
        onClick={() => {
          alert(txt);
          setTxtList((prev) => [...prev, txt]);
          setTxt("");
        }}>
        Submit
      </button>
    </div>
  );
};

export default Upload;
