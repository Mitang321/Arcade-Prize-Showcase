import React, { useState } from "react";
import "./Header.css";
import PostForm from "./PostForm";

function Header() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleNewPostClick = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <header className="header">
      <h1 className="title">Arcade Prize Showcase</h1>
      <img
        src="https://assets.hackclub.com/flag-orpheus-top.svg"
        alt="https://assets.hackclub.com/flag-orpheus-top.svg"
        className="top-right-image"
      />
      <button className="new-post-button" onClick={handleNewPostClick}>
        New Post
      </button>
      {isFormOpen && <PostForm onClose={handleCloseForm} />}
    </header>
  );
}

export default Header;
