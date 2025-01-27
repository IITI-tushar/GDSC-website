'use client';
import { useEffect } from 'react';

const StarryBackground = () => {
  useEffect(() => {
    const colors = ['red', 'blue', 'green', 'yellow'];
    const numRockets = 15; // Number of rockets
    const rocketSpeed = 1; // Speed of rocket movement

    // Create a star element with size, blur, twinkle, and burst-like spread
    const createStar = (xPos, yPos) => {
      const star = document.createElement('div');
      const color = colors[Math.floor(Math.random() * colors.length)];
      star.classList.add('star', color);

      // Random size for the star (keeping it small for visible effect)
      const starSize = Math.random() * 3 + 5; // Random size between 6px and 10px
      star.style.width = `${starSize}px`;
      star.style.height = `${starSize}px`;

      // Less blur for better visibility
      const blur = Math.random() * 1 + 3; // Slight blur for better effect
      star.style.filter = `blur(${blur}px)`; // Reduced blur to improve visibility

      // Burst effect: random angles and quick spread
      const angle = Math.random() * 2 * Math.PI; // Random angle for burst
      const spreadDistance = Math.random() * 40 ; // Spread stars faster for burst effect

      const spreadX = Math.cos(angle) * spreadDistance; // Spread in X direction
      const spreadY = Math.sin(angle) * spreadDistance; // Spread in Y direction

      star.style.left = `${xPos + spreadX}px`;
      star.style.top = `${yPos + spreadY}px`;

      // Make the star round (circular)
      star.style.borderRadius = '50%';

      // Set star position and behavior
      star.style.position = 'fixed';
      star.style.zIndex = '-1'; // Keep stars in the background
      star.style.pointerEvents = 'none';

      // Animate the star to simulate a burst effect
      star.style.transition = `transform 10s ease-out, opacity 1s ease-out`; // Smooth burst and fade out

      // Gradually reduce opacity and spread the star outward after a burst
      setTimeout(() => {
        star.style.transform = `translate(${spreadX * 10}px, ${spreadY * 10}px)`; // Further spread out
        star.style.opacity = '0'; // Gradually disappear by reducing opacity
      }, 1); // Slight delay for the burst effect

      // Remove the star after it has faded
      setTimeout(() => {
        star.remove();
      }, 3000); // Remove the star after 3 seconds (including fade-out)

      document.body.appendChild(star);
    };

    // Create and animate the rockets
    const createRocket = () => {
      const rocket = document.createElement('img');
      rocket.src = '/image.png'; // Assuming the image is located in the public folder
      rocket.style.position = 'fixed'; // Fixed positioning for the rocket
      rocket.style.zIndex = '-1'; // Same z-index as stars to keep in background
      rocket.style.width = '50px'; // Adjust the rocket size
      rocket.style.height = 'auto';
      rocket.style.pointerEvents = 'none';
      document.body.appendChild(rocket);

      // Set random starting position for the rocket
      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * window.innerHeight;
      rocket.style.left = `${startX}px`;
      rocket.style.top = `${startY}px`;

      // Set random direction for the rocket
      const angle = Math.random() * 2 * Math.PI; // Random angle (in radians)
      const directionX = Math.cos(angle); // X component of movement
      const directionY = Math.sin(angle); // Y component of movement

      // Set the initial rotation of the rocket to face vertically upwards (0 degrees)
      rocket.style.transform = 'rotate(0deg)'; // Face upward initially

      // Move the rocket and emit stars in a burst-like pattern
      const moveRocket = () => {
        // Update rocket position
        const currentX = parseFloat(rocket.style.left);
        const currentY = parseFloat(rocket.style.top);

        const newX = currentX + directionX * rocketSpeed;
        const newY = currentY + directionY * rocketSpeed;

        // Ensure the rocket stays within the window boundaries
        if (newX < 0 || newX > window.innerWidth || newY < 0 || newY > window.innerHeight) {
          rocket.style.left = `${Math.random() * window.innerWidth}px`;
          rocket.style.top = `${Math.random() * window.innerHeight}px`;
        } else {
          rocket.style.left = `${newX}px`;
          rocket.style.top = `${newY}px`;
        }

        // Calculate the angle of the rocket's direction and rotate the rocket image
        const angleDeg = Math.atan2(directionY, directionX) * (180 / Math.PI); // Convert radians to degrees

        // Rotate the rocket 190 degrees in the direction of movement
        rocket.style.transform = `rotate(${angleDeg + 90}deg)`; // Rotate the rocket in the direction of movement +190 degrees

        // Emit a burst of stars from the rocket's position
        setTimeout(() => {
          createStar(newX, newY); // Emit star at the rocket's current position
        }, 0); // Emit star immediately as rocket moves

        // Continue moving the rocket
        requestAnimationFrame(moveRocket);
      };

      // Start moving the rocket
      moveRocket();
    };

    // Create multiple rockets
    for (let i = 0; i < numRockets; i++) {
      createRocket();
    }

    // Cleanup on unmount
    return () => {
      const rockets = document.querySelectorAll('img');
      rockets.forEach((rocket) => rocket.remove());

      const stars = document.querySelectorAll('.star');
      stars.forEach((star) => star.remove());
    };
  }, []);

  return null;
};

export default StarryBackground;
