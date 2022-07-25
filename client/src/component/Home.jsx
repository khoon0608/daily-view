/** @format */

import React from "react";
import List from "./List";

const Home = ({postList}) => {
  return (
    <div id='home'>
      <h1>게시글</h1>
      <List postList = {postList}/>
    </div>
  );
};

export default Home;
