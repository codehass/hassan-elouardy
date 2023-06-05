import React from 'react';
import './home.css';

const Home = () => (
  <div className="home">
    <h3>Hello! I am Hassan EL OUARDY</h3>
    <h1>
      Building
      <spain className="spain"> Web Experiences </spain>
      {' '}
      for Users.
    </h1>
    <p className="content">
      I can help you build a product, feature or website.
      Taka a look of my works. If you like what you see and have a project
      you need coded, don’t hesitate and contact me.
    </p>
    <button type="button" className="btn">Contact Me</button>
  </div>
);

export default Home;
