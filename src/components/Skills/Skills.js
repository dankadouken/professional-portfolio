import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "fas fa-code",
      skills: [
        { name: "HTML5", level: 90, icon: "fab fa-html5" },
        { name: "CSS3", level: 85, icon: "fab fa-css3-alt" },
        { name: "JavaScript", level: 90, icon: "fab fa-js-square" },
        { name: "React", level: 85, icon: "fab fa-react" },
        { name: "WordPress", level: 80, icon: "fab fa-wordpress" }
      ]
    },
    {
      title: "Backend Development",
      icon: "fas fa-server",
      skills: [
        { name: "Node.js", level: 75, icon: "fab fa-node-js" },
        { name: "MySQL", level: 80, icon: "fas fa-database" },
        { name: "RESTful APIs", level: 85, icon: "fas fa-exchange-alt" }
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: "fas fa-cloud",
      skills: [
        { name: "AWS (EC2, S3)", level: 85, icon: "fab fa-aws" },
        { name: "Google Cloud Run", level: 80, icon: "fab fa-google" },
        { name: "CI/CD Pipelines", level: 75, icon: "fas fa-sync-alt" },
        { name: "Docker", level: 70, icon: "fab fa-docker" }
      ]
    },
    {
      title: "Tools & Methodologies",
      icon: "fas fa-tools",
      skills: [
        { name: "Git/GitHub", level: 80, icon: "fab fa-github" },
        { name: "Agile/Scrum", level: 85, icon: "fas fa-tasks" },
        { name: "Jira", level: 80, icon: "fab fa-jira" },
        { name: "Microsoft Office Suite", level: 90, icon: "fas fa-file-alt" }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-decoration">Technical Proficiency</span>
          </h2>
          <p className="section-description">
            My expertise across the full technology stack and development lifecycle
          </p>
        </div>
        
        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="category-header">
                <div className="category-icon">
                  <i className={category.icon}></i>
                </div>
                <h3 className="category-title">{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <div className="skill-name">
                        <i className={`${skill.icon} skill-icon`}></i>
                        {skill.name}
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ 
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, #2563eb, ${getProgressColor(skill.level)})`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  function getProgressColor(level) {
    if (level >= 85) return '#1e40af'; // Dark blue for expert
    if (level >= 70) return '#3b82f6'; // Medium blue for proficient
    return '#93c5fd'; // Light blue for intermediate
  }
};

export default Skills;