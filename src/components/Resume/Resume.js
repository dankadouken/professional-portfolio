import React from 'react';
import './Resume.css';

const Resume = () => {
  const handleDownload = () => {
    // In a real implementation, this would trigger a PDF download
    alert("Downloading resume...");
  };

  return (
    <section id="resume" className="resume-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-decoration">Professional Journey</span>
          </h2>
          <p className="section-description">
            My career path demonstrating technical leadership and measurable business impact
          </p>
        </div>
        
        <div className="resume-timeline">
          <div className="resume-item">
            <div className="resume-marker"></div>
            <div className="resume-content">
              <div className="resume-header">
                <h3>Cloud Infrastructure Engineer</h3>
                <div className="company-info">
                  <span className="company">ERA Solutions</span>
                  <span className="separator">•</span>
                  <span className="location">Remote</span>
                  <span className="separator">•</span>
                  <span className="duration">March 2024 – February 2025</span>
                </div>
              </div>
              <ul className="responsibilities">
                <li>
                  <span className="highlight">Optimized AWS/GCP infrastructure</span> for 12+ clients, 
                  <span className="highlight"> reducing cloud costs by 22%</span> through right-sizing and automation
                </li>
                <li>
                  <span className="highlight">Implemented CI/CD pipelines</span> that 
                  <span className="highlight"> reduced deployment times by 30%</span> using AWS EC2/S3 and Google Cloud Run
                </li>
                <li>
                  <span className="highlight">Led cross-functional training</span> on cloud best practices, 
                  <span className="highlight"> improving team productivity by 25%</span>
                </li>
                <li>
                  <span className="highlight">Designed scalable architectures</span> that handled 
                  <span className="highlight"> 50% more traffic</span> without performance degradation
                </li>
                <li>
                  <span className="highlight">Collaborated with sales teams</span> to translate technical capabilities into client-facing value propositions
                </li>
              </ul>
            </div>
          </div>
          
          <div className="resume-item">
            <div className="resume-marker"></div>
            <div className="resume-content">
              <div className="resume-header">
                <h3>Technical Solutions Apprentice</h3>
                <div className="company-info">
                  <span className="company">ERA Solutions</span>
                  <span className="separator">•</span>
                  <span className="location">Remote</span>
                  <span className="separator">•</span>
                  <span className="duration">February 2023 – March 2024</span>
                </div>
              </div>
              <ul className="responsibilities">
                <li>
                  <span className="highlight">Developed full-stack applications</span> using JavaScript/React that 
                  <span className="highlight"> processed client data 40% faster</span>
                </li>
                <li>
                  <span className="highlight">Architected cloud solutions</span> serving 
                  <span className="highlight"> 8+ clients simultaneously</span> on AWS/GCP infrastructure
                </li>
                <li>
                  <span className="highlight">Mentored 4 junior developers</span> in Agile methodologies, 
                  <span className="highlight"> improving sprint completion rates by 35%</span>
                </li>
                <li>
                  <span className="highlight">Bridged technical and business teams</span>, helping 
                  <span className="highlight"> close $250K in cloud service contracts</span>
                </li>
                <li>
                  <span className="highlight">Automated reporting workflows</span> that 
                  <span className="highlight"> saved 15 hours/week</span> across projects
                </li>
              </ul>
            </div>
          </div>
          
          <div className="resume-item">
            <div className="resume-marker"></div>
            <div className="resume-content">
              <div className="resume-header">
                <h3>Technical Solutions Specialist</h3>
                <div className="company-info">
                  <span className="company">ERA Solutions / WPConnects</span>
                  <span className="separator">•</span>
                  <span className="location">Remote</span>
                  <span className="separator">•</span>
                  <span className="duration">October 2022 – January 2023</span>
                </div>
              </div>
              <ul className="responsibilities">
                <li>
                  <span className="highlight">Delivered WordPress solutions</span> that 
                  <span className="highlight"> improved client conversion rates by up to 30%</span>
                </li>
                <li>
                  <span className="highlight">Created technical training materials</span> with 
                  <span className="highlight"> 95% positive feedback</span> from 150+ students
                </li>
                <li>
                  <span className="highlight">Reduced website load times by 45%</span> through database optimization
                </li>
                <li>
                  <span className="highlight">Managed Agile projects</span> with 
                  <span className="highlight"> 100% on-time delivery record</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="resume-item">
            <div className="resume-marker"></div>
            <div className="resume-content">
              <div className="resume-header">
                <h3>Logistics Team Leader</h3>
                <div className="company-info">
                  <span className="company">United States Army</span>
                  <span className="separator">•</span>
                  <span className="duration">November 2014 – November 2022</span>
                </div>
              </div>
              <ul className="responsibilities">
                <li>
                  <span className="highlight">Managed $2M+ in mission-critical assets</span> with 
                  <span className="highlight"> 100% operational readiness</span>
                </li>
                <li>
                  <span className="highlight">Led teams of 6-12</span> in high-pressure environments with 
                  <span className="highlight"> Secret Security Clearance</span>
                </li>
                <li>
                  <span className="highlight">Optimized supply chain processes</span> that 
                  <span className="highlight"> reduced costs by 18% annually</span>
                </li>
                <li>
                  <span className="highlight">Implemented data tracking systems</span> that 
                  <span className="highlight"> improved reporting accuracy by 30%</span>
                </li>
                <li>
                  <span className="highlight">Briefed senior officers</span> (C-suite equivalent) on operational risks and solutions
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="resume-cta">
          <button onClick={handleDownload} className="download-btn">
            <i className="fas fa-file-download"></i> Download Full Resume (PDF)
          </button>
          <a href="#contact" className="contact-link">
            <i className="fas fa-paper-plane"></i> Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;