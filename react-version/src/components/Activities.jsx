// Student ID: 22001414

export default function Activities() {
  return (
    <section className="activities-section" id="activities">
      <h2>Activities from local Businesses</h2>
      <p>
        Visit Some of New Zealand's most popular tourist attractions and
        activities at a fair price. <br />
        Check out the current offers below!
      </p>
      <div className="partner-promotions">
        <a
          className="partner-card"
          href="https://www.theredboats.co.nz/special-deals/"
          target="_blank"
        >
          <img src="/img/red-boats-logo.png" alt="Red Boats NZ Logo" />
          <h3>Father's Day Special</h3>
          <p>
            Grab one of these super deal vouchers for the father figure in your
            life. A full day of fishing with rod hire included for
            <strong> $50 </strong>
            instead of $110! Get them while they are still here - limited time
            only!
            <br />
            <br />
            Able to be purchased until 1st September.
            <br />
            <br />
            Terms and Conditions apply
          </p>
        </a>
        <a
          className="partner-card"
          href="https://www.infosnow.co.nz/coronet-peak-remarkables-lift-transport-packages/"
          target="_blank"
        >
          <img src="/img/infosnow-logo.png" alt="Red Boats NZ Logo" />
          <h3>Coronet Peak OR Remarkables</h3>
          <span className="accent-font" style={{ fontSize: "1.5rem" }}>
            Lift &amp; Transport Packages
          </span>
          <p>
            Adult: <strong>$229</strong>, Child(6-15):
            <strong>$154</strong> Per Day.
            <br />
            <br />
            Our ski buses offer <strong>guaranteed seats</strong> and leave
            Queenstown bright and early to get you up to either mountain around
            opening time. This means you can make the most of your day and get
            in as many runs as possible.
            <br />
            <br />
            Terms and Conditions apply
          </p>
        </a>
        <a
          className="partner-card"
          href="https://www.theredboats.co.nz/special-deals/"
          target="_blank"
        >
          <img src="/img/great-sights-logo.png" alt="Red Boats NZ Logo" />
          <h3>Cape Reinga &amp; 90 Mile Beach</h3>
          <p>
            Starting from <strong>$195 NZD</strong>. Visiting the very top of
            the North Island hasn't been easier! See Cape Reinga, where the
            Tasman Sea meets the Pacific Ocean, and the famous Ninety Mile
            Beach.
            <br />
            <br />
            This is a full day tour, with a scenic drive, sand boarding, and a
            delicious lunch. <br />
            <br />
            Terms and Conditions apply
          </p>
        </a>
      </div>
    </section>
  );
}
