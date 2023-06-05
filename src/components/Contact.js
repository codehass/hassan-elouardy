import React from 'react';
import './contact.css';

const Contact = () => (
  <div className="contact">
    <div className="contact-text">
      <span>Have an ideo?</span>
      I can help you to Start your project.
    </div>
    <form className="form">
      <input type="text" name="Full Name" placeholder="Full Name" />
      <input type="text" name="Email" placeholder="Email" />
      <textarea id="textarea" name="Message" placeholder="Message" />
      <button type="button">Submit</button>
    </form>
  </div>
);

export default Contact;
