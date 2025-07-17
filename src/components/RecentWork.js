import React, { useState } from "react";
import "./RecentWork.css";
import WorkCard from "./WorkCard";

function RecentWork() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleResumeDownload = () => {
    setIsDownloading(true);

    // Create a link element to trigger download
    const link = document.createElement("a");
    link.href = process.env.PUBLIC_URL + "/Michias Asnake Resume.pdf";
    link.download = "Michias_Asnake_Resume.pdf";
    link.target = "_blank";

    // Add to DOM, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Reset animation after 2 seconds
    setTimeout(() => {
      setIsDownloading(false);
    }, 2000);
  };

  return (
    <section className="recent-work" id="work">
      <div className="recent-work-grid">
        <aside className="work-info-sticky">
          <button
            className={`resume-btn ${isDownloading ? "downloading" : ""}`}
            onClick={handleResumeDownload}
            disabled={isDownloading}
          >
            {isDownloading ? "Downloading..." : "Download Resume"}
          </button>
          <div className="work-info-block">
            <div className="work-info-title">Connect with me!</div>
            <div className="work-info-socials">
              <a
                href="https://www.linkedin.com/in/michias-asnake-0000000000/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <img
                  src={process.env.PUBLIC_URL + "/Linkedin.svg"}
                  alt="LinkedIn"
                  className="icon-social"
                />
              </a>
              <a
                href="https://github.com/MichiasAsnake"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <img
                  src={process.env.PUBLIC_URL + "/Github.svg"}
                  alt="GitHub"
                  className="icon-social"
                />
              </a>
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
                src={process.env.PUBLIC_URL + "/Javascript.svg"}
                alt="JavaScript"
                className="icon-tech"
              />
              <img
                src={process.env.PUBLIC_URL + "/Python.svg"}
                alt="Python"
                className="icon-tech"
              />
              <img
                src={process.env.PUBLIC_URL + "/React.svg"}
                alt="React"
                className="icon-tech"
              />
              <img
                src={process.env.PUBLIC_URL + "/Node.svg"}
                alt="Node.js"
                className="icon-tech"
              />
              <img
                src={process.env.PUBLIC_URL + "/wordpress.svg"}
                alt="WordPress"
                className="icon-tech"
              />
              <img
                src={process.env.PUBLIC_URL + "/Nextjs.svg"}
                alt="Next.js"
                className="icon-tech"
              />
              <img
                src={process.env.PUBLIC_URL + "/cursor 1.svg"}
                alt="Cursor"
                className="icon-tech"
              />
            </div>
          </div>
          <div className="work-info-block">
            <div className="work-info-title">Design Tools</div>
            <div className="work-info-icons">
              <img
                src={process.env.PUBLIC_URL + "/Figma.svg"}
                alt="Figma"
                className="icon-tech"
              />
              <img
                src={process.env.PUBLIC_URL + "/Adobe Illustrator.svg"}
                alt="Adobe Illustrator"
                className="icon-tech"
              />
              <img
                src={process.env.PUBLIC_URL + "/Tailwind.svg"}
                alt="Tailwind CSS"
                className="icon-tech"
              />
              <img
                src={process.env.PUBLIC_URL + "/Bootstrap.svg"}
                alt="Bootstrap"
                className="icon-tech"
              />
            </div>
          </div>
        </aside>
        <div className="work-cards-stack">
          <h2>My Recent Work</h2>
          <WorkCard
            title="OrderMind"
            desc="Query order status, customer info, and rush jobs using natural language - powered by OpenAI, Pinecone, and real-time API data."
            tags={[
              { src: "/Nextjs.svg", alt: "Next.js" },
              { src: "/Javascript.svg", alt: "TypeScript" },
            ]}
            imageSrc="/OrderMind.PNG"
            imageAlt="OrderMind Screenshot"
            link="https://github.com/MichiasAsnake/OrderMind"
          />
          <WorkCard
            title="JobSpot"
            desc="Created a job board that aggregates listings from major sites using the JSearch API, with filters for job type and location, and direct links to apply."
            tags={[{ src: "/React.svg", alt: "React" }]}
            imageSrc="/JobSSSpot.png"
            imageAlt="JobSpot Screenshot"
            link="https://jobsspot.netlify.app/"
          />
          <WorkCard
            title="Whats Trending"
            desc="Displays trending videos, comments, and phrases using the TikTok API."
            tags={[
              { src: "/Javascript.svg", alt: "JavaScript" },
              { src: "/Python.svg", alt: "Python" },
            ]}
            imageSrc="/whats trending.PNG"
            imageAlt="Whats Trending Screenshot"
            link="https://tiktok-stories.vercel.app/"
          />
          <WorkCard
            title="JobSight"
            desc="Co workers needed to separate order colors efficiently - so i built this chrome extension."
            tags={[{ src: "/Javascript.svg", alt: "JavaScript" }]}
            imageSrc="/JobsSpot.PNG"
            imageAlt="JobsSpot Screenshot"
            link="https://github.com/MichiasAsnake/Spindle"
          />
        </div>
      </div>
    </section>
  );
}

export default RecentWork;
