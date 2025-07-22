import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    technologies: '',
    imageUrl: '',
    projectUrl: '',
    githubUrl: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject({
      ...newProject,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProjects([...projects, { 
      ...newProject, 
      id: Date.now(),
      date: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
    }]);
    setNewProject({
      title: '',
      description: '',
      technologies: '',
      imageUrl: '',
      projectUrl: '',
      githubUrl: ''
    });
    setShowUploadForm(false);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-decoration">Featured Projects</span>
          </h2>
          <p className="section-description">
            Here are some of my technical implementations. Each project demonstrates problem-solving abilities and technical expertise.
          </p>
        </div>
        
        <div className="projects-actions">
          <button 
            className={`add-project-btn ${showUploadForm ? 'cancel' : ''}`}
            onClick={() => setShowUploadForm(!showUploadForm)}
          >
            {showUploadForm ? (
              <>
                <i className="fas fa-times"></i> Cancel
              </>
            ) : (
              <>
                <i className="fas fa-plus"></i> Add Project
              </>
            )}
          </button>
        </div>

        {showUploadForm && (
          <div className="upload-form-container">
            <div className="form-header">
              <h3>Add New Project</h3>
              <p>Showcase your work to potential employers</p>
            </div>
            <form onSubmit={handleSubmit} className="upload-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="title">Project Title *</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={newProject.title}
                    onChange={handleInputChange}
                    required
                    placeholder="E-commerce Platform"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="technologies">Technologies *</label>
                  <input
                    type="text"
                    id="technologies"
                    name="technologies"
                    value={newProject.technologies}
                    onChange={handleInputChange}
                    required
                    placeholder="React, Node.js, MongoDB"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="description">Project Description *</label>
                <textarea
                  id="description"
                  name="description"
                  value={newProject.description}
                  onChange={handleInputChange}
                  required
                  placeholder="Describe the project's purpose and your contributions..."
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="imageUrl">Image URL *</label>
                  <input
                    type="url"
                    id="imageUrl"
                    name="imageUrl"
                    value={newProject.imageUrl}
                    onChange={handleInputChange}
                    required
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="projectUrl">Live URL *</label>
                  <input
                    type="url"
                    id="projectUrl"
                    name="projectUrl"
                    value={newProject.projectUrl}
                    onChange={handleInputChange}
                    required
                    placeholder="https://example.com"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="githubUrl">GitHub URL</label>
                <input
                  type="url"
                  id="githubUrl"
                  name="githubUrl"
                  value={newProject.githubUrl}
                  onChange={handleInputChange}
                  placeholder="https://github.com/username/project"
                />
              </div>
              
              <div className="form-actions">
                <button type="submit" className="submit-btn">
                  <i className="fas fa-cloud-upload-alt"></i> Add Project
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="projects-grid">
          {projects.length > 0 ? (
            projects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-image-container">
                  <div className="project-image">
                    <img src={project.imageUrl} alt={project.title} />
                  </div>
                  <div className="project-date">{project.date}</div>
                </div>
                <div className="project-content">
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    <div className="project-tech">
                      {project.technologies.split(',').map((tech, index) => (
                        <span key={index} className="tech-tag">{tech.trim()}</span>
                      ))}
                    </div>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-links">
                    <a 
                      href={project.projectUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-link"
                    >
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="project-link secondary"
                      >
                        <i className="fab fa-github"></i> View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-projects">
              <div className="no-projects-icon">
                <i className="fas fa-folder-open"></i>
              </div>
              <h3>No Projects Added Yet</h3>
              <p>Showcase your best work to potential employers</p>
              <button 
                className="no-projects-btn"
                onClick={() => setShowUploadForm(true)}
              >
                <i className="fas fa-plus"></i> Add Your First Project
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;