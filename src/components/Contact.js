import React from 'react';
import './contact.css';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm('mnqykbbo');

  return (
    <div className="contact" id="contact">
      <div className="contact-text">
        <span>Have an idea? </span>
        I can help you to Start your project.
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" id="name" name="name" placeholder="Full Name" required="required" />
        <input id="email" type="email" name="Email" placeholder="Email" required="required" />
        <textarea id="textarea" name="message" placeholder="Message" required="required" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
