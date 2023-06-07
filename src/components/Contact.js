import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://formspree.io/f/mnqykbbo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setFormData({
        name: '',
        email: '',
        message: '',
      });

      setSuccessMessage('Your message was sent successfully!');
      setErrorMessage('');

      setTimeout(() => {
        setSuccessMessage('');
      }, 2000);
    } else {
      setSuccessMessage('');
      setErrorMessage('Failed to send your message. Please try again later.');

      setTimeout(() => {
        setErrorMessage('');
      }, 2000);
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-text">
        <span>Have an idea? </span>
        I can help you start your project.
      </div>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <textarea
          id="textarea"
          placeholder="Message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
