// src/app/contact/page.tsx
'use client'; // This directive marks the component as a Client Component

import Navbar from '@/components/ui/Navbar';
import './contact.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="a-one animate"></div>
      <div className="a-two animate"></div>
      <div className="a-three animate"></div>
      <div className="a-four animate"></div>
      <div className="a-five animate"></div>
      <div className="a-six animate"></div>
      <div className="a-seven animate"></div>
      <div className="a-eight animate"></div>
      <div className="a-nine animate"></div>
      <div className="a-ten animate"></div>
      {/* Left Side: Full screen height image (1/3 width) */}
      <div className="contact-left">
        <img
          src="https://gdscmmmutwog.web.app/images/gif3" 
          />
      <Navbar />
      {/* Left Side: Full screen height image (1/3 width) */}
      <div className="contact-left">
        <img
          src="https://gdscmmmutwog.web.app/images/gif3" // Replace with your image URL
          alt="Contact Background"
          className="contact-image"
        />
        <div className="social-links">
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
      <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" className="social-icon" />
    </a>
    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
      <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="social-icon" />
    </a>
  </div>
      </div>
     
  

      {/* Right Side: Contact Form */}
      <div className="contact-right">

   

        <h1>Contact Us</h1>
        <form>
          <input
            type="email"
            placeholder="Your Email"
            className="form-input"
          />
          <textarea
            placeholder="Your Message"
            className="form-textarea"
          />
          <button type="submit" className="form-button">Send</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default ContactPage;
