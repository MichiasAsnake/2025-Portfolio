import React from "react";
import "./Timeline.css";

function Timeline() {
  return (
    <section className="timeline">
      <div className="timeline-track">
        <div className="timeline-item">
          <div className="timeline-logo-job">
            <img
              src={
                process.env.PUBLIC_URL + "/f787e397d4ae0fa37c9d25866106e616.jpg"
              }
              alt="AUSCO Logo"
              className="timeline-logo"
            />
            <div className="timeline-job-text">
              <span className="timeline-job-title">Ausco</span>
              <span className="timeline-job-role">Graphic Designer</span>
            </div>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-logo-job">
            <img
              src={process.env.PUBLIC_URL + "/linkup_job_market_data_logo.jpg"}
              alt="LinkUp Logo"
              className="timeline-logo"
            />
            <div className="timeline-job-text">
              <span className="timeline-job-title">Link Up</span>
              <span className="timeline-job-role">Web Programmer</span>
            </div>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-logo-job">
            <img
              src={process.env.PUBLIC_URL + "/humrro_logo.jpg"}
              alt="HumRRO Logo"
              className="timeline-logo"
            />
            <div className="timeline-job-text">
              <span className="timeline-job-title">HumRRO</span>
              <span className="timeline-job-role">Web Designer</span>
            </div>
          </div>
        </div>
      </div>
      <div className="timeline-bar-row">
        <span className="timeline-year timeline-year-left">2020</span>
        <div className="timeline-bar">
          <span className="timeline-dot" />
          <span className="timeline-dot" />
          <span className="timeline-dot" />
          <span className="timeline-dot" />
          <span className="timeline-arrow-svg">
            <svg
              width="38"
              height="18"
              viewBox="0 0 38 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 9H36"
                stroke="#2196f3"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M29 2L36 9L29 16"
                stroke="#2196f3"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
        <span className="timeline-year timeline-year-right">Now</span>
      </div>
    </section>
  );
}

export default Timeline;
