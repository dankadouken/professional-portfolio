import React from 'react';
import './About.css';
import headshot from '../../assets/jhheadshot.jpg';

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
              <img src={headshot} alt="JH Headshot" className="profile-image" />
            </div>
          </div>
          <div className="about-text">
            <p className="intro-text">
              <strong>I help businesses achieve their goals by architecting and deploying scalable cloud solutions.</strong>
            </p>
            <p className="description">
              As a U.S. Army veteran with hands-on experience in both full-stack development and DevOps on AWS & GCP, I bridge the gap between complex technical capabilities and tangible business results. My hybrid experience combines:
            </p>
            <ul className="experience-list">
              <li>
                <div className="list-icon">💻</div>
                <div>
                  <strong>Full-Stack Development</strong>: Deployed scalable apps using JavaScript/React with 30% faster deployments via AWS EC2/S3 & Google Cloud Run.
                </div>
              </li>
              <li>
                <div className="list-icon">⚙️</div>
                <div>
                  <strong>DevOps Automation</strong>: Built CI/CD pipelines and monitoring systems to enhance reliability.
                </div>
              </li>
              <li>
                <div className="list-icon">👨‍🏫</div>
                <div>
                  <strong>MySQL Instructor</strong>: Taught database fundamentals, query optimization, and schema design, simplifying complex concepts for diverse learners.
                </div>
              </li>
              <li>
                <div className="list-icon">🤝</div>
                <div>
                  <strong>Technical Sales Insight</strong>: 6 months bridging client needs with technical solutions at ERA Solutions.
                </div>
              </li>
              <li>
                <div className="list-icon">🧭</div>
                <div>
                  <strong>Project Management</strong>: Led 60+ technical and cross-functional projects with PMP-level practices in scope, schedule, and stakeholder communication.
                </div>
              </li>
              <li>
                <div className="list-icon">🎖️</div>
                <div>
                  <strong>Military Leadership</strong>: Managed $2M+ in mission-critical systems with Secret Security Clearance.
                </div>
              </li>
            </ul>

            {/* --- NEW SECTION ADDED HERE --- */}
            <h3 className="section-subtitle">Entrepreneurial Ventures</h3>
            <ul className="experience-list">
              <li>
                <div className="list-icon">🚀</div>
                <div>
                  <strong>WNP Web Development Brokerage</strong> – Scaled a national matchmaking platform linking businesses with vetted developers; managed 50+ projects with 100% client satisfaction and trained 15+ military veterans in tech.
                </div>
              </li>
              <li>
                <div className="list-icon">🏠</div>
                <div>
                  <strong>WNP Real Estate Investing</strong> – Acquired and managed distressed properties in DFW; streamlined CRM processes, negotiated deals with integrity, and built a transparent real estate brand.
                </div>
              </li>
            </ul>
            {/* --- END OF NEW SECTION --- */}

            <p className="differentiator-title">
              What sets me apart:
            </p>
            <ul className="differentiator-list">
              <li>
                <span className="checkmark">✓</span>
                <strong>Cloud-to-business translator</strong> - Explain technical value in ROI terms.
              </li>
              <li>
                <span className="checkmark">✓</span>
                <strong>Pressure-tested problem solver</strong> - Army-honed discipline for critical systems.
              </li>
              <li>
                <span className="checkmark">✓</span>
                <strong>Continuous learner</strong> - Pursuing AWS/Google Cloud certs + Business Marketing degree.
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
