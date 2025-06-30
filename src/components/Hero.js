import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <div className="hero-avatar">
          <img src="large wave smile blue.svg" alt="wave smile blue" />
        </div>
        <div className="hero-content">
          <h1>Welcome! I'm Michias</h1>
          <p className="subtitle">Developer.Designer.ProblemSolver</p>
          <div className="hero-location-row">
            <span className="hero-location-icon">🌐</span>
            <span className="location">Based in Los Angeles, CA</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
