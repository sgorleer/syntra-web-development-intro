import React from "react";
import { Link } from "react-router-dom";

function SidebarContainer() {
  return (
    <div className="sidebar">
      <Link to={"/"}>Home</Link>
      <Link to={"/About"}>About</Link>
      <Link to={"/Contact"}>Contact</Link>
    </div>
  );
}

export default SidebarContainer;
