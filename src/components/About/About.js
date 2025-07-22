import React from 'react';
import './About.css';
import headshot from '../../assets/jhheadshot.jpg'; // 1. Import the image

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">
          <span className="title-decoration">About Me</span>
        </h2>
        <div className="about-content">
          <div className="about-image">
            <div className="profile-image-container">
              {/* 2. Replace the old div with an img tag */}
              <img src={headshot} alt="JH Headshot" className="profile-image" />
            </div>
          </div>
          <div className="about-text">
          <p className="intro-text">
  <strong>I help businesses achieve their goals by architecting and deploying scalable cloud solutions.</strong>
</p>
<p className="description">
  As a U.S. Army veteran with hands-on experience in both full-stack development and DevOps on AWS & GCP, I bridge the gap between complex technical capabilities and tangible business results.
</p>

            <p className="description">
              I architect and optimize cloud infrastructure (AWS/GCP) while translating technical capabilities into business results. My hybrid experience combines:
            </p>
            <ul className="experience-list">
              <li>
                <div className="list-icon">💻</div>
                <div>
                  <strong>Full-Stack Development</strong>: Deployed scalable apps using JavaScript/React with 30% faster deployments via AWS EC2/S3 & Google Cloud Run
                </div>
              </li>
              <li>
                <div className="list-icon">⚙️</div>
                <div>
                  <strong>DevOps Automation</strong>: Built CI/CD pipelines and monitoring systems to enhance reliability
                </div>
              </li>
              <li>
                <div className="list-icon">🤝</div>
                <div>
                  <strong>Technical Sales Insight</strong>: 6 months bridging client needs with technical solutions at ERA Solutions
                </div>
              </li>
              <li>
                <div className="list-icon">🧭</div>
                <div>
                  <strong>Project Management</strong>: Led 60+ technical and cross-functional projects with PMP-level practices in scope, schedule, and stakeholder communication
                </div>
              </li>
              <li>
                <div className="list-icon">🎖️</div>
                <div>
                  <strong>Military Leadership</strong>: Managed $2M+ in mission-critical systems with Secret Security Clearance
                </div>
              </li>
            </ul>

            <p className="differentiator-title">
              What sets me apart:
            </p>
            <ul className="differentiator-list">
              <li>
                <span className="checkmark">✓</span>
                <strong>Cloud-to-business translator</strong> - Explain technical value in ROI terms
              </li>
              <li>
                <span className="checkmark">✓</span>
                <strong>Pressure-tested problem solver</strong> - Army-honed discipline for critical systems
              </li>
              <li>
                <span className="checkmark">✓</span>
                <strong>Continuous learner</strong> - Pursuing AWS/Google Cloud certs + Business Marketing degree
              </li>
            </ul>

            <p className="closing-text">
              Currently exploring AI/ML deployment strategies to enhance cloud solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
