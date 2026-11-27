import { useEffect, useRef } from 'react';

export function Snowfall() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (reducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const flakeCount = width < 640 ? 32 : 52;
    const flakes = Array.from({ length: flakeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: 0.9 + Math.random() * 1.6,
      speedY: 0.35 + Math.random() * 0.75,
      speedX: (Math.random() - 0.5) * 0.35,
      alpha: 0.16 + Math.random() * 0.34,
    }));

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      for (const f of flakes) {
        f.y += f.speedY;
        f.x += f.speedX;
        if (f.y > height + 4) {
          f.y = -4;
          f.x = Math.random() * width;
        }
        if (f.x > width + 4) f.x = -4;
        if (f.x < -4) f.x = width + 4;

        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(242, 237, 226, ${f.alpha})`;
        ctx.fill();
      }
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="snowfall-canvas" aria-hidden="true" />;
}
