import React, { useEffect, useRef, useState } from 'react';

/**
 * InteractiveCursor:
 * - Smooth golden trailing spotlight that illuminates the dark background
 * - Magnetic precision cursor with expanding hover aura
 * - Subtle drifting stardust particle wake
 * - Disabled on touch / mobile devices for clean UX
 */
export default function InteractiveCursor() {
  const canvasRef = useRef(null);
  const glowRef = useRef(null);
  const ringRef = useRef(null);
  const dotRef = useRef(null);

  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);

  useEffect(() => {
    // Check if device supports fine pointer (mouse/trackpad)
    if (typeof window === 'undefined' || !window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    setIsVisible(true);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse coordinates & smooth lerp targets
    const mouse = { x: -500, y: -500, moved: false };
    const ring = { x: -500, y: -500 };
    const glow = { x: -500, y: -500 };

    // Fading golden stardust particles
    const particles = [];
    const maxParticles = 32;

    const handleMouseMove = (e) => {
      if (!mouse.moved) {
        mouse.moved = true;
        setHasMoved(true);
        ring.x = e.clientX;
        ring.y = e.clientY;
        glow.x = e.clientX;
        glow.y = e.clientY;
      }
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Add delicate golden stardust sparkle particles trailing the cursor
      if (Math.random() > 0.25 && particles.length < maxParticles) {
        particles.push({
          x: e.clientX + (Math.random() - 0.5) * 12,
          y: e.clientY + (Math.random() - 0.5) * 12,
          vx: (Math.random() - 0.5) * 0.9,
          vy: (Math.random() - 0.5) * 0.9 - 0.35,
          radius: Math.random() * 2.2 + 1.2,
          alpha: 0.9,
          color: Math.random() > 0.35 ? '#fbbf24' : '#fef08a' // Vibrant 24K gold & bright stardust
        });
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Detect hover over interactive elements
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('.group')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);

    // Animation Loop
    let animId;
    const render = () => {
      if (mouse.moved) {
        // Smooth lerp for ring (0.24) and glow (0.09)
        ring.x += (mouse.x - ring.x) * 0.24;
        ring.y += (mouse.y - ring.y) * 0.24;

        glow.x += (mouse.x - glow.x) * 0.09;
        glow.y += (mouse.y - glow.y) * 0.09;

        if (ringRef.current) {
          ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`;
        }

        if (glowRef.current) {
          glowRef.current.style.transform = `translate3d(${glow.x}px, ${glow.y}px, 0)`;
        }
      }

      // Draw particle trail on transparent canvas
      ctx.clearRect(0, 0, width, height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha *= 0.93; // Smooth fade

        if (p.alpha < 0.03) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.shadowColor = '#d97706';
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`pointer-events-none fixed inset-0 z-50 overflow-hidden select-none transition-opacity duration-300 ${
      hasMoved ? 'opacity-100' : 'opacity-0'
    }`}>
      {/* 1. Large Ambient Golden Light Glow following the cursor across midnight dark surfaces */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 w-[460px] h-[460px] -ml-[230px] -mt-[230px] rounded-full blur-[100px] opacity-45 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.32) 0%, rgba(212, 175, 55, 0.12) 45%, transparent 70%)'
        }}
      />

      {/* 2. Canvas for Golden Stardust Wake Particles */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-40"
      />

      {/* 3. Outer Magnetic Tracking Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none transition-all duration-150 ease-out z-50 border ${
          isHovered
            ? 'w-14 h-14 -ml-7 -mt-7 border-amber-400 bg-amber-400/20 backdrop-blur-[1px] scale-110 shadow-[0_0_20px_rgba(251,191,36,0.6)]'
            : isClicking
            ? 'w-7 h-7 -ml-3.5 -mt-3.5 border-amber-300 bg-amber-400/35 scale-90'
            : 'w-9 h-9 -ml-4.5 -mt-4.5 border-amber-400/60 bg-amber-500/10 shadow-[0_0_12px_rgba(245,158,11,0.35)]'
        }`}
      />

      {/* 4. Center Gold Precision Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 rounded-full bg-gradient-to-tr from-amber-400 via-yellow-200 to-amber-100 pointer-events-none z-50 transition-transform duration-75 shadow-[0_0_10px_#f59e0b] ${
          isHovered ? 'scale-150 shadow-[0_0_14px_#fbbf24]' : ''
        }`}
      />
    </div>
  );
}
