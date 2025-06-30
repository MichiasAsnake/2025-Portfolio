import React from "react";

function WorkCard({ title, desc, tags, imageSrc, imageAlt, link }) {
  return (
    <div className="work-card">
      <div className="work-card-left">
        <div className="work-card-title">{title}</div>
        <div className="work-card-desc">{desc}</div>
        <div className="work-card-tags">
          {tags.map((tag, i) => (
            <img
              key={i}
              src={process.env.PUBLIC_URL + tag.src}
              alt={tag.alt}
              className="icon-tag"
            />
          ))}
        </div>
      </div>
      <div className="work-card-img">
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="work-card-link"
          >
            <img
              src={process.env.PUBLIC_URL + imageSrc}
              alt={imageAlt}
              style={{ width: "100%", borderRadius: "12px" }}
            />
          </a>
        ) : (
          <img
            src={process.env.PUBLIC_URL + imageSrc}
            alt={imageAlt}
            style={{ width: "100%", borderRadius: "12px" }}
          />
        )}
      </div>
    </div>
  );
}

export default WorkCard;
