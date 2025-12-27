
import React, { useEffect, useRef } from 'react';

export const BirdsBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();
    window.addEventListener('resize', setSize);

    // Realistic Birds (Emojis)
    const BIRD_TYPES = ['🦜', '🦅', '🦆', '🐦', '🕊️'];

    class Bird {
      x: number;
      y: number;
      speed: number;
      type: string;
      size: number;
      flapSpeed: number;
      phase: number;
      yOffset: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height * 0.7; // Keep mostly in upper 70%
        // Randomize speed: some slow (gliding), some fast
        this.speed = (Math.random() < 0.5 ? -1 : 1) * (0.5 + Math.random() * 2); 
        this.type = BIRD_TYPES[Math.floor(Math.random() * BIRD_TYPES.length)];
        this.size = 20 + Math.random() * 20; // 20px to 40px
        this.flapSpeed = 0.05 + Math.random() * 0.1;
        this.phase = Math.random() * Math.PI * 2;
        this.yOffset = 0;
      }

      update() {
        this.x += this.speed;
        this.phase += this.flapSpeed;
        this.yOffset = Math.sin(this.phase) * 8; // Bobbing motion for flight

        // Reset if off screen
        // Flying Right -> reset to Left
        if (this.speed > 0 && this.x > canvas!.width + 50) {
          this.x = -50;
          this.y = Math.random() * canvas!.height * 0.7;
          this.type = BIRD_TYPES[Math.floor(Math.random() * BIRD_TYPES.length)];
        }
        // Flying Left -> reset to Right
        if (this.speed < 0 && this.x < -50) {
          this.x = canvas!.width + 50;
          this.y = Math.random() * canvas!.height * 0.7;
          this.type = BIRD_TYPES[Math.floor(Math.random() * BIRD_TYPES.length)];
        }
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        
        // Translate to bird position to handle flipping
        ctx.translate(this.x, this.y + this.yOffset);
        
        // Most bird emojis face Left by default.
        // If flying Right (speed > 0), we need to flip horizontally.
        // If flying Left (speed < 0), keep default.
        if (this.speed > 0) {
           ctx.scale(-1, 1); 
        }

        ctx.font = `${this.size}px serif`;
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';
        
        // Shadow for realism/depth
        ctx.shadowColor = 'rgba(0,0,0,0.5)';
        ctx.shadowBlur = 4;
        ctx.shadowOffsetY = 4;
        
        ctx.fillText(this.type, 0, 0);
        
        ctx.restore();
      }
    }

    const birds: Bird[] = [];
    const birdCount = window.innerWidth < 768 ? 6 : 12; 

    for (let i = 0; i < birdCount; i++) {
      birds.push(new Bird());
    }

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas!.width, canvas!.height);
      birds.forEach(bird => {
        bird.update();
        bird.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', setSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Strict z-index -1 ensures it is behind standard DOM elements (z-0)
  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[-1]" />;
};
