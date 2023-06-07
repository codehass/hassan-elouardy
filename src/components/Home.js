import React from 'react';
import './home.css';

const Home = () => (
  <div className="home" id="home">
    <h3>Hello! I am Hassan EL OUARDY.</h3>
    <h1>
      Building
      <span className="spain"> Web Experiences </span>
      {' '}
      for Users.
    </h1>
    <p className="content">
      I specialize in crafting exceptional web experiences.
      Need help with a product, feature, or website? Explore
      my portfolio to see the quality of my work. If you have a coding
      project in mind, reach out to me. Together, we can turn your vision
      into a remarkable reality.
    </p>
    <button type="button" className="btn">
      <a href="#contact" style={{ background: '#f90', color: 'black' }}>Get In Touch</a>
    </button>
  </div>
);

export default Home;
