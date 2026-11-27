import { useEffect, useRef, useState } from 'react';
import { playTick, playWinChime } from '../utils/sound';

const TWO_PI = Math.PI * 2;
const POINTER_ANGLE = (3 * Math.PI) / 2;

function getSliceIndexAtPointer(rotation, count) {
  const normalized = (((POINTER_ANGLE - rotation) % TWO_PI) + TWO_PI) % TWO_PI;
  const sliceAngle = TWO_PI / count;
  return Math.floor(normalized / sliceAngle) % count;
}

export function SpinWheel({
  items,
  disabled,
  theme = 'holiday',
  soundEnabled = true,
  spinRequestId = 0,
  onBeforeSpin,
  onSpinComplete,
}) {
  const canvasRef = useRef(null);
  const pointerRef = useRef(null);
  const rotationRef = useRef(0);
  const activeItemsRef = useRef(items);
  const themeRef = useRef(theme);
  const soundRef = useRef(soundEnabled);
  const sizeRef = useRef({ displaySize: 0, dpr: 1 });
  const [isSpinning, setIsSpinning] = useState(false);

  useEffect(() => {
    soundRef.current = soundEnabled;
  }, [soundEnabled]);

  const syncCanvasSize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return 0;

    const dpr = window.devicePixelRatio || 1;
    const parentWidth = canvas.parentElement?.clientWidth || 420;
    const displaySize = Math.max(
      240,
      Math.min(parentWidth, window.innerWidth - 72, 430)
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
    const outerRadius = displaySize / 2 - 8;
    const wheelRadius = outerRadius - 12;
    const n = currentItems.length;
    const sliceAngle = TWO_PI / n;
    const isHoliday = themeRef.current === 'holiday';
    const isDark = themeRef.current === 'dark';
    const hardBorder = isHoliday
      ? '#e6b84c'
      : isDark
        ? '#f4f4f5'
        : '#111110';
    const trackFill = isHoliday
      ? '#08110f'
      : isDark
        ? '#111113'
        : '#ffffff';

    ctx.clearRect(0, 0, displaySize, displaySize);

    // Brutalist solid outer ring
    ctx.beginPath();
    ctx.arc(cx, cy, outerRadius, 0, TWO_PI);
    ctx.fillStyle = trackFill;
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = hardBorder;
    ctx.stroke();

    // Flat, graphic slices with thick 2px borders
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

      ctx.lineWidth = 2;
      ctx.strokeStyle = hardBorder;
      ctx.stroke();

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(startAngle + sliceAngle / 2);
      ctx.textAlign = 'right';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#fffdf8';
      ctx.font = `700 ${displaySize < 360 ? 11.5 : 13}px "IBM Plex Mono", monospace`;
      ctx.fillText(item.shortLabel, wheelRadius - 14, 0);
      ctx.restore();
    }

    // Square-ish / stark industrial pegs at slice boundaries
    const pegRadius = outerRadius - 6;
    for (let i = 0; i < n; i++) {
      const a = rotation + i * sliceAngle;
      const px = cx + Math.cos(a) * pegRadius;
      const py = cy + Math.sin(a) * pegRadius;

      ctx.beginPath();
      ctx.arc(px, py, 2.8, 0, TWO_PI);
      ctx.fillStyle = hardBorder;
      ctx.fill();
    }

    // Chunky brutalist center hub
    ctx.beginPath();
    ctx.arc(cx, cy, 22, 0, TWO_PI);
    ctx.fillStyle = trackFill;
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = hardBorder;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(cx, cy, 8, 0, TWO_PI);
    ctx.fillStyle = isHoliday ? '#d9383a' : '#d62828';
    ctx.fill();
  };

  const flickPointer = () => {
    const el = pointerRef.current;
    if (!el) return;
    el.classList.remove('is-tick');
    void el.offsetWidth;
    el.classList.add('is-tick');
  };

  const handleSpin = () => {
    if (isSpinning || disabled) return;

    const spinItems = onBeforeSpin ? onBeforeSpin() : items;
    activeItemsRef.current = spinItems;
    setIsSpinning(true);

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    const startRotation = rotationRef.current;
    const extraSpins = reducedMotion ? 1 : 5 + Math.floor(Math.random() * 4);
    const randomOffset = Math.random() * TWO_PI;
    const totalDelta = extraSpins * TWO_PI + randomOffset;
    const duration = reducedMotion ? 280 : 4000;
    const startTime = performance.now();
    let lastSliceIdx = getSliceIndexAtPointer(startRotation, spinItems.length);

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);
      const currentRotation = startRotation + totalDelta * eased;

      rotationRef.current = currentRotation;
      const current = activeItemsRef.current;
      drawWheel(currentRotation, current);

      const currentSliceIdx = getSliceIndexAtPointer(
        currentRotation,
        current.length
      );
      if (currentSliceIdx !== lastSliceIdx) {
        lastSliceIdx = currentSliceIdx;
        flickPointer();
        if (soundRef.current) {
          playTick();
        }
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsSpinning(false);
        if (soundRef.current) {
          playWinChime();
        }
        onSpinComplete(current[currentSliceIdx]);
      }
    };

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (spinRequestId > 0) {
      handleSpin();
    }
  }, [spinRequestId]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.code !== 'Space') return;
      const tag = document.activeElement?.tagName;
      if (
        tag === 'INPUT' ||
        tag === 'TEXTAREA' ||
        tag === 'SELECT' ||
        tag === 'BUTTON' ||
        document.querySelector('.modal-backdrop')
      ) {
        return;
      }
      e.preventDefault();
      handleSpin();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  });

  return (
    <div className="wheel-wrapper">
      <div className="wheel-stage">
        <div
          ref={pointerRef}
          className="wheel-pointer"
          aria-hidden="true"
        />
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
