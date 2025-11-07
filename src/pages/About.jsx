import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Pages.css";

function About() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('story');

  // Smooth scroll to tabs section
  const scrollToContent = () => {
    const aboutTabs = document.querySelector('.about-tabs');
    if (aboutTabs) {
      aboutTabs.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Team members data
  const team = [
    {
      name: "Mehdi Ben Chaabane",
      role: "President",
      image: "/images/mehdi.jpg",
      bio: "Our leader who represents Evolvia NGO and guides our conservation mission",
      linkedin: "#",
      email: "mehdi@evolvia.org"
    },
    {
      name: "Ghalia Ouannen",
      role: "Vice-President",
      image: "/images/ghalia.jpg",
      bio: "Responsible for all communications and outreach initiatives",
      linkedin: "#",
      email: "ghalia@evolvia.org"
    },
    {
      name: "Hadil Amara",
      role: "Research Director",
      image: "/images/hadil.jpg",
      bio: "Provides scientific data and research foundation for our conservation actions",
      linkedin: "#",
      email: "hadil@evolvia.org"
    },
    {
      name: "Emna Bani",
      role: "Project Manager",
      image: "/images/emna.jpg",
      bio: "Transforms our plans into impactful real-world conservation projects",
      linkedin: "#",
      email: "emna@evolvia.org"
    },
    {
      name: "Wissem Naddari",
      role: "Treasurer",
      image: "/images/wissem.jpg",
      bio: "Manages our budget and secures funding for marine conservation efforts",
      linkedin: "#",
      email: "wissem@evolvia.org"
    },
    {
      name: "Mohamed Aziz Raies",
      role: "Secretary-General",
      image: "/images/aziz.jpg",
      bio: "Oversees organizational operations and ensures effective coordination",
      linkedin: "#",
      email: "aziz@evolvia.org"
    }
  ];

  // Core values data
  const values = [
    {
      icon: "🎯",
      title: "Urgency",
      description: "Environmental challenges demand immediate, decisive action"
    },
    {
      icon: "💡",
      title: "Innovation",
      description: "We embrace creative solutions and cutting-edge technology"
    },
    {
      icon: "🤝",
      title: "Community",
      description: "Local voices and partnerships drive our conservation efforts"
    },
    {
      icon: "🔍",
      title: "Transparency",
      description: "Open communication and honest reporting build lasting trust"
    }
  ];

  // Timeline milestones
  const milestones = [
    { 
      year: "2024", 
      title: "Foundation", 
      description: "Evolvia NGO officially established in Tunisia",
      icon: "🌟"
    },
    { 
      year: "2024", 
      title: "First Cleanup", 
      description: "Organized our inaugural coastal cleanup campaign",
      icon: "🧹"
    },
    { 
      year: "2024", 
      title: "500+ Volunteers", 
      description: "Built a community of passionate environmental advocates",
      icon: "👥"
    },
    { 
      year: "2025", 
      title: "Expanding Impact", 
      description: "Growing our reach across the Gulf of Gabès region",
      icon: "🚀"
    }
  ];

  // Handle image error for team members
  const handleImageError = (e, memberName) => {
    e.target.style.display = 'none';
    e.target.parentElement.style.background = 'var(--gradient-ocean)';
    e.target.parentElement.innerHTML = `<span style="color: white; font-size: 4rem; font-weight: 700;">${memberName.charAt(0)}</span>`;
  };

  return (
    <div className="about-page">
      {/* ===== ENHANCED HERO SECTION ===== */}
      <section className="about-hero">
        {/* Animated Background Waves */}
        <div className="about-hero-bg">
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

        {/* Overlay Gradient */}
        <div className="about-hero-overlay"></div>
        
        {/* Hero Content */}
        <div className="about-hero-content">
          {/* Establishment Badge */}
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Established 2024
          </div>

          {/* Main Title */}
          <h1 className="about-hero-title">Our Story, Our Mission</h1>
          
          {/* Subtitle */}
          <p className="about-hero-subtitle">
            Protecting Tunisia's marine ecosystems through community action and innovation
          </p>

          {/* Quick Stats */}
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
        </div>
        
        {/* Enhanced Scroll Indicator */}
        <div className="about-hero-scroll" onClick={scrollToContent}>
          <span className="scroll-text">Scroll to explore</span>
          <div className="scroll-indicator-wrapper">
            {/* Mouse Icon */}
            <div className="scroll-mouse">
              <div className="scroll-wheel"></div>
            </div>
            {/* Animated Arrows */}
            <div className="scroll-arrows">
              <span className="arrow arrow-1">↓</span>
              <span className="arrow arrow-2">↓</span>
              <span className="arrow arrow-3">↓</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TABS NAVIGATION ===== */}
      <div className="about-tabs">
        <div className="about-tabs-container">
          <button 
            className={`about-tab ${activeTab === 'story' ? 'active' : ''}`}
            onClick={() => setActiveTab('story')}
          >
            <span className="tab-icon">📖</span>
            Our Story
          </button>
          <button 
            className={`about-tab ${activeTab === 'mission' ? 'active' : ''}`}
            onClick={() => setActiveTab('mission')}
          >
            <span className="tab-icon">🎯</span>
            Mission & Values
          </button>
          <button 
            className={`about-tab ${activeTab === 'team' ? 'active' : ''}`}
            onClick={() => setActiveTab('team')}
          >
            <span className="tab-icon">👥</span>
            Our Team
          </button>
          <button 
            className={`about-tab ${activeTab === 'timeline' ? 'active' : ''}`}
            onClick={() => setActiveTab('timeline')}
          >
            <span className="tab-icon">⏳</span>
            Timeline
          </button>
        </div>
      </div>

      {/* ===== STORY TAB CONTENT ===== */}
      {activeTab === 'story' && (
        <section className="about-content-section animate-fade-in">
          <div className="about-container">
            <div className="about-story-grid">
              {/* Story Image */}
              <div className="about-story-image">
                <img 
                  src="/images/underwater-bg.jpg" 
                  alt="Gulf of Gabès Marine Life" 
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <div className="about-story-badge">
                  <span className="badge-year">Est. 2024</span>
                </div>
              </div>
              
              {/* Story Text */}
              <div className="about-story-text">
                <h2 className="section-title">Where It All Began</h2>
                <div className="story-content">
                  <p className="lead-paragraph">
                    Evolvia emerged from a simple yet powerful observation: the Gulf of Gabès, 
                    one of Tunisia's most precious marine ecosystems, was calling out for immediate action.
                  </p>
                  
                  <p>
                    Founded in 2024, Evolvia represents a new generation of environmental activists 
                    who believe that urgent problems require swift, intelligent solutions. We don't 
                    just study environmental challenges—we solve them through direct action, community 
                    engagement, and innovative conservation strategies.
                  </p>
                  
                  <p>
                    Our journey started with a small group of passionate individuals who shared a 
                    common vision: to protect Tunisia's coastal waters and marine life for future 
                    generations. What began as weekend beach cleanups has evolved into a comprehensive 
                    conservation initiative that combines scientific research, community education, 
                    and hands-on environmental restoration.
                  </p>
                  
                  {/* Highlight Box */}
                  <div className="story-highlight">
                    <div className="highlight-icon">🌊</div>
                    <div className="highlight-text">
                      <h3>Our Promise</h3>
                      <p>
                        Every action we take today creates ripples of positive change that will 
                        protect our oceans for generations to come.
                      </p>
                    </div>
                  </div>
                  
                  <p>
                    Today, Evolvia stands as a beacon of hope for marine conservation in Tunisia. 
                    We've mobilized hundreds of volunteers, removed tons of marine debris, and 
                    raised awareness among thousands of community members. Our work has directly 
                    contributed to the protection of critical marine habitats and the promotion 
                    of sustainable practices throughout the Gulf of Gabès region.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ===== MISSION TAB CONTENT ===== */}
      {activeTab === 'mission' && (
        <section className="about-content-section animate-fade-in">
          <div className="about-container">
            {/* Mission Statement */}
            <div className="mission-section">
              <h2 className="section-title centered">Our Mission</h2>
              <div className="mission-statement">
                <p>
                  To rapidly restore and protect the marine ecosystem of the Gulf of Gabès 
                  through innovative conservation technologies, community engagement, and 
                  sustainable practices that ensure a thriving ocean for future generations.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="values-section">
              <h2 className="section-title centered">Our Core Values</h2>
              <div className="values-grid">
                {values.map((value, index) => (
                  <div key={index} className="value-card">
                    <div className="value-icon">{value.icon}</div>
                    <h3 className="value-title">{value.title}</h3>
                    <p className="value-description">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Our Approach */}
            <div className="approach-section">
              <h2 className="section-title centered">Our Approach</h2>
              <div className="approach-grid">
                <div className="approach-card">
                  <div className="approach-number">01</div>
                  <h3>Community-First</h3>
                  <p>
                    We empower local communities with knowledge, resources, and support 
                    to become environmental stewards.
                  </p>
                </div>
                <div className="approach-card">
                  <div className="approach-number">02</div>
                  <h3>Science-Based</h3>
                  <p>
                    Our conservation strategies are grounded in rigorous scientific research 
                    and data-driven decision making.
                  </p>
                </div>
                <div className="approach-card">
                  <div className="approach-number">03</div>
                  <h3>Action-Oriented</h3>
                  <p>
                    We believe in hands-on conservation work that delivers measurable, 
                    lasting environmental impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ===== TEAM TAB CONTENT ===== */}
      {activeTab === 'team' && (
        <section className="about-content-section animate-fade-in">
          <div className="about-container">
            <h2 className="section-title centered">Meet Our Team</h2>
            <p className="section-subtitle centered">
              Passionate individuals dedicated to marine conservation and environmental sustainability
            </p>
            
            {/* Team Grid */}
            <div className="team-grid">
              {team.map((member, index) => (
                <div key={index} className="team-card">
                  {/* Team Member Image */}
                  <div className="team-image">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      onError={(e) => handleImageError(e, member.name)}
                    />
                    {/* Hover Overlay */}
                    <div className="team-overlay">
                      <div className="team-social">
                        <a 
                          href={member.linkedin} 
                          aria-label={`${member.name} LinkedIn`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          💼
                        </a>
                        <a 
                          href={`mailto:${member.email}`} 
                          aria-label={`Email ${member.name}`}
                        >
                          📧
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Team Member Info */}
                  <div className="team-info">
                    <h3 className="team-name">{member.name}</h3>
                    <p className="team-role">{member.role}</p>
                    <p className="team-bio">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Join Team CTA */}
            <div className="join-team-cta">
              <h3>Want to Join Our Team?</h3>
              <p>We're always looking for passionate individuals to help protect our oceans.</p>
              <button 
                className="btn-primary"
                onClick={() => navigate('/contact')}
              >
                View Opportunities
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ===== TIMELINE TAB CONTENT ===== */}
      {activeTab === 'timeline' && (
        <section className="about-content-section animate-fade-in">
          <div className="about-container">
            <h2 className="section-title centered">Our Journey</h2>
            <p className="section-subtitle centered">
              Key milestones in our mission to protect the Gulf of Gabès
            </p>
            
            {/* Timeline */}
            <div className="timeline">
              {milestones.map((milestone, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker">
                    <span className="marker-icon">{milestone.icon}</span>
                  </div>
                  <div className="timeline-content">
                    <span className="timeline-year">{milestone.year}</span>
                    <h3 className="timeline-title">{milestone.title}</h3>
                    <p className="timeline-description">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== CTA SECTION ===== */}
      <section className="about-cta-section">
        <div className="about-container">
          <div className="cta-content">
            <h2>Ready to Make a Difference?</h2>
            <p>Join us in protecting Tunisia's marine ecosystems and building a sustainable future.</p>
            <div className="cta-buttons">
              <button 
                className="btn-primary-large"
                onClick={() => navigate('/involved')}
              >
                Get Involved
              </button>
              <button 
                className="btn-secondary-large"
                onClick={() => navigate('/contact')}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;