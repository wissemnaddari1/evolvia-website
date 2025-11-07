import { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import "./Pages.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        setFormStatus('');
      }, 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email Us",
      details: "contact@evolvia.org",
      link: "mailto:contact@evolvia.org"
    },
    {
      icon: "📞",
      title: "Call Us",
      details: "+216 22 345 678",
      link: "tel:+21622345678"
    },
    {
      icon: "📍",
      title: "Visit Us",
      details: "Gulf of Gabès, Tunisia",
      link: "#"
    },
    {
      icon: "🕐",
      title: "Working Hours",
      details: "Mon - Fri: 9AM - 6PM",
      link: "#"
    }
  ];

  const socialMedia = [
    { 
      name: "Facebook", 
      icon: <FaFacebookF />, 
      link: "https://facebook.com/evolvia",
      color: "#1877F2"
    },
    { 
      name: "Instagram", 
      icon: <FaInstagram />, 
      link: "https://instagram.com/evolvia",
      color: "#E4405F"
    },
    { 
      name: "Twitter", 
      icon: <FaTwitter />, 
      link: "https://twitter.com/evolvia",
      color: "#1DA1F2"
    },
    { 
      name: "LinkedIn", 
      icon: <FaLinkedinIn />, 
      link: "https://linkedin.com/company/evolvia",
      color: "#0077B5"
    }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>
        <div className="contact-hero-content">
          <h1 className="contact-hero-title">Get In Touch</h1>
          <p className="contact-hero-subtitle">
            We'd love to hear from you. Let's start a conversation about protecting our oceans.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info-section">
        <div className="contact-container">
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <a 
                key={index} 
                href={info.link}
                className="contact-info-card"
              >
                <div className="contact-info-icon">{info.icon}</div>
                <h3 className="contact-info-title">{info.title}</h3>
                <p className="contact-info-details">{info.details}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="contact-container">
          <div className="contact-content-grid">
            {/* Form */}
            <div className="contact-form-wrapper">
              <h2 className="section-title">Send Us a Message</h2>
              <p className="section-description">
                Have a question or want to get involved? Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+216 XX XXX XXX"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="volunteer">Volunteer Opportunity</option>
                      <option value="donation">Make a Donation</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="general">General Question</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    placeholder="Tell us how we can help..."
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="form-submit-btn"
                  disabled={formStatus === 'sending'}
                >
                  {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                </button>

                {formStatus === 'success' && (
                  <div className="form-success-message">
                    ✓ Thank you! Your message has been sent successfully.
                  </div>
                )}
              </form>
            </div>

            {/* Sidebar Info */}
            <div className="contact-sidebar">
              <div className="contact-sidebar-card">
                <h3>Why Contact Us?</h3>
                <ul className="contact-reasons">
                  <li>🌊 Join our cleanup initiatives</li>
                  <li>🤝 Partner with us on projects</li>
                  <li>💚 Make a donation</li>
                  <li>📰 Media inquiries</li>
                  <li>🎓 Educational programs</li>
                  <li>💼 Career opportunities</li>
                </ul>
              </div>

              <div className="contact-sidebar-card social-card">
                <h3>Follow Our Journey</h3>
                <p>Stay connected and see our impact in real-time</p>
                <div className="social-media-links">
                  {socialMedia.map((social, index) => (
                    <a 
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      aria-label={social.name}
                      style={{ '--social-color': social.color }}
                    >
                      <span className="social-icon">{social.icon}</span>
                      <span className="social-name">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="contact-sidebar-card emergency-card">
                <div className="emergency-icon">⚠️</div>
                <h3>Emergency Contact</h3>
                <p>Report environmental emergencies or marine life in distress</p>
                <a href="tel:+21622345678" className="emergency-btn">
                  Call Emergency Line
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="contact-map-section">
        <div className="map-placeholder">
          <div className="map-overlay">
            <h3>📍 Gulf of Gabès, Tunisia</h3>
            <p>Our main area of conservation work</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contact-faq-section">
        <div className="contact-container">
          <h2 className="section-title centered">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How can I volunteer?</h3>
              <p>Visit our "Get Involved" page to see current volunteer opportunities and sign up for upcoming events.</p>
            </div>
            <div className="faq-item">
              <h3>Where do donations go?</h3>
              <p>100% of donations support our marine conservation projects, equipment, and educational programs in Tunisia.</p>
            </div>
            <div className="faq-item">
              <h3>Do you offer educational programs?</h3>
              <p>Yes! We partner with schools and communities to provide marine conservation education and workshops.</p>
            </div>
            <div className="faq-item">
              <h3>How can organizations partner with you?</h3>
              <p>Contact us through the form above with "Partnership Inquiry" to discuss collaboration opportunities.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;