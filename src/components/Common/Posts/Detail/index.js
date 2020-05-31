import React from "react";

const Detail = ({ post }) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title">{post.title}</div>
      </div>
    </div>
  );
};

export default Detail;
