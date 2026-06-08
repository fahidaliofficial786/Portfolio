import React, { useEffect, useRef } from 'react';

export const RobotsBackground: React.FC = () => {
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

    // AI & Cyberpunk Robot/UFO Emojis
    const ROBOT_TYPES = ['🤖', '🛸', '🛰️', '👾'];

    class Robot {
      x: number;
      y: number;
      speedX: number;
      speedY: number;
      type: string;
      size: number;
      pulsePhase: number;
      pulseSpeed: number;
      angle: number;
      spinSpeed: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height * 0.8;
        // Moderate speeds for floating feel
        this.speedX = (Math.random() - 0.5) * 1.2;
        this.speedY = (Math.random() - 0.5) * 0.6;
        this.type = ROBOT_TYPES[Math.floor(Math.random() * ROBOT_TYPES.length)];
        this.size = 22 + Math.random() * 18; // 22px to 40px
        this.pulsePhase = Math.random() * Math.PI * 2;
        this.pulseSpeed = 0.02 + Math.random() * 0.03;
        this.angle = (Math.random() - 0.5) * 0.2; // Slight rotation offset
        this.spinSpeed = (Math.random() - 0.5) * 0.005; // Very slow rotate
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.pulsePhase += this.pulseSpeed;
        this.angle += this.spinSpeed;

        // Bounce off walls (with margin)
        if (this.x < -50 || this.x > canvas!.width + 50) {
          this.speedX *= -1;
        }
        if (this.y < -50 || this.y > canvas!.height + 50) {
          this.speedY *= -1;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);

        // Draw a subtle digital scanner ring around satellites/robots
        const pulseRadius = this.size * (1.1 + Math.sin(this.pulsePhase) * 0.25);
        ctx.beginPath();
        ctx.arc(0, 0, pulseRadius, 0, Math.PI * 2);
        ctx.strokeStyle = this.type === '🤖' 
          ? 'rgba(0, 240, 255, 0.15)' // Teal glow for bots
          : this.type === '🛰️'
            ? 'rgba(189, 0, 255, 0.15)' // Purple glow for satellites
            : 'rgba(0, 255, 148, 0.15)'; // Green glow for UFO/Aliens
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 6]); // Cyber dashed pattern
        ctx.stroke();

        ctx.font = `${this.size}px monospace`;
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';
        
        // Cyberpunk glowing shadow
        ctx.shadowColor = this.type === '🤖' ? '#00F0FF' : this.type === '🛰️' ? '#BD00FF' : '#00FF94';
        ctx.shadowBlur = 10;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        
        ctx.fillText(this.type, 0, 0);
        
        ctx.restore();
      }
    }

    const robots: Robot[] = [];
    const robotCount = window.innerWidth < 768 ? 6 : 12; 

    for (let i = 0; i < robotCount; i++) {
      robots.push(new Robot());
    }

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas!.width, canvas!.height);
      robots.forEach(robot => {
        robot.update();
        robot.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', setSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[-1] opacity-75" />;
};
