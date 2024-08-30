import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import PostForm from "./components/PostForm";
import PrizeGrid from "./components/PrizeGrid";
import "./App.css";

function App() {
  const [showPostForm, setShowPostForm] = useState(false);
  const [posts, setPosts] = useState([]);

  const handleOpenPostForm = () => {
    setShowPostForm(true);
  };

  const handleClosePostForm = () => {
    setShowPostForm(false);
  };

  const handleAddPost = (newPost) => {
    setPosts([...posts, newPost]);
    setShowPostForm(false);
  };

  return (
    <div className="app">
      <Header />
      <Home onNewPostClick={handleOpenPostForm} />
      <PrizeGrid posts={posts} />
      <Footer />
      {showPostForm && (
        <PostForm onClose={handleClosePostForm} onSubmit={handleAddPost} />
      )}
    </div>
  );
}

export default App;
