import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="title">Arcade Prize Showcase</h1>
      <img
        src="https://assets.hackclub.com/flag-orpheus-top.svg"
        alt="https://assets.hackclub.com/flag-orpheus-top.svg"
        className="top-right-image"
      />
    </header>
  );
}

export default Header;
