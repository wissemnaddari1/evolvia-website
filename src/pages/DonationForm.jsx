import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Forms.css";

function DonationForm() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [donationData, setDonationData] = useState({
    // Donation Details
    amount: '',
    donationType: 'one-time',
    frequency: 'monthly',
    customAmount: '',
    
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    
    // Payment Information
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    
    // Additional
    anonymous: false,
    newsletter: true,
    dedication: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [processing, setProcessing] = useState(false);

  const donationAmounts = [
    { amount: 25, impact: 'Clean 100m of coastline' },
    { amount: 50, impact: 'Plant 50 coral fragments' },
    { amount: 100, impact: 'Fund marine research for a week' },
    { amount: 250, impact: 'Sponsor an education program' }
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDonationData({
      ...donationData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const formatCardNumber = (value) => {
    const cleaned = value.replace(/\s/g, '');
    const formatted = cleaned.match(/.{1,4}/g)?.join(' ') || cleaned;
    return formatted;
  };

  const formatExpiryDate = (value) => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length >= 2) {
      return cleaned.slice(0, 2) + '/' + cleaned.slice(2, 4);
    }
    return cleaned;
  };

  const handleCardNumberChange = (e) => {
    const formatted = formatCardNumber(e.target.value.replace(/\s/g, '').slice(0, 16));
    setDonationData({ ...donationData, cardNumber: formatted });
  };

  const handleExpiryChange = (e) => {
    const formatted = formatExpiryDate(e.target.value);
    setDonationData({ ...donationData, expiryDate: formatted });
  };

  const validateStep = (currentStep) => {
    if (currentStep === 1) {
      return donationData.amount || donationData.customAmount;
    }
    if (currentStep === 2) {
      return donationData.firstName && donationData.lastName && donationData.email;
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      console.log('Donation Submitted:', donationData);
      setProcessing(false);
      setSubmitted(true);

      // Redirect after success
      setTimeout(() => {
        navigate('/');
      }, 4000);
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="form-page donation-page">
        <div className="form-container">
          <div className="success-message-card donation-success">
            <div className="success-icon">💚</div>
            <h2>Thank You for Your Generosity!</h2>
            <p>Your donation of ${donationData.amount || donationData.customAmount} has been received.</p>
            <p>You're making a real difference in protecting our oceans!</p>
            <div className="donation-receipt">
              <p><strong>Transaction ID:</strong> #{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
              <p>A receipt has been sent to {donationData.email}</p>
            </div>
            <button onClick={() => navigate('/')} className="btn-primary">
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="form-page donation-page">
      <div className="form-container donation-form-container">
        <div className="form-header donation-header">
          <button className="back-btn" onClick={() => navigate(-1)}>
            ← Back
          </button>
          <h1>Make a Donation</h1>
          <p>Your contribution helps protect Tunisia's marine ecosystems</p>
        </div>

        {/* Progress Steps */}
        <div className="donation-progress">
          <div className={`progress-step ${step >= 1 ? 'active' : ''}`}>
            <div className="step-number">1</div>
            <div className="step-label">Amount</div>
          </div>
          <div className={`progress-line ${step >= 2 ? 'active' : ''}`}></div>
          <div className={`progress-step ${step >= 2 ? 'active' : ''}`}>
            <div className="step-number">2</div>
            <div className="step-label">Details</div>
          </div>
          <div className={`progress-line ${step >= 3 ? 'active' : ''}`}></div>
          <div className={`progress-step ${step >= 3 ? 'active' : ''}`}>
            <div className="step-number">3</div>
            <div className="step-label">Payment</div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="donation-form">
          {/* Step 1: Donation Amount */}
          {step === 1 && (
            <div className="form-step animate-fade-in">
              <h3 className="section-title">Choose Your Donation Amount</h3>
              
              {/* Donation Type */}
              <div className="donation-type-selector">
                <label className={`type-option ${donationData.donationType === 'one-time' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="donationType"
                    value="one-time"
                    checked={donationData.donationType === 'one-time'}
                    onChange={handleChange}
                  />
                  <span>One-Time</span>
                </label>
                <label className={`type-option ${donationData.donationType === 'monthly' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="donationType"
                    value="monthly"
                    checked={donationData.donationType === 'monthly'}
                    onChange={handleChange}
                  />
                  <span>Monthly</span>
                </label>
              </div>

              {/* Amount Options */}
              <div className="amount-grid">
                {donationAmounts.map((option) => (
                  <label 
                    key={option.amount}
                    className={`amount-option ${donationData.amount === option.amount.toString() ? 'selected' : ''}`}
                  >
                    <input
                      type="radio"
                      name="amount"
                      value={option.amount}
                      checked={donationData.amount === option.amount.toString()}
                      onChange={handleChange}
                    />
                    <div className="amount-value">${option.amount}</div>
                    <div className="amount-impact">{option.impact}</div>
                  </label>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="form-group custom-amount">
                <label htmlFor="customAmount">Or Enter Custom Amount</label>
                <div className="amount-input-wrapper">
                  <span className="currency-symbol">$</span>
                  <input
                    type="number"
                    id="customAmount"
                    name="customAmount"
                    value={donationData.customAmount}
                    onChange={handleChange}
                    placeholder="Enter amount"
                    min="1"
                  />
                </div>
              </div>

              <button 
                type="button" 
                onClick={nextStep} 
                className="btn-primary-form full-width"
                disabled={!donationData.amount && !donationData.customAmount}
              >
                Continue
              </button>
            </div>
          )}

          {/* Step 2: Personal Information */}
          {step === 2 && (
            <div className="form-step animate-fade-in">
              <h3 className="section-title">Your Information</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={donationData.firstName}
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
                    value={donationData.lastName}
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
                    value={donationData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={donationData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="country">Country *</label>
                <select
                  id="country"
                  name="country"
                  value={donationData.country}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select country</option>
                  <option value="TN">Tunisia</option>
                  <option value="US">United States</option>
                  <option value="GB">United Kingdom</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                  <option value="CA">Canada</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label className="checkbox-label-inline">
                  <input
                    type="checkbox"
                    name="anonymous"
                    checked={donationData.anonymous}
                    onChange={handleChange}
                  />
                  <span>Make my donation anonymous</span>
                </label>
              </div>

              <div className="form-group">
                <label className="checkbox-label-inline">
                  <input
                    type="checkbox"
                    name="newsletter"
                    checked={donationData.newsletter}
                    onChange={handleChange}
                  />
                  <span>Subscribe to newsletter for updates</span>
                </label>
              </div>

              <div className="form-actions">
                <button type="button" onClick={prevStep} className="btn-secondary-form">
                  Back
                </button>
                <button type="button" onClick={nextStep} className="btn-primary-form">
                  Continue to Payment
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Payment Information */}
          {step === 3 && (
            <div className="form-step animate-fade-in">
              <h3 className="section-title">Payment Information</h3>
              
              <div className="payment-summary">
                <div className="summary-row">
                  <span>Donation Amount:</span>
                  <strong>${donationData.amount || donationData.customAmount}</strong>
                </div>
                <div className="summary-row">
                  <span>Type:</span>
                  <strong>{donationData.donationType === 'monthly' ? 'Monthly Recurring' : 'One-Time'}</strong>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="cardName">Cardholder Name *</label>
                <input
                  type="text"
                  id="cardName"
                  name="cardName"
                  value={donationData.cardName}
                  onChange={handleChange}
                  placeholder="Name on card"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="cardNumber">Card Number *</label>
                <div className="card-input-wrapper">
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={donationData.cardNumber}
                    onChange={handleCardNumberChange}
                    placeholder="1234 5678 9012 3456"
                    maxLength="19"
                    required
                  />
                  <div className="card-icons">
                    <span>💳</span>
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="expiryDate">Expiry Date *</label>
                  <input
                    type="text"
                    id="expiryDate"
                    name="expiryDate"
                    value={donationData.expiryDate}
                    onChange={handleExpiryChange}
                    placeholder="MM/YY"
                    maxLength="5"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cvv">CVV *</label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    value={donationData.cvv}
                    onChange={(e) => setDonationData({...donationData, cvv: e.target.value.slice(0, 4)})}
                    placeholder="123"
                    maxLength="4"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Add a Message (Optional)</label>
                <textarea
                  id="message"
                  name="message"
                  value={donationData.message}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Share why you're supporting marine conservation..."
                ></textarea>
              </div>

              <div className="security-notice">
                <span className="security-icon">🔒</span>
                <p>Your payment information is secure and encrypted</p>
              </div>

              <div className="form-actions">
                <button type="button" onClick={prevStep} className="btn-secondary-form">
                  Back
                </button>
                <button 
                  type="submit" 
                  className="btn-primary-form"
                  disabled={processing}
                >
                  {processing ? 'Processing...' : `Donate $${donationData.amount || donationData.customAmount}`}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default DonationForm;