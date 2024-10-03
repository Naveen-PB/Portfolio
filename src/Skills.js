import React from 'react';
import './Skills.css'; // Assuming you'll style this component here

export default function Skills() {
  return (
    <div className="skills-section">
      <h2>Skills</h2>
      
      {/* Programming Languages */}
      <div className="skills-category">
        <h3>Programming Languages</h3>
        <ul>
          <li><strong>HTML:</strong> Structuring web content and creating semantic web pages.</li>
          <li><strong>CSS:</strong> Styling and designing responsive web layouts.</li>
          <li><strong>Java:</strong> Object-oriented programming and building desktop and web applications.</li>
          <li><strong>Python:</strong> Scripting, automation, and solving computational problems.</li>
          <li><strong>C:</strong> Fundamentals of programming, memory management, and building efficient algorithms.</li>
        </ul>
      </div>
      
      {/* Area of Interest - MERN Stack */}
      <div className="skills-category">
        <h3>MERN Stack</h3>
        <ul>
          <li><strong>MongoDB:</strong> Handling NoSQL databases and performing CRUD operations.</li>
          <li><strong>Express.js:</strong> Developing backend services and APIs.</li>
          <li><strong>React.js:</strong> Creating dynamic user interfaces and single-page applications.</li>
          <li><strong>Node.js:</strong> Building server-side applications with JavaScript.</li>
        </ul>
      </div>

      {/* Area of Interest - DBMS */}
      <div className="skills-category">
        <h3>Database Management Systems (DBMS)</h3>
        <ul>
          <li><strong>MySQL:</strong> Managing relational databases and writing complex queries.</li>
          <li><strong>MongoDB:</strong> NoSQL database management and schema design.</li>
        </ul>
      </div>

      {/* Soft Skills */}
      <div className="skills-category">
        <h3>Soft Skills</h3>
        <ul>
          <li>Problem-solving.</li>
          <li>Effective communication and teamwork.</li>
          <li>Time management and organization.</li>
          <li>Continuous learning and adaptability.</li>
        </ul>
      </div>
    </div>
  );
}
