// Student ID: 22001414

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav id="navbar" className={(scroll && "scroll") || ""}>
      <img src="/img/logo.png" alt="NZ Tourism Logo" className="company-logo" />
      <div>
        <a className="nav-link" href="#destinations-section">
          Top Destinations
        </a>
        <a className="nav-link" href="#activities">
          Local Activities
        </a>
        <a className="nav-link" href="#meet-steve">
          Meet Steve
        </a>
        <a className="secondary-btn white-hover" href="#contact-us">
          Contact Us
        </a>
      </div>
    </nav>
  );
}
