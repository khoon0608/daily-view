/** @format */

import { Routes, Route } from "react-router-dom";
import Nav from "./component/Nav";
import Home from "./component/Home";
import Upload from "./component/Upload";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/upload"} element={<Upload />}></Route>
      </Routes>
    </>
  );
}

export default App;
