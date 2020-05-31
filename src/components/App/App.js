import React from "react";
import Form from "./../Common/Form";
import AllPosts from "./../Common/Posts/All";
import FetchedPosts from "./../Common/Posts/Fetched";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Form />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Синхронные посты</h2>
          <AllPosts />
        </div>
        <div className="col">
          <h2>Асинхронные посты</h2>
          <FetchedPosts posts={[]} />
        </div>
      </div>
    </div>
  );
}

export default App;
