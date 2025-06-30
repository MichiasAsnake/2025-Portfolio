import React from "react";
import "./RecentWork.css";
import WorkCard from "./WorkCard";

function RecentWork() {
  return (
    <section className="recent-work" id="work">
      <div className="recent-work-grid">
        <aside className="work-info-sticky">
          <button className="resume-btn">Download Resume</button>
          <div className="work-info-block">
            <div className="work-info-title">Connect with me!</div>
            <div className="work-info-socials">
              <img
                src={process.env.PUBLIC_URL + "/indeed.png"}
                alt="LinkedIn"
                className="icon-social"
              />
              <img
                src={process.env.PUBLIC_URL + "/git.png"}
                alt="GitHub"
                className="icon-social"
              />
            </div>
            <div className="work-info-email-row">
              <span className="work-info-arrow">→</span>
              <span className="work-info-email">mickysanake@live.com</span>
            </div>
          </div>
          <div className="work-info-block">
            <div className="work-info-title">What I Build With</div>
            <div className="work-info-icons">
              <img
                src={process.env.PUBLIC_URL + "/JS.png"}
                alt="JavaScript"
                className="icon-tech"
              />
              <img
                src={process.env.PUBLIC_URL + "/PYTHON.png"}
                alt="Python"
                className="icon-tech"
              />
              <img
                src={process.env.PUBLIC_URL + "/REACT.png"}
                alt="React"
                className="icon-tech"
              />
              <img
                src={process.env.PUBLIC_URL + "/NODE.png"}
                alt="Node.js"
                className="icon-tech"
              />
              <img
                src={process.env.PUBLIC_URL + "/WORDPRESS.png"}
                alt="WordPress"
                className="icon-tech"
              />
              <img
                src={process.env.PUBLIC_URL + "/NEXT.png"}
                alt="Next.js"
                className="icon-tech"
              />
            </div>
          </div>
          <div className="work-info-block">
            <div className="work-info-title">Design Tools</div>
            <div className="work-info-icons">
              <img
                src={process.env.PUBLIC_URL + "/FIGMA.png"}
                alt="Figma"
                className="icon-tech"
              />
              <img
                src={process.env.PUBLIC_URL + "/AI.png"}
                alt="Adobe Illustrator"
                className="icon-tech"
              />
              <img
                src={process.env.PUBLIC_URL + "/TAILWIND.png"}
                alt="Tailwind CSS"
                className="icon-tech"
              />
              <img
                src={process.env.PUBLIC_URL + "/BOOTSTRAP.png"}
                alt="Bootstrap"
                className="icon-tech"
              />
            </div>
          </div>
        </aside>
        <div className="work-cards-stack">
          <h2>My Recent Work</h2>
          <WorkCard
            title="Whats Trending"
            desc="Displays trending videos, comments, and phrases on tiktok."
            tags={[
              { src: "/js for card.png", alt: "JavaScript" },
              { src: "/python for card.png", alt: "Python" },
            ]}
            imageSrc="/whats trending.PNG"
            imageAlt="Whats Trending Screenshot"
            link="https://tiktok-stories.vercel.app/"
          />
          <WorkCard
            title="JobSight"
            desc="Co workers needed to separate order colors efficiently - so i built this chrome extension."
            tags={[{ src: "/python for card.png", alt: "Python" }]}
            imageSrc="/JobsSpot.PNG"
            imageAlt="JobsSpot Screenshot"
            link="https://github.com/MichiasAsnake/Spindle"
          />
          <WorkCard
            title="Coolor"
            desc="Creates unique color palettes that can be used in any project."
            tags={[
              { src: "/js for card.png", alt: "JavaScript" },
              { src: "/python for card.png", alt: "Python" },
            ]}
            imageSrc="/COolor.PNG"
            imageAlt="Coolor Screenshot"
            link="https://cheerful-fenglisu-7444ee.netlify.app/homepage.html"
          />
        </div>
      </div>
    </section>
  );
}

export default RecentWork;
