import { useState } from "react";
import { HiBars3 } from "react-icons/hi2";


const Header = () => {
  const [expand, setExapand] = useState(false);
  const styling = {
    position: "fixed",
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    background: "rgba(255,255,255,0.75)",
    padding: "1rem",
    top: 0,
    width: "100%",
    zIndex: 10,
  }

  return (
    <div style={styling} className="header">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#footer">Contact</a>
    </div>
  );
};

export default Header;
