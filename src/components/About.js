import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about" id="story">
      <h2 className="about-heading">A bit about me</h2>
      <div className="about-card">
        <div className="about-bio">
          Co workers needed to separate order colors efficiently - so i built
          this chrome extension. Co workers needed to separate order colors
          efficiently - so i built this chrome extension.
        </div>
        <div className="about-img">
          {/* Replace src with your image path */}
          <img src="me.jpg" alt="me" />
        </div>
      </div>
    </section>
  );
}

export default About;
