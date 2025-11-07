import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Forms.css";

function VolunteerForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    location: '',
    availability: '',
    experience: '',
    skills: [],
    interests: [],
    motivation: '',
    emergencyContact: '',
    emergencyPhone: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const skillOptions = [
    'Marine Biology', 'Diving', 'Photography', 'Writing',
    'Social Media', 'Teaching', 'Research', 'Event Planning',
    'Graphic Design', 'Translation', 'First Aid', 'Leadership'
  ];

  const interestAreas = [
    'Beach Cleanups', 'Marine Research', 'Education Programs',
    'Diving Expeditions', 'Community Outreach', 'Social Media',
    'Event Organization', 'Data Collection'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      const array = name === 'skills' ? formData.skills : formData.interests;
      setFormData({
        ...formData,
        [name]: checked
          ? [...array, value]
          : array.filter(item => item !== value)
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Volunteer Form Submitted:', formData);
    setSubmitted(true);
    
    // Simulate API call
    setTimeout(() => {
      navigate('/involved');
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="form-page">
        <div className="form-container">
          <div className="success-message-card">
            <div className="success-icon">✓</div>
            <h2>Application Submitted Successfully!</h2>
            <p>Thank you for your interest in volunteering with Evolvia!</p>
            <p>We'll review your application and get back to you within 3-5 business days.</p>
            <button onClick={() => navigate('/involved')} className="btn-primary">
              Back to Get Involved
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="form-page">
      <div className="form-container">
        <div className="form-header">
          <button className="back-btn" onClick={() => navigate(-1)}>
            ← Back
          </button>
          <h1>Volunteer Application Form</h1>
          <p>Join our team of dedicated volunteers making a difference</p>
        </div>

        <form onSubmit={handleSubmit} className="volunteer-form">
          {/* Personal Information */}
          <div className="form-section">
            <h3 className="section-title">Personal Information</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="age">Age</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  min="16"
                />
              </div>
              <div className="form-group">
                <label htmlFor="location">Location (City) *</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          {/* Availability & Experience */}
          <div className="form-section">
            <h3 className="section-title">Availability & Experience</h3>
            <div className="form-group">
              <label htmlFor="availability">Weekly Availability *</label>
              <select
                id="availability"
                name="availability"
                value={formData.availability}
                onChange={handleChange}
                required
              >
                <option value="">Select availability</option>
                <option value="1-5">1-5 hours per week</option>
                <option value="5-10">5-10 hours per week</option>
                <option value="10-15">10-15 hours per week</option>
                <option value="15+">15+ hours per week</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="experience">Previous Volunteer Experience</label>
              <textarea
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                rows="4"
                placeholder="Tell us about your previous volunteer experience..."
              ></textarea>
            </div>
          </div>

          {/* Skills & Interests */}
          <div className="form-section">
            <h3 className="section-title">Skills & Interests</h3>
            <div className="form-group">
              <label>Skills (Select all that apply)</label>
              <div className="checkbox-grid">
                {skillOptions.map((skill) => (
                  <label key={skill} className="checkbox-label">
                    <input
                      type="checkbox"
                      name="skills"
                      value={skill}
                      checked={formData.skills.includes(skill)}
                      onChange={handleChange}
                    />
                    <span>{skill}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label>Areas of Interest (Select all that apply)</label>
              <div className="checkbox-grid">
                {interestAreas.map((interest) => (
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
          </div>

          {/* Motivation */}
          <div className="form-section">
            <h3 className="section-title">Tell Us About Yourself</h3>
            <div className="form-group">
              <label htmlFor="motivation">Why do you want to volunteer with Evolvia? *</label>
              <textarea
                id="motivation"
                name="motivation"
                value={formData.motivation}
                onChange={handleChange}
                rows="6"
                required
                placeholder="Share your motivation and what you hope to contribute..."
              ></textarea>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="form-section">
            <h3 className="section-title">Emergency Contact</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="emergencyContact">Emergency Contact Name *</label>
                <input
                  type="text"
                  id="emergencyContact"
                  name="emergencyContact"
                  value={formData.emergencyContact}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="emergencyPhone">Emergency Contact Phone *</label>
                <input
                  type="tel"
                  id="emergencyPhone"
                  name="emergencyPhone"
                  value={formData.emergencyPhone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-actions">
            <button type="button" onClick={() => navigate(-1)} className="btn-secondary-form">
              Cancel
            </button>
            <button type="submit" className="btn-primary-form">
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default VolunteerForm;