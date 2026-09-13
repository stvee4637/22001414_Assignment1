// Student ID: 22001414

export default function ContactSection() {
  return (
    <section className="contact-section" id="contact-us">
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <h5>Book a Free 15 Min Call with our NZ Tourism Specialist</h5>
        <p className="mini-heading">
          If you have any questions or would like to book a planning session,
          please don't hesitate to contact us. We look forward to hearing from
          you!
        </p>
        <div>
          <h6 style={{ color: "#003366" }}>Reach Us:</h6>
          <div className="footer-contact-info">
            <a href="tel:+64211808620" className="contact-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              021 180 8620
            </a>
            <a href="mailto:22001414@massey.ac.nz" className="contact-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              22001414@massey.ac.nz
            </a>
            <p className="footer-item">Student ID: 22001414</p>
          </div>
        </div>
      </div>
      {/* Calendly inline widget begin */}
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/steven-metry/30min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=003366"
        style={{ minWidth: "45rem", width: "100%", height: 700 }}
      />
      {/* Calendly inline widget end */}
    </section>
  );
}
