import React, { useState, useEffect } from "react";
import Post from "../../Components/Post/Post";
import axios from "axios";

const HomePage = () => {
  const [posts, setPosts] = useState("");

  let config = { Authorization: "3055f8f90fa44bbe8bda05385a20690a" };
  const url = "https://newsapi.org/v2/top-headlines?sources=bbc-news";

  useEffect(() => {
    AllPosts();
  }, []);

  const AllPosts = () => {
    axios
      .get(`${url}`, { headers: config })

      .then((response) => {
        const allPosts = response.data.articles;
        console.log(response);
        setPosts(allPosts);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  return (
    <div>
      <Post className="Posts" posts={posts} />
    </div>
  );
};

export default HomePage;
