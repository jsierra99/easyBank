import React from "react";
import "./app.scss";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Blog />
      <Contact />
    </>
  );
}

export default App;
