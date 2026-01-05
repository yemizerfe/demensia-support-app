import React, { useEffect, useRef } from 'react';

const MemoryTreeCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Full screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const leaves = [];
    const leafColors = ['#A2D2FF', '#FFC8DD', '#CDB4DB', '#B5EAD7', '#FFDAC1'];

    function drawTree() {
      const centerX = canvas.width / 2;
      const baseY = canvas.height;

      ctx.beginPath();
      ctx.strokeStyle = '#6B4226';
      ctx.lineWidth = 10;
      ctx.moveTo(centerX, baseY);
      ctx.lineTo(centerX, baseY - 150);
      ctx.stroke();

      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(centerX, baseY - 100);
      ctx.lineTo(centerX - 50, baseY - 200);
      ctx.moveTo(centerX, baseY - 120);
      ctx.lineTo(centerX + 50, baseY - 220);
      ctx.stroke();
    }

    function createLeaf() {
      const centerX = canvas.width / 2;
      return {
        x: centerX - 50 + Math.random() * 100,
        y: canvas.height - 220 + Math.random() * 20,
        radius: 5 + Math.random() * 5,
        color: leafColors[Math.floor(Math.random() * leafColors.length)],
        speed: 0.5 + Math.random() * 1.2,
      };
    }

    for (let i = 0; i < 30; i++) {
      leaves.push(createLeaf());
    }

    function drawLeaves() {
      for (const leaf of leaves) {
        ctx.beginPath();
        ctx.arc(leaf.x, leaf.y, leaf.radius, 0, 2 * Math.PI);
        ctx.fillStyle = leaf.color;
        ctx.fill();
        leaf.y += leaf.speed;

        if (leaf.y > canvas.height) {
          Object.assign(leaf, createLeaf());
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawTree();
      drawLeaves();
      requestAnimationFrame(animate);
    }

    animate();

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        width: '100%',
        height: '100%',
        background: 'white',
      }}
    />
  );
};

export default MemoryTreeCanvas;
