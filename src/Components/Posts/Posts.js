import React from "react";
import "./Posts.css";
import { Fragment } from "react";

const Post = (props) => {
  const displayPosts = (props) => {
    const { posts } = props;

    if (posts.length > 0) {
      return posts.map((post) => {
        return (
          <Fragment>
            <div className="post" key={post.title}>
              <img
                src={post.urlToImage}
                alt="covid"
                width="100%"
                className="img"
              />
              <h5 className="title"> {post.title}</h5>
              <p className="author"> {post.author}</p>
              <p className="description"> {post.description}</p>
            </div>
          </Fragment>
        );
      });
    }
  };
  return <div className="Posts">{displayPosts(props)}</div>;
};

export default Post;
