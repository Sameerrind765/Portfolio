import React from "react";
import Nav from "./components/Nav";
import Home from "./pages/home";
import About from "./pages/about";
import ProjectPage from "./pages/projectPage";
import Contact from "./pages/Contact";
import "./style.css";

function App() {
  return (
    <>
      <Nav />
      <Home />
      <ProjectPage />
      <About />
      <Contact />
    </>
  );
}

export default App;
