import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Detail from "./../../../Common/Posts/Detail/index";
import { fetchPosts } from "../../../../store/modules/Posts/actions";

const FetchedPosts = () => {
  const posts = useSelector((state) => state.posts.fetchedPosts);
  const loader = useSelector((state) => state.loader.loading);
  const dispatch = useDispatch();

  const getPosts = () => {
    dispatch(fetchPosts());
  };

  if (loader) return <div>Загрузка...</div>;

  if (!posts.length)
    return (
      <button className="btn btn-primary" onClick={getPosts}>
        Загрузить
      </button>
    );

  return posts.map((post) => <Detail key={post.id} post={post} />);
};

export default FetchedPosts;
