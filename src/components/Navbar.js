import React, { useEffect, useState } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "work", label: "Work" },
  { id: "story", label: "Story" },
  { id: "contact", label: "Contact" },
];

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80) {
            current = section.id;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90; // Offset for fixed navbar
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav className="inline-flex justify-center fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-md transition-all duration-300 [transition-property:background-color,backdrop-filter] [mask-image:linear-gradient(to_bottom,black_0%,black_80%,transparent_100%)]">
      <ul
        className="inline-flex flex-wrap justify-center items-center backdrop-blur-md rounded-full bg-[#bcdcff]/80 shadow-lg mx-auto my-4 px-6 py-2 gap-8 md:gap-6 sm:gap-3 w-auto"
        style={{ minWidth: 0 }}
      >
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              onClick={(e) => handleNavClick(e, section.id)}
              className={`text-white font-semibold text-base px-4 py-1 rounded-full text-center transition-colors duration-150 sm:text-sm sm:px-2 sm:py-0.5
                ${
                  activeSection === section.id
                    ? "bg-[#a3c8f7] text-[#222]"
                    : "hover:bg-[#a3c8f7] hover:text-[#222]"
                }
              `}
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
