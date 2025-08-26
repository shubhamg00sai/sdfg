import React from 'react';

const Contact = () => (
  <section>
    <h2>Contact Me</h2>
    <p>Email: shubham@example.com</p>
    <a href="/ShubhamGosaiResume.pdf" download>Download Resume</a>
    <form>
      <input type="text" placeholder="Name" required />
      <input type="email" placeholder="Email" required />
      <textarea placeholder="Message"></textarea>
      <button type="submit">Send</button>
    </form>
  </section>
);
export default Contact;