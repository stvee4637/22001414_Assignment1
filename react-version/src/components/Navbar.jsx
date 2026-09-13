// Student ID: 22001414

export default function Navbar() {
  return (
    <nav id="navbar">
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
