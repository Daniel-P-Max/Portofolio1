import React, { useEffect, useRef, useState } from 'react';

export const TechBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Attempt loading optional hero.mp4 if present in public folder
    const video = videoRef.current;
    if (video) {
      video.oncanplay = () => setVideoLoaded(true);
      video.onerror = () => setVideoLoaded(false);
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle nodes for abstract technological graph
    const nodeCount = Math.min(Math.floor((width * height) / 22000), 55);
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      baseAlpha: number;
      isAccent: boolean;
    }> = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        size: Math.random() > 0.88 ? 2.5 : 1.5,
        baseAlpha: Math.random() * 0.25 + 0.1,
        isAccent: i === 0 || i === 7 // very rare accent node
      });
    }

    // Telemetry grid ticks & crosshairs
    const crosshairs = [
      { x: 0.15, y: 0.25 },
      { x: 0.82, y: 0.35 },
      { x: 0.65, y: 0.78 },
      { x: 0.35, y: 0.85 }
    ];

    let time = 0;

    const render = () => {
      time += 0.008;
      ctx.clearRect(0, 0, width, height);

      // Deep dark base matching color system #0B0B0B
      ctx.fillStyle = '#0B0B0B';
      ctx.fillRect(0, 0, width, height);

      // Draw faint architectural grid coordinates (subtle engineering aesthetic)
      const gridSize = 140;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.025)';
      ctx.lineWidth = 1;

      // Vertical lines
      for (let x = (time * 10) % gridSize; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Subtle crosshairs
      crosshairs.forEach((ch, idx) => {
        const cx = ch.x * width;
        const cy = ch.y * height;
        const chAlpha = (Math.sin(time + idx * 1.5) * 0.06 + 0.08);
        ctx.strokeStyle = `rgba(255, 255, 255, ${chAlpha})`;
        ctx.lineWidth = 1;

        ctx.beginPath();
        ctx.moveTo(cx - 8, cy);
        ctx.lineTo(cx + 8, cy);
        ctx.moveTo(cx, cy - 8);
        ctx.lineTo(cx, cy + 8);
        ctx.stroke();

        // Small tech index number
        ctx.font = '9px monospace';
        ctx.fillStyle = `rgba(255, 255, 255, ${chAlpha * 0.8})`;
        ctx.fillText(`+SYS.0${idx + 1}`, cx + 10, cy - 4);
      });

      // Update and draw network nodes & connections
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0) node.x = width;
        if (node.x > width) node.x = 0;
        if (node.y < 0) node.y = height;
        if (node.y > height) node.y = 0;

        // Draw connections between nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 160) {
            const edgeAlpha = (1 - dist / 160) * 0.08;
            ctx.strokeStyle = node.isAccent || other.isAccent
              ? `rgba(85, 251, 70, ${edgeAlpha * 1.5})`
              : `rgba(255, 255, 255, ${edgeAlpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }

        // Draw node dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        if (node.isAccent) {
          ctx.fillStyle = 'rgba(85, 251, 70, 0.7)';
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${node.baseAlpha})`;
        }
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 h-full w-full pointer-events-none overflow-hidden select-none z-0">
      {/* Optional real video asset if placed in /public/hero.mp4 */}
      <video
        ref={videoRef}
        src="/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        className={`absolute inset-0 h-full w-full object-cover lg:scale-[1.12] transition-opacity duration-1000 ${
          videoLoaded ? 'opacity-40' : 'opacity-0'
        }`}
      />

      {/* Real-time high-performance tech canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full block object-cover"
      />

      {/* Subtle overlay for text contrast without visible harsh gradient */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[0.5px]" />
    </div>
  );
};
