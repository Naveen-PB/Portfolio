import React from 'react';
import './Projects.css'; // Your custom CSS file for styles
import sihCertificate from './Asserts/sih_certificate.jpeg'; // Import the local image
import dpbh from './Asserts/DPBH.jpg';
import ideathon1 from './Asserts/Ideathon.jpeg'

export default function Project() {
  const projects = [
    {
      title: 'SIH HACKATHON 2023',
      description: "I participated in the finals in the AR/VR domain, where my team developed an interactive virtual forest using Unity Engine for kindergarten children. The project aimed to provide an immersive learning environment and included a quiz game to enhance engagement. My key contribution was developing the quiz module, which tested children's knowledge in a fun and interactive way.",
      images: [sihCertificate] // Add the image path here
    },
    {
      title: 'DPBH 2024',
      description: 'We focused on reducing manipulative slogans that mislead users into purchasing unwanted products. Our solution modifies these deceptive elements to provide clear, honest information, improving user experience and promoting ethical design practices. This project was selected for the finals of the DPBH Hackathon.',
      images: [
        dpbh
      ]
    },
    {
      title: 'MERN Stack Project for Dress Shop',
      description: 'Developed a MERN Stack project for Orange Garments, a dress shop located in Komarapalayam. The application streamlined online shopping, enhancing user experience with features like product management, shopping cart, and order processing.',
      images: [
        ideathon1
      ]
    }
  ];

  return (
    <div className="project-container">
      {projects.map((project, index) => (
        <div className="project-row" key={index}>
          <div className="project-content">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
          <div className="project-images">
            {project.images.map((image, idx) => (
              <img src={image} alt={`Project ${index + 1} - Image ${idx + 1}`} key={idx} className="project-image" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
