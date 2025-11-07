import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Forms.css";

function NewsletterSignup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    interests: []
  });
  const [submitted, setSubmitted] = useState(false);

  const interestOptions = [
    'Beach Cleanups', 'Marine Research', 'Conservation News',
    'Volunteer Opportunities', 'Educational Content', 'Events'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        interests: checked
          ? [...formData.interests, value]
          : formData.interests.filter(item => item !== value)
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter Signup:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="form-page">
        <div className="form-container-small">
          <div className="success-message-card">
            <div className="success-icon">✓</div>
            <h2>Welcome to Our Community!</h2>
            <p>You've successfully subscribed to our newsletter.</p>
            <p>Check your email for a confirmation message.</p>
            <button onClick={() => navigate('/')} className="btn-primary">
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="form-page">
      <div className="form-container-small">
        <div className="form-header">
          <button className="back-btn" onClick={() => navigate(-1)}>
            ← Back
          </button>
          <h1>Subscribe to Our Newsletter</h1>
          <p>Stay updated with our latest conservation efforts and opportunities</p>
        </div>

        <form onSubmit={handleSubmit} className="newsletter-signup-form">
          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label>What interests you? (Select all that apply)</label>
            <div className="checkbox-grid">
              {interestOptions.map((interest) => (
                <label key={interest} className="checkbox-label">
                  <input
                    type="checkbox"
                    name="interests"
                    value={interest}
                    checked={formData.interests.includes(interest)}
                    onChange={handleChange}
                  />
                  <span>{interest}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-primary-form full-width">
              Subscribe Now
            </button>
          </div>

          <p className="form-disclaimer">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </form>
      </div>
    </div>
  );
}

export default NewsletterSignup;