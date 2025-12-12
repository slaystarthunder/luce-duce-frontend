interface PublicHeroProps {
  onLoginClick: () => void;
}

export function PublicHero({ onLoginClick }: PublicHeroProps) {
  return (
    <div className="public-hero-page">
      {/* Hero */}
      <section className="public-hero">
        <div className="public-hero-content">
          <h1>Luce Duce</h1>
          <p>
            A modern academic portal to access your courses, programs, and
            progress.
          </p>

          <button
            className="primary-button"
            onClick={onLoginClick}
          >
            Login
          </button>
        </div>
      </section>

      {/* Below-hero intro section */}
      <section className="public-section">
        <div className="public-section-inner">
          <div className="public-icon">◎</div>

          <h2>Welcome</h2>

          <p className="public-text">
            Luce Duce provides students with a clear overview of their academic
            journey. View your courses, track progress, and access essential
            information — all in one place.
          </p>
        </div>
      </section>
    </div>
  );
}
