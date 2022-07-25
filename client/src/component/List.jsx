/** @format */

import React from "react";

const List = ({ postList }) => {
  return (
    <ul>
      {postList.map((post, idx) => (
        <li key={idx}>
          <span id='post-title'>{post.title}</span>
          <span id='post-body'>{post.body}</span>
        </li>
      ))}
    </ul>
  );
};

export default List;
