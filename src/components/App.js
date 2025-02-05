import React from "react";
import blogData from "../data/blog";

import About from "./About"
import ArticleList from "./ArticleList"
import Header from "./Header"




function App() {
  return (
    <div className="App">
      <Header
      name={blogData.name}>
      </Header>


      <About
      image={blogData.image}
      about={blogData.about}>
      </About>




      <ArticleList
      key={blogData.id}
      posts={blogData.posts}
      >


      </ArticleList>
    </div>
  );
}


export default App;