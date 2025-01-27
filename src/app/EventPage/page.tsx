'use client';

import { motion } from 'framer-motion';
import './EventPage.css';

const EventPage = () => {
  // Sample events data
  const events = [
    {
      title: 'Tech Conference 2025',
      description: 'Join us for the annual Tech Conference where industry leaders and innovators come together to discuss the latest in technology, AI, and development.',
      date: 'March 25, 2025',
      time: '10:00 AM - 5:00 PM',
      location: 'IIT Indore, Simrol, Madhya Pradesh',
    },
    {
      title: 'AI Workshop 2025',
      description: 'A hands-on workshop on Artificial Intelligence and Machine Learning, focusing on real-world applications and case studies.',
      date: 'April 10, 2025',
      time: '9:00 AM - 4:00 PM',
      location: 'IIT Indore, Simrol, Madhya Pradesh',
    },
    {
      title: 'Cybersecurity Summit 2025',
      description: 'Explore the latest trends in cybersecurity and learn from top experts in the field.',
      date: 'May 15, 2025',
      time: '11:00 AM - 3:00 PM',
      location: 'IIT Indore, Simrol, Madhya Pradesh',
    },
    {
      title: 'Cybersecurity Summit 2025',
      description: 'Explore the latest trends in cybersecurity and learn from top experts in the field.',
      date: 'May 15, 2025',
      time: '11:00 AM - 3:00 PM',
      location: 'IIT Indore, Simrol, Madhya Pradesh',
    },
    {
      title: 'bkhk Summit 2025',
      description: 'Explore the latest trends in cybersecurity and learn from top experts in the field.',
      date: 'oih 15, 2025',
      time: '11:hoi00 AM - 3:00 PM',
      location: 'huhi Indore, Simrol, Madhya Pradesh',
    },
    {
      title: 'vuy Suhoihmmit 2025',
      description: 'Explhoiore the latest trends in cybersecurity and learn from top experts in the field.',
      date: 'May 15, 2025',
      time: '11:00hi AM - 3:00 PM',
      location: 'IIT Ihoindore, Simrol, Madhya Pradesh',
    },
  ];

  return (
    <div className="event-page">
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

      {/* Space Images */}
      <motion.img
        src="https://media0.giphy.com/media/iHhjpUr67p1J9l85un/source.gif" // Replace with your giphy link
        alt="Astronaut Walking"
        className="astronaut"
      />
      {/* Page Heading */}
      <motion.h1
        className="event-heading"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        Upcoming Events
      </motion.h1>

      {/* Event List */}
      <div className="event-list">
        {events.map((event, index) => (
          <div key={index} className="event-block">
            <h2 className="event-title">{event.title}</h2>
            <p className="event-description">{event.description}</p>
            <p className="event-details">
              <strong>Date:</strong> {event.date}
            </p>
            <p className="event-details">
              <strong>Time:</strong> {event.time}
            </p>
            <p className="event-details">
              <strong>Location:</strong> {event.location}
            </p>
            <button className="register-btn">Register Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventPage;
