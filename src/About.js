import React from 'react';
import './About.css'; // You can style the section in this CSS file
import passport from './Asserts/Passportsize.jpg'

export default function About() {
  return (
    <div className="about-section">
      <div className="about-container">
        {/* Photo Section */}
        <div className="about-photo">
          <img
            src={passport} // Replace with your photo URL
            alt="Naveen PB"
            className="profile-photo"
          />
        </div>

        {/* About Me Section */}
        <div className="about-details">
          <h2>About Me</h2>
          <p>
            I'm <strong>Naveen PB</strong>, a web developer with a passion for creating responsive, user-friendly websites and web applications. 
            With a background in front-end and back-end development, I strive to deliver seamless digital experiences through clean, efficient code and innovative designs.
          </p>
          <p>
            I have knowledge in <strong>React.js, Node.js, and MongoDB</strong>, and I have hands-on experience with full-stack projects that involve designing, developing, and deploying web applications. 
            My approach to web development is user-centric, ensuring that each project not only looks great but also performs smoothly.
          </p>
          <p>
            In my spare time, I enjoy exploring new web technologies, contributing to open-source projects, and staying updated with the latest industry trends.
          </p>

          {/* Additional Details */}
          <div className="personal-details">
            <h3>Personal Details</h3>
            <ul>
              <li><strong>Birthday:</strong> December 1, 2004</li> {/* Replace with actual birthday */}
              <li><strong>Phone:</strong> 7598500356</li> {/* Replace with actual phone number */}
              <li><strong>City:</strong> Komarapalayam,Namakkal-638183</li> {/* Replace with actual city */}
              <li><strong>Age:</strong> 19</li> {/* Replace with actual age */}
              <li><strong>Degree:</strong> BSC-Information Systems</li> {/* Replace with actual degree */}
              <li><strong>Email:</strong> naveen200412.p@gmail.com</li> {/* Replace with actual email */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
