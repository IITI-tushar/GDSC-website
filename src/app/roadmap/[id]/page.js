'use client'
import { useEffect } from 'react';

const techStack = [
  {
    name: 'HTML',
    image: 'https://emaillistvalidation.com/blog/content/images/2023/09/HTML5_logo_and_wordmark.svg.png',
    description: 'HTML is the standard markup language for documents designed to be displayed in a web browser. It provides the basic structure for web pages.',
    youtubeLink: 'https://www.youtube.com/watch?v=HTML-YT-Link'
  },
  {
    name: 'CSS',
    image: 'https://path/to/css-image.jpg',
    description: 'CSS is used to style HTML documents. It controls the layout, colors, fonts, and other visual elements of web pages.',
    youtubeLink: 'https://www.youtube.com/watch?v=CSS-YT-Link'
  },
  {
    name: 'JavaScript',
    image: 'https://path/to/javascript-image.jpg',
    description: 'JavaScript is the programming language of the web. It allows developers to create dynamic, interactive websites and web apps.',
    youtubeLink: 'https://www.youtube.com/watch?v=JavaScript-YT-Link'
  },
  {
    name: 'React',
    image: 'https://path/to/react-image.jpg',
    description: 'React is a JavaScript library for building user interfaces. It allows developers to create complex UIs from small, reusable components.',
    youtubeLink: 'https://www.youtube.com/watch?v=React-YT-Link'
  },
  {
    name: 'Node.js',
    image: 'https://path/to/nodejs-image.jpg',
    description: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine. It allows you to build fast, scalable network applications.',
    youtubeLink: 'https://www.youtube.com/watch?v=Nodejs-YT-Link'
  }
];

const TechStackRoadmap = () => {
  useEffect(() => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineContainer = document.querySelector('#timeline-1');

    if (timelineItems.length) {
      timelineItems[0].classList.add('timeline-item--active');
      timelineContainer.style.backgroundImage = `url(${timelineItems[0].querySelector('img').src})`;

      const handleScroll = () => {
        const scrollPos = window.scrollY;

        timelineItems.forEach((item) => {
          const min = item.offsetTop;
          const max = item.offsetHeight + item.offsetTop;
          const itemImg = item.querySelector('img');

          if (scrollPos <= max -40 && scrollPos >= min) {
            timelineContainer.style.backgroundImage = `url(${itemImg.src})`;
            item.classList.add('timeline-item--active');
          } else {
            item.classList.remove('timeline-item--active');
          }
        });
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div id="timeline-1" className="relative w-full p-20 bg-fixed bg-cover bg-gray-900">
      {/* Overlay with blur effect */}
      <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-md"></div>

      <div className="text-center mb-20 relative z-10">
        <h2 className="text-4xl text-white font-serif">Web Development Roadmap</h2>
        <h3 className="text-xl text-white opacity-70 tracking-widest mt-4">Learn and Master the Tech Stack</h3>
      </div>
      <div className="flex flex-col items-center max-w-screen-lg mx-auto relative z-10">
        {/* Loop through the tech stack array to create each timeline item */}
        {techStack.map((tech, index) => (
          <div key={index} className="timeline-item relative opacity-30 filter blur-sm transition-all transform translate-y-20 w-full sm:w-1/2 px-4 py-10">
            <div className="timeline-content">
              <img className="w-full shadow-lg" src={tech.image} alt={tech.name} />
              <h2 className="text-6xl text-white mt-4">{tech.name}</h2>
              <p className="text-base text-white opacity-70 mt-2">{tech.description}</p>
              <a
                href={tech.youtubeLink}
                target="_blank"
                className="mt-4 inline-block px-6 py-2 text-lg bg-blue-500 text-white rounded-md transition-transform transform hover:scale-110"
              >
                Learn Here
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStackRoadmap;
