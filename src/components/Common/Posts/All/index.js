import React from "react";
import Detail from "../Detail";
import { connect } from "react-redux";

const AllPosts = ({ syncPosts }) => {
  if (!syncPosts.length) return <div>Нет постов пока...</div>;
  return syncPosts.map((post) => <Detail key={post.id} post={post} />);
};

const mapStateToProps = (state) => {
  //берем нужные данные из state redux, формируем в удобный для себя вид в текущем локальном компоненте
  //т.е. обращаемся к нужному reducer и берем нужные данные
  return {
    syncPosts: state.posts.posts,
  };
};

export default connect(mapStateToProps, null)(AllPosts);
