import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for your message! I will respond within 24 hours.'
    });
    
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">
          <span className="title-decoration">Get In Touch</span>
        </h2>
        <p className="section-description">
          Interested in working together or have questions? Reach out and I'll respond promptly.
        </p>
        
        <div className="contact-container">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="info-content">
                  <h3>Email</h3>
                  <a href="mailto:dankadouken2222@gmail.com" className="info-link">
                    dankadouken2222@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="info-content">
                  <h3>Location</h3>
                  <p>Remote - United States</p>
                </div>
              </div>
            </div>
            
            <div className="social-card">
              <h3 className="social-title">Connect With Me</h3>
              <div className="social-icons">
                <a href="#" className="social-icon" title="LinkedIn" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="social-icon" title="GitHub" aria-label="GitHub">
                  <i className="fab fa-github"></i>
                </a>
                <a href="#" className="social-icon" title="Twitter" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            {formStatus.submitted && formStatus.success ? (
              <div className="success-message">
                <div className="success-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <p className="success-text">{formStatus.message}</p>
                <button 
                  className="back-btn"
                  onClick={() => setFormStatus({...formStatus, submitted: false})}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Smith"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Your Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-btn">
                  <span>Send Message</span>
                  <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;