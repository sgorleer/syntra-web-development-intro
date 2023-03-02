import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeSlider = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={handleToggle}
    >
      <FaMoon size={20} color={isDarkMode ? "#343A40" : "#F2C94C"} />
      <div
        style={{
          width: "50px",
          height: "20px",
          borderRadius: "10px",
          backgroundColor: "#ccc",
          margin: "0 10px",
        }}
      >
        <div
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "10px",
            backgroundColor: "white",
            transform: `translateX(${isDarkMode ? "30px" : "0"})`,
            transition: "transform 0.3s ease-in-out",
          }}
        />
      </div>
      <FaSun size={20} color={isDarkMode ? "#F2C94C" : "#343A40"} />
    </div>
  );
};

export default ThemeSlider;
