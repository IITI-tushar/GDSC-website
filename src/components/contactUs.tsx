import React, { useState } from 'react';

const ContactPage=()=> {
    return (
      <div>
        <h1>Contact Us</h1>
        <p>Feel free to reach out to us for any queries or support!</p>
        <form>
          <label>Name</label>
          <input type="text" name="name" />
          <label>Email</label>
          <input type="email" name="email" />
          <label>Message</label>
          <textarea name="message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    );
  }
  export default ContactPage;