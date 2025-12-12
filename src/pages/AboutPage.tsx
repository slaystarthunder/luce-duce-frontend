export function AboutPage() {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-overlay" />
        <div className="about-hero-content">
          <h1>About</h1>
          <p>Committed to shaping futures through learning.</p>
        </div>
      </section>

      {/* Content */}
      <section className="about-section">
        <div className="about-section-inner">
          <div className="about-icon" aria-hidden="true">
            ◎
          </div>

          <h2>Our Mission</h2>

          <p className="about-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>
    </div>
  );
}
