import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="navbar">
        <div className="logo">E-Learn</div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="welcome-section" id="home">
        <h1>Welcome to E-Learn</h1>
        <p>Your ultimate destination for online learning</p>
      </section>

      <section className="courses-section" id="courses">
        <h2>Available Courses</h2>
        <div className="courses-grid">
          <div className="course-card">
            <h3>Web Development</h3>
            <p>Learn to build modern web applications</p>
          </div>
          <div className="course-card">
            <h3>Data Science</h3>
            <p>Master the art of data analysis and visualization</p>
          </div>
          <div className="course-card">
            <h3>Machine Learning</h3>
            <p>Dive into the world of AI and machine learning</p>
          </div>
          <div className="course-card">
            <h3>Mobile Development</h3>
            <p>Create amazing mobile apps for Android and iOS</p>
          </div>
        </div>
      </section>

      <section className="about-section" id="about">
        <h2>About Us</h2>
        <p>
          At E-Learn, we are dedicated to providing top-notch education through
          online courses. Our mission is to empower learners around the world
          with the skills they need to succeed in today's competitive landscape.
        </p>
      </section>

      <section className="contact-section" id="contact">
        <h2>Contact Us</h2>
        <p>If you have any questions, feel free to reach out to us at contact@elearn.com.</p>
      </section>

      <footer>
        <p>&copy; 2024 E-Learn. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
