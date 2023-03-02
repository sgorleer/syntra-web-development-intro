import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { SidebarProvider } from "./state/SidebarContext";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./state/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <SidebarProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </SidebarProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
