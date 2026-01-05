import React, { useEffect, useRef, useState } from 'react';

// Main App component for the calming ripples animation
export default function App() {
  const canvasRef = useRef(null);
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  // Use a ref to store the animation frame ID for cleanup
  const animationFrameId = useRef(null);
  const ripples = useRef([]);

  // Set up window resize listener to make the canvas responsive
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Set canvas dimensions to match the window size
    canvas.width = windowSize.width;
    canvas.height = windowSize.height;

    // Ripple class to manage the individual ripple
    class Ripple {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 0;
        this.maxRadius = 150 + Math.random() * 100;
        this.speed = 0.5 + Math.random() * 0.5;
        this.opacity = 1;
      }

      // Update the ripple's size and opacity
      update() {
        this.radius += this.speed;
        this.opacity = 1 - this.radius / this.maxRadius;
      }

      // Draw the ripple on the canvas
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.strokeStyle = `rgba(100, 100, 200, ${this.opacity})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    }

    // Main animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas completely

      // Add a new ripple at a random interval
      if (Math.random() < 0.01) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        ripples.current.push(new Ripple(x, y));
      }

      // Update and draw each ripple
      for (let i = ripples.current.length - 1; i >= 0; i--) {
        const ripple = ripples.current[i];
        ripple.update();
        ripple.draw();

        // Remove ripples that have faded away
        if (ripple.opacity <= 0) {
          ripples.current.splice(i, 1);
        }
      }

      // Request the next animation frame
      animationFrameId.current = requestAnimationFrame(animate);
    };

    // Start the animation loop
    animate();

    // Cleanup function to stop the animation when the component unmounts
    return () => {
      cancelAnimationFrame(animationFrameId.current);
    };
  }, [windowSize]); // Re-run effect if the window size changes

  return (
    <div className="bg-transparent w-fit h-fit overflow-hidden z-0 fixed ">
      <canvas ref={canvasRef} className="w-full h-full"></canvas>
    </div>
  );
}
