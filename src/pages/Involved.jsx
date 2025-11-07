import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Pages.css";

function Involved() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  const involvementOptions = [
    {
      id: 'volunteer',
      icon: '🤝',
      title: 'Become a Volunteer',
      description: 'Join our team of dedicated volunteers and make a direct impact on marine conservation.',
      benefits: [
        'Participate in beach cleanups',
        'Assist in research programs',
        'Lead educational workshops',
        'Join diving expeditions'
      ],
      cta: 'Sign Up to Volunteer',
      link: '/volunteer'
    },
    {
      id: 'donate',
      icon: '💚',
      title: 'Make a Donation',
      description: 'Your financial support helps us purchase equipment, fund research, and expand our reach.',
      benefits: [
        'Tax-deductible contributions',
        'Monthly giving options',
        'Transparent fund usage',
        'Regular impact reports'
      ],
      cta: 'Donate Now',
      link: '/donate'
    },
    {
      id: 'partner',
      icon: '🤝',
      title: 'Corporate Partnership',
      description: 'Partner with us to demonstrate your commitment to environmental sustainability.',
      benefits: [
        'CSR program integration',
        'Employee engagement activities',
        'Brand visibility',
        'Custom partnership packages'
      ],
      cta: 'Become a Partner',
      link: '/contact'
    },
    {
      id: 'ambassador',
      icon: '🌟',
      title: 'Become an Ambassador',
      description: 'Spread awareness and inspire others to join our conservation mission.',
      benefits: [
        'Exclusive training sessions',
        'Ambassador toolkit',
        'Social media support',
        'Networking opportunities'
      ],
      cta: 'Apply Now',
      link: '/volunteer'
    }
  ];

  const impactStats = [
    { number: '500+', label: 'Active Volunteers', icon: '👥' },
    { number: '$50K', label: 'Raised This Year', icon: '💰' },
    { number: '25', label: 'Partner Organizations', icon: '🏢' },
    { number: '1000+', label: 'Lives Impacted', icon: '❤️' }
  ];

  const volunteerRoles = [
    {
      title: 'Beach Cleanup Coordinator',
      time: '4-8 hours/month',
      location: 'Coastal areas',
      description: 'Organize and lead beach cleanup events'
    },
    {
      title: 'Marine Research Assistant',
      time: '10-15 hours/month',
      location: 'Field & Lab',
      description: 'Support data collection and analysis'
    },
    {
      title: 'Education Program Leader',
      time: '5-10 hours/month',
      location: 'Schools',
      description: 'Teach students about marine conservation'
    },
    {
      title: 'Social Media Volunteer',
      time: '3-5 hours/week',
      location: 'Remote',
      description: 'Create content and engage our online community'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Volunteer since 2024',
      text: 'Being part of Evolvia has been life-changing. I\'ve made amazing friends and learned so much about our oceans.',
      image: '/images/testimonial-1.jpg'
    },
    {
      name: 'Ahmed Ben Ali',
      role: 'Monthly Donor',
      text: 'I love seeing the transparent reports on how my donations are making a real difference in protecting our coast.',
      image: '/images/testimonial-2.jpg'
    }
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    navigate('/newsletter');
  };

  return (
    <div className="involved-page">
      {/* Hero Section */}
      <section className="involved-hero">
        <div className="involved-hero-overlay"></div>
        <div className="involved-hero-content">
          <h1 className="involved-hero-title">Make a Difference Today</h1>
          <p className="involved-hero-subtitle">
            Every action counts. Join us in protecting Tunisia's marine ecosystems and creating lasting change.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="involved-stats-section">
        <div className="involved-container">
          <div className="involved-stats-grid">
            {impactStats.map((stat, index) => (
              <div key={index} className="involved-stat-card">
                <div className="stat-icon-large">{stat.icon}</div>
                <div className="stat-number-large">{stat.number}</div>
                <div className="stat-label-large">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Involvement Options */}
      <section className="involvement-options-section">
        <div className="involved-container">
          <h2 className="section-title centered">Ways to Get Involved</h2>
          <p className="section-subtitle centered">
            Choose the way that works best for you to support our mission
          </p>

          <div className="involvement-grid">
            {involvementOptions.map((option) => (
              <div 
                key={option.id}
                className={`involvement-card ${selectedOption === option.id ? 'selected' : ''}`}
                onClick={() => setSelectedOption(option.id)}
              >
                <div className="involvement-icon">{option.icon}</div>
                <h3 className="involvement-title">{option.title}</h3>
                <p className="involvement-description">{option.description}</p>
                
                <ul className="involvement-benefits">
                  {option.benefits.map((benefit, index) => (
                    <li key={index}>
                      <span className="benefit-check">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>

                <button 
                  className="involvement-cta-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(option.link);
                  }}
                >
                  {option.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Roles */}
      <section className="volunteer-roles-section">
        <div className="involved-container">
          <h2 className="section-title centered">Volunteer Opportunities</h2>
          <p className="section-subtitle centered">
            Find the perfect role that matches your skills and availability
          </p>

          <div className="roles-grid">
            {volunteerRoles.map((role, index) => (
              <div key={index} className="role-card">
                <h3 className="role-title">{role.title}</h3>
                <div className="role-meta">
                  <span className="role-time">⏰ {role.time}</span>
                  <span className="role-location">📍 {role.location}</span>
                </div>
                <p className="role-description">{role.description}</p>
                <button 
                  className="role-apply-btn"
                  onClick={() => navigate('/volunteer')}
                >
                  Apply for This Role
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="involved-container">
          <h2 className="section-title centered">Hear From Our Community</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-quote">"</div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      onError={(e) => { 
                        e.target.style.display = 'none';
                        e.target.parentElement.style.background = 'var(--gradient-ocean)';
                        e.target.parentElement.innerHTML = testimonial.name.charAt(0);
                      }}
                    />
                  </div>
                  <div className="author-info">
                    <div className="author-name">{testimonial.name}</div>
                    <div className="author-role">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="newsletter-section">
        <div className="involved-container">
          <div className="newsletter-card">
            <h2>Stay Connected</h2>
            <p>Subscribe to our newsletter for volunteer opportunities, impact stories, and conservation tips.</p>
            <form className="newsletter-form-large" onSubmit={handleNewsletterSubmit}>
              <input 
                type="email" 
                placeholder="Enter your email address"
                aria-label="Email for newsletter"
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="involved-cta-section">
        <div className="involved-container">
          <div className="cta-content-large">
            <h2>Ready to Make an Impact?</h2>
            <p>Join hundreds of volunteers and supporters protecting our oceans</p>
            <div className="cta-buttons-large">
              <button 
                className="btn-primary-large"
                onClick={() => navigate('/volunteer')}
              >
                Start Volunteering
              </button>
              <button 
                className="btn-secondary-large"
                onClick={() => navigate('/donate')}
              >
                Make a Donation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Involved;