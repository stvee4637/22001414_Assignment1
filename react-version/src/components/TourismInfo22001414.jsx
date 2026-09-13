// Student ID: 22001414

export default function TourismInfo({ name, description, imgUrl }) {
  return (
    <section className="info-section" id="destinations-section">
      <div>
        <h3>
          {name}
          {description}
          {imgUrl}
          First Class <br />
          <span
            className="accent-font"
            style={{ color: "#87c0e1", fontSize: "7rem" }}
          >
            Kiwiana
          </span>
          <br />
          Experience
        </h3>
        <p style={{ marginTop: "1rem" }}>
          When visiting New Zealand, theres a few places you must see before
          leaving and telling your mates about it!
        </p>
        <dl className="destination-list">
          <dt>
            <strong>Queenstown | #1 Adventure capital Of the World</strong>
          </dt>
          <dd>
            wildly known for it's all-year round
            <a
              className="destination-link"
              href="https://www.nzoneskydive.co.nz/"
              target="_blank"
            >
              Sky Diving,
            </a>
            <a
              className="destination-link"
              href="https://queenstown.skyline.co.nz/things-to-do/queenstown-gondola/"
              target="_blank"
            >
              Gondola,
            </a>
            <a
              className="destination-link"
              href="https://queenstown.skyline.co.nz/things-to-do/queenstown-luge/"
              target="_blank"
            >
              Luge,
            </a>
            iconic restaurants like
            <a
              className="destination-link"
              href="https://www.fergburger.com/"
              target="_blank"
            >
              Furg Burger
            </a>
            (known for famous people coming all over the world to try it out!)
          </dd>
          <dt>
            <strong>Milford Sound | #1 Location for Scenic Boat Cruises</strong>
          </dt>
          <dd>
            Cruise along one of the most iconic Scenic Lakes in Aotearoa (New
            Zealand.) <br />
            With the Iconic Peak which rises 1,692 Metres from the water, you
            can go Kayaking at night. Look at dolphins, fur seals, and Fiordland
            crested penguins.
          </dd>
          <dt>
            <strong>Mount Cook National Park | Highest Peak in NZ</strong>
          </dt>
          <dd>
            Known to be the highest peak in NZ, check out the beginner-friendly
            hike, which is a 3-hour loop to view Mount Cook and the glaciers.
            You also have
          </dd>
        </dl>
      </div>
      <iframe
        width={560}
        height={315}
        src="https://www.youtube.com/embed/XCsMvEMX11Y?si=W0JmgduKHSnmRJcK"
        title="YouTube video player"
        frameBorder={0}
        allow="
      accelerometer;
      autoplay;
      clipboard-write;
      encrypted-media;
      gyroscope;
      picture-in-picture;
      web-share;
    "
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen=""
      />
    </section>
  );
}
