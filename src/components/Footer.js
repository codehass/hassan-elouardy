import React from 'react';
import './footer.css';

const Footer = () => (
  <div className="footer">
    <p className="copy-right">
      © 2023 All rights reserved.
    </p>
    <div className="footer-links">
      <a href="https://www.linkedin.com/in/hassanelouardy/" rel="noreferrer" target="_blank">
        <i className="fab fa-linkedin-in" />
      </a>
      <a href="https://github.com/codehass" rel="noreferrer" target="_blank">
        <i className="fab fa-github" />
      </a>
      <a href="https://twitter.com/hassanelourdy" rel="noreferrer" target="_blank">
        <i className="fab fa-twitter" />
      </a>
      <a href="https://medium.com/@hassan.elouardy06" rel="noreferrer" target="_blank">
        <i className="fab fa-medium" />
      </a>
    </div>
  </div>
);

export default Footer;
