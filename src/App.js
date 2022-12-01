import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import { ThemeProvider } from "./contexts";
import { ThemeTogglerButton } from "./components/ThemeTogglerButton";

function App() {
  
  return (
    <div className="App">
      <ThemeProvider>
        <BrowserRouter>
          <Sidebar />
          <ThemeTogglerButton />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
