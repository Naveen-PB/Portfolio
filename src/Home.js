import React from 'react';
import './Home.css';
import bannerImage from './Asserts/Naveen3.jpg'; // Adjust the path according to your folder structure

export default function Banner() {
  return (
    <div className="home-banner" style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className="banner-content">
        <h1>NAVEEN PB</h1>
        <h2>Web Developer</h2>
      </div>
    </div>
  );
}
