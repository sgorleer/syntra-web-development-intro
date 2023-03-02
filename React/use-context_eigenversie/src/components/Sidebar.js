import React from "react";
import SidebarContext from "../state/SidebarContext";
import { useContext } from "react";
import SidebarContainer from "./SidebarContainer";

function Sidebar() {
  const { isOpen } = useContext(SidebarContext);

  if (isOpen) {
    return <SidebarContainer />;
  }
}

export default Sidebar;
