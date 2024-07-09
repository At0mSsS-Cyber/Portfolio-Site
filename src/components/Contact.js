import React, { useState, useEffect } from 'react';
import './css/contact.css';

const Contact = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={`container ${loaded ? 'loaded' : ''}`}>
      <div className="left">
        <h2>Contact</h2>
        <p>
          <b>Phone:</b>
          <br />
          +91-9745332709
        </p>
        <p>
          <b>Email:</b>
          <br />
          akhiltom0274@gmail.com
        </p>
        <p>
          <b>Address:</b>
          <br />
          Wayanad, Kerala, India 673579
        </p>
      </div>
      <div className="right">
        <form
          action="mailto:akhiltom0274@gmail.com"
          method="post"
          encType="text/plain"
        >
          <label htmlFor="fname">First Name</label>
          <input type="text" id="fname" name="fname" required />

          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" name="lname" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" style={{ height: '100px' }} required></textarea>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
