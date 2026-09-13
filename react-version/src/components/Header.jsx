// Student ID: 22001414

export default function Header() {
  return (
    <header className="hero">
      <h1>
        <span className="accent-font" style={{ color: "#87c0e1" }}>
          EXPLORE
        </span>
        <br />
        NZ TOURISM
      </h1>
      <a className="secondary-btn white-hover" href="#destinations-section">
        View Activities
      </a>
      <img src="/img/queenstown-wide.png" alt="Auckland City Night View" />
    </header>
  );
}
