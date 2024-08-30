import React from "react";
import PrizeGrid from "./PrizeGrid";
import "./Home.css";

function Home({ onNewPostClick }) {
  return (
    <div className="home">
      <p>Show off the amazing prizes you’ve won!</p>

      <button onClick={onNewPostClick} className="new-post-button">
        Create New Post
      </button>
      <PrizeGrid posts={[]} />
    </div>
  );
}

export default Home;
