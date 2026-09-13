// Student ID: 22001414

import { useEffect, useState } from "react";

export default function PopUp() {
  const [popUp, setPopUp] = useState(false);

  useEffect(() => {
    const popUpTimer = setTimeout(() => {
      setPopUp(true);
    }, 1000);

    return () => {
      clearTimeout(popUpTimer);
    };
  }, []);
  return (
    <div className="popup" style={{ display: popUp ? "flex" : "none" }}>
      <div className="popup-content">
        <button id="close" onClick={() => setPopUp(false)}>
          ×
        </button>
        <h2>Welcome to NZ Tourism Pro</h2>
        <p>
          Check out our website to see the top destinations, activities and
          discounts by local businesses.
        </p>
        <a
          id="popup-cta"
          href="/#destinations-section"
          onClick={() => setPopUp(false)}
        >
          Let's Go
        </a>
      </div>
    </div>
  );
}
