import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about" id="story">
      <h2 className="about-heading">A bit about me</h2>
      <div className="about-card">
        <div className="about-bio">
          <p>
            After finishing my Graphic Design degree, I found a real interest in
            front-end development—where design and logic meet. I enjoy building
            clean, useful interfaces and solving problems in ways that feel
            intuitive. There's nothing better than seeing something you made
            actually get used. Chasing that sense of real impact is what keeps
            me going.
          </p>
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
