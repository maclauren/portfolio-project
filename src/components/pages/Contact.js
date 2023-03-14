<<<<<<< HEAD
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <div className="contact-info">
        <p><strong>Email:</strong> lauren@laurenmacpherson.com</p>
        <p><strong>CV:</strong> <a href="https://drive.google.com/file/d/1pY-EU9Kwkx6x26vmSO4eN5ksVBnExV_o/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download PDF</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">https://github.com/maclauren</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/laurenmacpherson/</a></p>
      </div>
      <form className="contact-form" action="/submit-form" method="POST">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
=======

const Contact = () => {
    return <h1>Contact</h1>
}

export default Contact
>>>>>>> refs/remotes/origin/main
