// Student ID: 22001414

export default function MeetSteve() {
  return (
    <section className="info-section" id="meet-steve">
      <img
        src="/img/Steven_Metry.png"
        alt="Steven Metry - Local NZ Tour Specialist"
        style={{ height: "100%" }}
      />
      <div>
        <h3 style={{ lineHeight: "1em", marginBottom: "1rem" }}>
          Meet Steven <br />
          <span className="accent-font" style={{ color: "#87c0e1" }}>
            Your Local NZ Tour Guide
          </span>
        </h3>
        <p>
          Hi, I'm Steven! I'm here to help guide you through New Zealand's
          Ultimate Tourist Spots.
        </p>
        <p>
          Growing up here in NZ, I'm lucky enough to say I've been able to visit
          some of Aotearoa (New Zealand)'s top destinations, from Cape-Ranga all
          the Way down to The Remarkables in Queenstown. New Zealand has some of
          the best Toursist spots to visit all year round, as we are known to be
          the "Adventure Capital of the World!" This means all-year-round
          skiing, world-class beaches, and Adventure Parks for days... As
          someone who's personally experienced all these amazing activities, I
          highly recommend you get a group of your mates together and plan your
          next adventure.
          <br />
          <br />
        </p>
        <p style={{ marginBottom: "3rem" }}>
          Book a call with me today, and I can help plan your next trip for Free
          (Assuming I can join!!)
        </p>
        <a className="secondary-btn" href="#contact-us">
          Request Session
        </a>
      </div>
    </section>
  );
}
