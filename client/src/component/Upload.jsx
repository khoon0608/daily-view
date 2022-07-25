/** @format */

import React from "react";

const Upload = ({ post, setPost, setPostList }) => {
  return (
    <div id='upload'>
      <input
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        id='input-title'
        type='text'
        placeholder='제목을 입력하세요'
        value={post.title}
      />
      <div id='btn-pic'>사진</div>
      <textarea
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        name=''
        id='input-body'
        cols='30'
        rows='10'></textarea>
      <button
        onClick={() => {
          alert(post.body);
          setPostList((prev) => [...prev, post]);
          setPost({
            title: "",
            body: "",
            img: "",
          });
        }}>
        Submit
      </button>
    </div>
  );
};

export default Upload;
