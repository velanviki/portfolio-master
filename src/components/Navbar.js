import React, { useState } from "react";
import "../styles/Navbar.css";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClose = () => {
    setIsOpen(false);
  };
  return (
    <div className="Navbar">
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="#home" onClick={handleNavClose}>Home</a>
        <a href="#about" onClick={handleNavClose}>About</a>
        <a href="#skill" onClick={handleNavClose}>Skills</a>
        <a href="#project" onClick={handleNavClose}>Project</a>
        <a href="#resume" onClick={handleNavClose}>My Journey</a>
        <a href="#contact" onClick={handleNavClose}>Contact</a>
      </div>
      <img
        className="suit"
        src="https://static.vecteezy.com/system/resources/thumbnails/000/356/792/small/Business__2848_29.jpg"
        alt="img"
      ></img>

      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
}

export default Navbar;
