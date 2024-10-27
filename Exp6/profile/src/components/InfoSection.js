import React from 'react';

function InfoSection() {
  return (
    <section id="info-section" className="py-5">
      <div className="container">
        {/* About Section */}
        <div className="row mb-5">
          <div className="col-md-6">
            <h2>About Me</h2>
            <p>I am a passionate full stack developer with experience in building web applications using modern technologies like React, Node.js, and Python. My focus is on creating scalable, efficient, and visually appealing applications.</p>
          </div>
          <div className="col-md-6">
            <h2>Education</h2>
            <ul>
              <li>B.E in Information Technology - Vivekanand Educational Society's Institute of Technology</li>
            </ul>
          </div>
        </div>

        {/* Skills Section */}
        <div className="section-separator mb-5"></div> {/* Separator for styling */}

        <div className="row mb-5">
          <h2 className="text-center mb-5">My Skills</h2>
          <div className="col-md-4">
            <div className="card info-card p-3 mb-4">
              <div className="card-body">
                <h5 className="card-title">Frontend Development</h5>
                <p className="card-text">HTML, CSS, JavaScript, React, Bootstrap</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card info-card p-3 mb-4">
              <div className="card-body">
                <h5 className="card-title">Backend Development</h5>
                <p className="card-text">Node.js, Express.js, Python, Django</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card info-card p-3 mb-4">
              <div className="card-body">
                <h5 className="card-title">Databases & Tools</h5>
                <p className="card-text">MySQL, MongoDB, Git, Docker</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="section-separator mb-5"></div> {/* Another separator for styling */}

        <div className="row">
          <div className="col-md-6">
            <h2>Contact Information</h2>
            <div className="contact-info">
              <p><strong>Email:</strong> <a href="mailto:chiragchoudhary170@gmail.com">chiragchoudhary170@gmail.com</a></p>
              <p><strong>Phone:</strong> +91 (234) 567-890</p>
			  <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/chirag" target="_blank" rel="noopener noreferrer">linkedin.com/in/chirag</a></p>
			  </div>
          </div>
          <div className="col-md-6">
            <h2>Send a Message</h2>
            <form className="form-bg">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input type="text" className="form-control" id="name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Your Email</label>
                <input type="email" className="form-control" id="email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="3" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
