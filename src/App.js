import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RecentWork from "./components/RecentWork";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <RecentWork />
      <About />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
