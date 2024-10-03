import React from 'react';
import './Contact.css'; // Make sure to create a Contact.css file for styles

export default function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Information</h2>
      <div className="contact-details">
        <p><strong>Name:</strong> Naveen PB</p>
        <p><strong>Email:</strong> <a href="mailto:naveen200412.p@gmail.com">naveen200412.p@gmail.com</a></p>
        <p><strong>Mobile No:</strong> <a href="tel:+917598500356">7598500356</a></p>
        <p><strong>Address:</strong> 54C1, Kalliyannnangar, Aanangoor Road, B Komarapalayam, Namakkal-638183</p>
      </div>
      <div className="contact-links">
        <a href="https://github.com/Naveen-PB" target="_blank" rel="noopener noreferrer" className="contact-btn">GitHub</a>
        <a href="https://www.linkedin.com/in/naveen-p-b-5865b826b/" target="_blank" rel="noopener noreferrer" className="contact-btn">LinkedIn</a>
      </div>
    </div>
  );
}
