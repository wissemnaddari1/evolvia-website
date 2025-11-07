import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Pages.css";

function Work() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');

  // Project categories
  const categories = [
    { id: 'all', name: 'All Projects', icon: '🌊' },
    { id: 'cleanup', name: 'Coastal Cleanup', icon: '🧹' },
    { id: 'education', name: 'Education', icon: '📚' },
    { id: 'research', name: 'Research', icon: '🔬' },
    { id: 'conservation', name: 'Conservation', icon: '🐠' }
  ];

  // Projects data
  const projects = [
    {
      id: 1,
      title: "Coastal Cleanup Campaign 2024",
      category: "cleanup",
      date: "2024",
      location: "Gulf of Gabès",
      status: "completed",
      image: "/images/cleanup-project.jpg",
      description: "Large-scale coastal cleanup removing 50,000+ kg of marine debris across multiple beaches.",
      impact: {
        waste: "50,000+ kg",
        volunteers: "300+",
        area: "15 beaches"
      },
      tags: ["Beach Cleanup", "Community", "Waste Management"]
    },
    {
      id: 2,
      title: "Marine Education Program",
      category: "education",
      date: "2024",
      location: "Local Schools",
      status: "active",
      image: "/images/education-project.jpg",
      description: "Educational initiative reaching 2,000+ students with interactive marine conservation workshops.",
      impact: {
        students: "2,000+",
        schools: "15",
        workshops: "50+"
      },
      tags: ["Education", "Youth", "Awareness"]
    },
    {
      id: 3,
      title: "Marine Biodiversity Study",
      category: "research",
      date: "2024",
      location: "Gulf of Gabès",
      status: "active",
      image: "/images/research-project.jpg",
      description: "Comprehensive research documenting marine species and ecosystem health in the Gulf of Gabès.",
      impact: {
        species: "150+",
        sites: "20",
        data: "5,000+ samples"
      },
      tags: ["Research", "Science", "Biodiversity"]
    },
    {
      id: 4,
      title: "Seagrass Restoration Project",
      category: "conservation",
      date: "2024",
      location: "Coastal Waters",
      status: "active",
      image: "/images/coral-project.jpg",
      description: "Restoring critical seagrass habitats to support marine life and improve water quality.",
      impact: {
        area: "5 hectares",
        seagrass: "10,000+ plants",
        species: "30+ protected"
      },
      tags: ["Restoration", "Habitat", "Conservation"]
    },
    {
      id: 5,
      title: "Sustainable Fishing Initiative",
      category: "conservation",
      date: "2024",
      location: "Fishing Communities",
      status: "active",
      image: "/images/community-project.jpg",
      description: "Working with local fishermen to implement sustainable practices and protect marine resources.",
      impact: {
        fishermen: "100+",
        communities: "8",
        practices: "5 new methods"
      },
      tags: ["Sustainability", "Community", "Fishing"]
    },
    {
      id: 6,
      title: "Plastic Pollution Research",
      category: "research",
      date: "2024",
      location: "Coastal Areas",
      status: "completed",
      image: "/images/diving-project.jpg",
      description: "Studying microplastic distribution and impact on marine ecosystems in the Gulf of Gabès.",
      impact: {
        samples: "1,000+",
        locations: "25",
        findings: "Published"
      },
      tags: ["Plastic", "Research", "Pollution"]
    }
  ];

  // Filter projects
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="work-page">
      {/* Hero Section */}
      <section className="work-hero">
        <div className="work-hero-overlay"></div>
        <div className="work-hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Conservation in Action
          </div>
          <h1 className="work-hero-title">Our Impact Projects</h1>
          <p className="work-hero-subtitle">
            Transforming marine conservation through innovative projects and community partnerships
          </p>
        </div>
        
        {/* Scroll Indicator */}
        <div className="work-hero-scroll" onClick={() => {
          document.querySelector('.work-stats-section').scrollIntoView({ behavior: 'smooth' });
        }}>
          <span className="scroll-text">Explore our work</span>
          <div className="scroll-indicator-wrapper">
            <div className="scroll-mouse">
              <div className="scroll-wheel"></div>
            </div>
            <div className="scroll-arrows">
              <span className="arrow arrow-1">↓</span>
              <span className="arrow arrow-2">↓</span>
              <span className="arrow arrow-3">↓</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="work-stats-section">
        <div className="work-container">
          <div className="work-stats-grid">
            <div className="work-stat-card">
              <div className="stat-icon-large">🎯</div>
              <span className="stat-number-large">25+</span>
              <span className="stat-label-large">Active Projects</span>
            </div>
            <div className="work-stat-card">
              <div className="stat-icon-large">👥</div>
              <span className="stat-number-large">500+</span>
              <span className="stat-label-large">Volunteers</span>
            </div>
            <div className="work-stat-card">
              <div className="stat-icon-large">🌊</div>
              <span className="stat-number-large">150k+</span>
              <span className="stat-label-large">kg Cleaned</span>
            </div>
            <div className="work-stat-card">
              <div className="stat-icon-large">🏖️</div>
              <span className="stat-number-large">30+</span>
              <span className="stat-label-large">Beaches Protected</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="work-filter-section">
        <div className="work-container">
          <h2 className="section-title centered">Explore Our Projects</h2>
          <p className="section-subtitle centered">
            Filter by category to see specific conservation initiatives
          </p>
          
          <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(category.id)}
              >
                <span className="filter-icon">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="work-projects-section">
        <div className="work-container">
          {filteredProjects.length > 0 ? (
            <div className="projects-grid">
              {filteredProjects.map(project => (
                <div key={project.id} className="project-card">
                  {/* Project Image */}
                  <div className="project-image">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.style.background = 'linear-gradient(135deg, var(--ocean-deep) 0%, var(--sea-foam) 100%)';
                      }}
                    />
                    <div className="project-status">
                      <span className={`status-badge ${project.status}`}>
                        {project.status === 'active' ? '🟢 Active' : '✅ Completed'}
                      </span>
                    </div>
                    <div className="project-overlay">
                      <button 
                        className="view-details-btn"
                        onClick={() => navigate(`/work/${project.id}`)}
                      >
                        View Details →
                      </button>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="project-content">
                    <div className="project-meta">
                      <span className="project-date">📅 {project.date}</span>
                      <span className="project-location">📍 {project.location}</span>
                    </div>

                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>

                    {/* Project Tags */}
                    <div className="project-tags">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="project-tag">{tag}</span>
                      ))}
                    </div>

                    {/* Impact Metrics */}
                    <div className="project-impact">
                      {Object.entries(project.impact).map(([key, value], index) => (
                        <div key={index} className="impact-item">
                          <span className="impact-icon">✦</span>
                          <span className="impact-text">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-projects">
              <div className="no-projects-icon">🔍</div>
              <h3>No Projects Found</h3>
              <p>Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* Partners Section */}
      <section className="work-partners-section">
        <div className="work-container">
          <h2 className="section-title centered">Our Partners</h2>
          <p className="section-subtitle centered">
            Collaborating with organizations to maximize our conservation impact
          </p>
          <div className="partners-grid">
            <div className="partner-card">🌍 Ministry of Environment</div>
            <div className="partner-card">🏛️ Local Universities</div>
            <div className="partner-card">🤝 Community Organizations</div>
            <div className="partner-card">🔬 Research Institutes</div>
            <div className="partner-card">🏢 Corporate Sponsors</div>
            <div className="partner-card">🌊 Marine Conservation NGOs</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="work-cta-section">
        <div className="work-container">
          <div className="cta-content">
            <h2>Want to Support Our Work?</h2>
            <p>Every contribution helps us protect Tunisia's precious marine ecosystems</p>
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
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Work;