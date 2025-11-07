import { useNavigate } from "react-router-dom";
import "./Pages.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      {/* ===== HERO SECTION ===== */}
      <section className="hero home-hero-enhanced">
        {/* Animated Background */}
        <div className="hero-bg-animated">
          <div className="hero-wave wave-1"></div>
          <div className="hero-wave wave-2"></div>
          <div className="hero-wave wave-3"></div>
        </div>

        {/* Floating Particles */}
        <div className="hero-particles">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
          <div className="particle particle-6"></div>
        </div>

        {/* Background Overlay */}
        <div className="hero-overlay"></div>

        {/* Hero Content */}
        <div className="hero-content">
          {/* Badge */}
          <div className="hero-badge-home">
            <span className="badge-dot-home"></span>
            Established 2024
          </div>

          {/* Main Title */}
          <h1 className="hero-title">Protecting Our Marine Ecosystems</h1>

          {/* Subtitle */}
          <p className="hero-subtitle">
            Join us in preserving the beauty and biodiversity of Tunisia's Mediterranean waters for future generations.
          </p>

          {/* Stats Mini */}
          <div className="hero-stats-mini">
            <div className="stat-mini">
              <span className="stat-mini-number">150k+</span>
              <span className="stat-mini-label">kg Cleaned</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-mini">
              <span className="stat-mini-number">500+</span>
              <span className="stat-mini-label">Volunteers</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-mini">
              <span className="stat-mini-number">25+</span>
              <span className="stat-mini-label">Projects</span>
            </div>
          </div>

          {/* CTA Button - Removed since we have scroll indicator */}
        </div>

        {/* Scroll Indicator */}
        <div className="hero-scroll-indicator" onClick={() => {
          document.querySelector('.info-section').scrollIntoView({ behavior: 'smooth' });
        }}>
          <span className="scroll-text-home">Scroll to explore</span>
          <div className="scroll-indicator-wrapper-home">
            <div className="scroll-mouse-home">
              <div className="scroll-wheel-home"></div>
            </div>
            <div className="scroll-arrows-home">
              <span className="arrow-home arrow-1-home">↓</span>
              <span className="arrow-home arrow-2-home">↓</span>
              <span className="arrow-home arrow-3-home">↓</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="info-section about-info">
        <div className="info-icon-header">🌊</div>
        <h2>About Evolvia</h2>
        <div className="info-accent-bar"></div>
        <p>
          Founded in 2024, Evolvia is a Tunisian NGO dedicated to protecting the Gulf of Gabès 
          marine ecosystem through community-driven conservation, scientific research, and 
          environmental education.
        </p>
        <p>
          We believe that urgent environmental challenges require swift action combined with 
          innovation. Our mission is to restore marine habitats, reduce pollution, and build 
          a sustainable future for Tunisia's coastal communities.
        </p>
        <button 
          className="info-cta-btn"
          onClick={() => navigate('/about')}
        >
          Learn More About Us
        </button>
      </section>

      {/* ===== ACTIVITIES SECTION ===== */}
      <section className="info-section activities-info">
        <div className="info-icon-header">🎯</div>
        <h2>Our Activities</h2>
        <div className="info-accent-bar"></div>
        <p>
          We tackle marine conservation through diverse, impactful initiatives that combine 
          direct action with long-term sustainability strategies.
        </p>

        <div className="activities-grid">
          <div className="activity-card">
            <div className="activity-icon">🧹</div>
            <p>
              <strong>Coastal Cleanups:</strong> Organizing regular beach cleaning campaigns 
              to remove plastic and marine debris from our shores.
            </p>
          </div>
          <div className="activity-card">
            <div className="activity-icon">📚</div>
            <p>
              <strong>Education Programs:</strong> Teaching communities about marine conservation 
              and sustainable practices through workshops and school programs.
            </p>
          </div>
          <div className="activity-card">
            <div className="activity-icon">🔬</div>
            <p>
              <strong>Scientific Research:</strong> Conducting studies on marine biodiversity, 
              pollution levels, and ecosystem health in the Gulf of Gabès.
            </p>
          </div>
          <div className="activity-card">
            <div className="activity-icon">🌱</div>
            <p>
              <strong>Habitat Restoration:</strong> Actively restoring seagrass beds and 
              coral reefs to support marine life and ecosystem balance.
            </p>
          </div>
          <div className="activity-card">
            <div className="activity-icon">🤝</div>
            <p>
              <strong>Community Partnerships:</strong> Collaborating with local fishermen 
              and coastal communities to promote sustainable practices.
            </p>
          </div>
          <div className="activity-card">
            <div className="activity-icon">📢</div>
            <p>
              <strong>Advocacy Campaigns:</strong> Raising awareness about marine conservation 
              through social media, events, and public outreach.
            </p>
          </div>
        </div>

        <button 
          className="info-cta-btn secondary"
          onClick={() => navigate('/work')}
        >
          Explore Our Projects
        </button>
      </section>

      {/* ===== IMPACT SECTION ===== */}
      <section className="info-section impact-info">
        <div className="info-icon-header">📊</div>
        <h2>Our Impact</h2>
        <div className="info-accent-bar"></div>
        
        <div className="impact-description">
          Since our founding, we've made measurable progress in protecting Tunisia's marine 
          ecosystems through dedicated conservation efforts and community engagement.
        </div>

        <div className="impact-stats-highlight">
          <div className="impact-stat-box">
            <div className="impact-stat-number">150k+</div>
            <div className="impact-stat-label">kg Cleaned</div>
          </div>
          <div className="impact-stat-box">
            <div className="impact-stat-number">500+</div>
            <div className="impact-stat-label">Volunteers</div>
          </div>
          <div className="impact-stat-box">
            <div className="impact-stat-number">25+</div>
            <div className="impact-stat-label">Projects</div>
          </div>
        </div>

        <p>
          Our work has directly improved water quality, protected critical marine habitats, 
          and raised environmental awareness among thousands of community members. But we're 
          just getting started—there's still so much more to do.
        </p>

        <button 
          className="info-cta-btn accent"
          onClick={() => navigate('/involved')}
        >
          Be Part of Our Impact
        </button>
      </section>
    </div>
  );
}

export default Home;