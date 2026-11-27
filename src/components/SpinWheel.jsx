import { useEffect, useRef, useState } from 'react';

const TWO_PI = Math.PI * 2;
const POINTER_ANGLE = (3 * Math.PI) / 2;

export function SpinWheel({ items, disabled, theme = 'holiday', onBeforeSpin, onSpinComplete }) {
  const canvasRef = useRef(null);
  const rotationRef = useRef(0);
  const activeItemsRef = useRef(items);
  const themeRef = useRef(theme);
  const sizeRef = useRef({ displaySize: 0, dpr: 1 });
  const [isSpinning, setIsSpinning] = useState(false);

  const syncCanvasSize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return 0;

    const dpr = window.devicePixelRatio || 1;
    const parentWidth = canvas.parentElement?.clientWidth || 420;
    const displaySize = Math.max(
      240,
      Math.min(parentWidth, window.innerWidth - 72, 440)
    );

    if (
      sizeRef.current.displaySize !== displaySize ||
      sizeRef.current.dpr !== dpr
    ) {
      canvas.style.width = `${displaySize}px`;
      canvas.style.height = `${displaySize}px`;
      canvas.width = displaySize * dpr;
      canvas.height = displaySize * dpr;
      sizeRef.current = { displaySize, dpr };
    }

    return displaySize;
  };

  useEffect(() => {
    themeRef.current = theme;
    if (!isSpinning) {
      activeItemsRef.current = items;
      syncCanvasSize();
      drawWheel(rotationRef.current, items);
    }
  }, [items, isSpinning, theme]);

  useEffect(() => {
    const handleResize = () => {
      syncCanvasSize();
      drawWheel(rotationRef.current, activeItemsRef.current);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const drawWheel = (rotation, currentItems) => {
    const canvas = canvasRef.current;
    if (!canvas || !currentItems.length) return;
    const ctx = canvas.getContext('2d');

    const displaySize = sizeRef.current.displaySize || syncCanvasSize();
    const dpr = sizeRef.current.dpr;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const cx = displaySize / 2;
    const cy = displaySize / 2;
    const outerRadius = displaySize / 2 - 10;
    const wheelRadius = outerRadius - 8;
    const n = currentItems.length;
    const sliceAngle = TWO_PI / n;

    const isHoliday = themeRef.current === 'holiday';
    const rimFill = isHoliday ? '#1c302b' : '#fffdf8';
    const rimStroke = isHoliday ? '#d9a441' : '#141413';
    const sliceStroke = isHoliday ? '#0e1b18' : '#fffdf8';
    const hubFill = isHoliday ? '#142420' : '#fffdf8';
    const hubStroke = isHoliday ? '#d9a441' : '#141413';

    ctx.clearRect(0, 0, displaySize, displaySize);

    ctx.beginPath();
    ctx.arc(cx, cy, outerRadius, 0, TWO_PI);
    ctx.fillStyle = rimFill;
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = rimStroke;
    ctx.stroke();

    for (let i = 0; i < n; i++) {
      const startAngle = rotation + i * sliceAngle;
      const endAngle = startAngle + sliceAngle;
      const item = currentItems[i];

      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, wheelRadius, startAngle, endAngle);
      ctx.closePath();
      ctx.fillStyle = item.color;
      ctx.fill();

      ctx.lineWidth = 1.5;
      ctx.strokeStyle = sliceStroke;
      ctx.stroke();

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(startAngle + sliceAngle / 2);
      ctx.textAlign = 'right';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#fffdf8';
      ctx.font = `600 ${displaySize < 360 ? 11.5 : 13}px "IBM Plex Sans", sans-serif`;
      ctx.fillText(item.shortLabel, wheelRadius - 16, 0);
      ctx.restore();
    }

    ctx.beginPath();
    ctx.arc(cx, cy, 22, 0, TWO_PI);
    ctx.fillStyle = hubFill;
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = hubStroke;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(cx, cy, 6, 0, TWO_PI);
    ctx.fillStyle = hubStroke;
    ctx.fill();
  };

  const handleSpin = () => {
    if (isSpinning || disabled) return;

    const spinItems = onBeforeSpin ? onBeforeSpin() : items;
    activeItemsRef.current = spinItems;
    setIsSpinning(true);

    const startRotation = rotationRef.current;
    const extraSpins = 5 + Math.floor(Math.random() * 4);
    const randomOffset = Math.random() * TWO_PI;
    const totalDelta = extraSpins * TWO_PI + randomOffset;
    const duration = 4000;
    const startTime = performance.now();

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);
      const currentRotation = startRotation + totalDelta * eased;

      rotationRef.current = currentRotation;
      drawWheel(currentRotation, activeItemsRef.current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        const current = activeItemsRef.current;
        const normalized =
          (((POINTER_ANGLE - currentRotation) % TWO_PI) + TWO_PI) % TWO_PI;
        const sliceAngle = TWO_PI / current.length;
        const winningIndex = Math.floor(normalized / sliceAngle) % current.length;
        setIsSpinning(false);
        onSpinComplete(current[winningIndex]);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <div className="wheel-wrapper">
      <div className="wheel-stage">
        <div className="wheel-pointer" aria-hidden="true" />
        <canvas ref={canvasRef} className="wheel-canvas" />
      </div>

      <button
        type="button"
        className="btn-primary spin-button"
        onClick={handleSpin}
        disabled={isSpinning || disabled}
      >
        {isSpinning
          ? 'Spinning...'
          : disabled
            ? 'Spun for today'
            : 'Spin wheel'}
      </button>
    </div>
  );
}
