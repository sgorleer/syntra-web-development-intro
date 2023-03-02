import React from "react";
import Sidebar from "./Sidebar";
import SidebarContext from "../state/SidebarContext";
import ThemeContext from "../state/ThemeContext";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import MyImage from "../images/menu.png";

function About() {
  const { toggle } = useContext(SidebarContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: theme.background,
      }}
    >
      <Button onClick={toggleTheme} />
      <Button variant="outline-secondary" onClick={toggle}>
        <img src={MyImage} alt="add item" width="30" />
      </Button>
      <Sidebar />
      <div className="page">About</div>
    </div>
  );
}

export default About;
