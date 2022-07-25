/** @format */

import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./component/Nav";
import Home from "./component/Home";
import Upload from "./component/Upload";

function App() {
  const [post, setPost] = useState({
    title: "",
    body: "",
  });
  const [postList, setPostList] = useState([]);

  return (
    <div id='page-wrap'>
      <Nav />
      <Routes>
        <Route path={"/"} element={<Home postList={postList} />} />
        <Route
          path={"/upload"}
          element={
            <Upload
              post={post}
              setPost={setPost}
              postList={postList}
              setPostList={setPostList}
            />
          }></Route>
      </Routes>
    </div>
  );
}

export default App;
