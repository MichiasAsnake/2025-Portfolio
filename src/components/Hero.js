import React, { useEffect, useRef } from "react";
import Spline from "@splinetool/react-spline";
import "./Hero.css";

function Hero() {
  const splineRef = useRef(null);

  useEffect(() => {
    // Force Spline to recalculate size after component mounts
    const timers = [];

    // Multiple resize events to ensure Spline renders properly
    [100, 300, 600, 1000, 2000].forEach((delay) => {
      const timer = setTimeout(() => {
        window.dispatchEvent(new Event("resize"));
        // Also trigger a resize on the Spline container specifically
        if (splineRef.current) {
          const resizeEvent = new Event("resize");
          splineRef.current.dispatchEvent(resizeEvent);
        }
      }, delay);
      timers.push(timer);
    });

    // Use MutationObserver to detect when Spline elements are added
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
          // Check if any added nodes are canvas or iframe elements
          mutation.addedNodes.forEach((node) => {
            if (
              node.nodeType === 1 &&
              (node.tagName === "CANVAS" || node.tagName === "IFRAME")
            ) {
              setTimeout(() => {
                window.dispatchEvent(new Event("resize"));
              }, 100);
            }
          });
        }
      });
    });

    if (splineRef.current) {
      observer.observe(splineRef.current, {
        childList: true,
        subtree: true,
      });
    }

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
      observer.disconnect();
    };
  }, []);

  const handleSplineLoad = () => {
    // Additional resize events when Spline loads
    [200, 500, 1000].forEach((delay) => {
      setTimeout(() => {
        window.dispatchEvent(new Event("resize"));
      }, delay);
    });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <div className="hero-avatar" ref={splineRef}>
          <Spline
            scene="https://prod.spline.design/2WIS1NxzxxQ9qoCZ/scene.splinecode"
            onLoad={handleSplineLoad}
          />
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
