import React from "react";
import { useState } from "react";

const SidebarContext = React.createContext();
export default SidebarContext;

export function SidebarProvider({ children }) {
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false);

  const toggleSidebar = () => {
    setSideBarIsOpen(!sideBarIsOpen);
  };

  return (
    <SidebarContext.Provider
      value={{ isOpen: sideBarIsOpen, toggle: toggleSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
}
