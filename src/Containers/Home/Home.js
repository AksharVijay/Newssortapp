import React, { useState, useEffect, useMemo } from "react";
import Posts from "../../Components/Posts/Posts";
import axios from "axios";
import { Fragment } from "react";
import "./Home.css";

const Home = () => {
  const [posts, setPosts] = useState("");
  const [sortBy, setSortBy] = useState("none");

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

  // const sortedPosts = useMemo(() => { //<---- Uncomment this for the use of useMemo
  //   return sortBy === "none"
  //     ? posts
  //     : posts.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  // }, [sortBy]);

  return (
    <Fragment>
      <div className="home">
        <div className="select">
          <select
            name="slct"
            id="slct"
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="title">Title</option>
            <option value="urlToImage">Image</option>
            <option value="author">Author</option>
            <option value="description">Description</option>
            <option value="none">No Sort</option>
          </select>
        </div>
        <Posts
          className="Posts"
          posts={
            sortBy === "none"
              ? posts
              : posts.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
          }
          key={posts.title}
        />
        {/* <Posts className="Posts" posts={sortedPosts} key={posts.title} /> 
         //Uncomment this for the use of useMemo and comment the above <Posts/> component 
        */}
      </div>
    </Fragment>
  );
};

export default Home;
