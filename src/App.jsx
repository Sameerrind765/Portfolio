import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import MainPage from "./pages/mainPage";
import AboutPage from "./pages/about-page";
import ProjectPage from "./pages/projectPage";
import Contact from "./pages/contact";
import ScrollToTop from "./utilis/scrolltotop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about-page" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;