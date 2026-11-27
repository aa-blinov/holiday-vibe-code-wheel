const PALETTES = [
  ['#e6b84c', '#c92a2c', '#1b6e49', '#f5efe0'], // holiday
  ['#f3e0a3', '#d9a441', '#9c5210', '#fffdf8'], // brass & amber
  ['#ff6b35', '#d9383a', '#ffd166', '#ffffff'], // firework embers
  ['#7dd3fc', '#e0f2fe', '#e6b84c', '#f5efe0'], // arctic frost
];

const SHAPES = ['ribbon', 'spark', 'star', 'diamond', 'ring'];

const PATTERNS = [
  'centerBurst',
  'sideCannons',
  'skyRockets',
  'topRain',
  'fountain',
  'spiralVortex',
  'ringShockwave',
  'cornerCrossfire',
  'chrysanthemum',
  'zigzagCascade',
];

export const CELEBRATION_VARIANT_COUNT =
  PATTERNS.length * SHAPES.length * PALETTES.length; // 200 distinct combinations

function drawStar(ctx, r) {
  ctx.beginPath();
  for (let i = 0; i < 8; i++) {
    const rad = i % 2 === 0 ? r : r * 0.42;
    const a = (i * Math.PI) / 4;
    if (i === 0) ctx.moveTo(Math.cos(a) * rad, Math.sin(a) * rad);
    else ctx.lineTo(Math.cos(a) * rad, Math.sin(a) * rad);
  }
  ctx.closePath();
  ctx.fill();
}

function drawShape(ctx, p, shape) {
  const s = p.size;
  if (shape === 'ribbon') {
    ctx.fillRect(-s * 0.7, -s * 0.35, s * 1.4, s * 0.7);
  } else if (shape === 'spark') {
    const angle = Math.atan2(p.vy, p.vx);
    ctx.rotate(angle - p.rot);
    ctx.fillRect(-s * 1.4, -1.3, s * 2.8, 2.6);
  } else if (shape === 'star') {
    drawStar(ctx, s * 0.85);
  } else if (shape === 'diamond') {
    ctx.beginPath();
    ctx.moveTo(0, -s * 0.85);
    ctx.lineTo(s * 0.65, 0);
    ctx.lineTo(0, s * 0.85);
    ctx.lineTo(-s * 0.65, 0);
    ctx.closePath();
    ctx.fill();
  } else {
    ctx.lineWidth = 2;
    ctx.strokeStyle = p.color;
    ctx.beginPath();
    ctx.arc(0, 0, s * 0.6, 0, Math.PI * 2);
    ctx.stroke();
  }
}

function createParticles(pattern, width, height, palette) {
  const pickColor = () => palette[Math.floor(Math.random() * palette.length)];
  const particles = [];
  const cx = width / 2;
  const cy = height * 0.44;

  const pushP = (x, y, vx, vy, opts = {}) => {
    particles.push({
      x,
      y,
      vx,
      vy,
      size: opts.size ?? 5 + Math.random() * 5,
      rot: Math.random() * Math.PI * 2,
      vRot: (Math.random() - 0.5) * 0.25,
      color: opts.color ?? pickColor(),
      gravity: opts.gravity ?? 0.2,
      drag: opts.drag ?? 0.985,
      sway: opts.sway ?? 0,
      delay: opts.delay ?? 0,
      alpha: 1,
    });
  };

  if (pattern === 'centerBurst') {
    for (let i = 0; i < 64; i++) {
      const a = Math.random() * Math.PI * 2;
      const sp = 3.5 + Math.random() * 8.5;
      pushP(cx, cy, Math.cos(a) * sp, Math.sin(a) * sp - 2);
    }
  } else if (pattern === 'sideCannons') {
    for (let i = 0; i < 64; i++) {
      const fromLeft = i % 2 === 0;
      const x = fromLeft ? 20 : width - 20;
      const y = height * 0.78;
      const a = fromLeft
        ? -Math.PI / 3 + (Math.random() - 0.5) * 0.45
        : (-2 * Math.PI) / 3 + (Math.random() - 0.5) * 0.45;
      const sp = 9 + Math.random() * 7;
      pushP(x, y, Math.cos(a) * sp, Math.sin(a) * sp);
    }
  } else if (pattern === 'skyRockets') {
    const shells = 4;
    for (let s = 0; s < shells; s++) {
      const sx = width * (0.2 + s * 0.2) + (Math.random() - 0.5) * 40;
      const sy = height * (0.25 + Math.random() * 0.22);
      const delay = s * 160;
      for (let i = 0; i < 20; i++) {
        const a = (i / 20) * Math.PI * 2 + Math.random() * 0.2;
        const sp = 2.5 + Math.random() * 5.5;
        pushP(sx, sy, Math.cos(a) * sp, Math.sin(a) * sp, {
          delay,
          gravity: 0.14,
          drag: 0.96,
        });
      }
    }
  } else if (pattern === 'topRain') {
    for (let i = 0; i < 72; i++) {
      pushP(
        Math.random() * width,
        -10 - Math.random() * 80,
        (Math.random() - 0.5) * 2.2,
        2.5 + Math.random() * 4,
        { gravity: 0.08, drag: 0.995, sway: 0.06 }
      );
    }
  } else if (pattern === 'fountain') {
    for (let i = 0; i < 70; i++) {
      const a = -Math.PI / 2 + (Math.random() - 0.5) * 0.55;
      const sp = 8 + Math.random() * 8;
      pushP(cx, height - 10, Math.cos(a) * sp, Math.sin(a) * sp, {
        delay: (i % 10) * 35,
        gravity: 0.24,
      });
    }
  } else if (pattern === 'spiralVortex') {
    for (let i = 0; i < 68; i++) {
      const a = i * 0.42;
      const sp = 2 + (i / 68) * 8;
      pushP(cx, cy, Math.cos(a) * sp, Math.sin(a) * sp, {
        delay: i * 8,
        gravity: 0.12,
      });
    }
  } else if (pattern === 'ringShockwave') {
    for (let i = 0; i < 48; i++) {
      const a = (i / 48) * Math.PI * 2;
      const sp = 7.5;
      pushP(cx, cy, Math.cos(a) * sp, Math.sin(a) * sp, {
        gravity: 0.08,
        drag: 0.97,
      });
    }
    for (let i = 0; i < 20; i++) {
      const a = Math.random() * Math.PI * 2;
      const sp = 2 + Math.random() * 3;
      pushP(cx, cy, Math.cos(a) * sp, Math.sin(a) * sp, { gravity: 0.12 });
    }
  } else if (pattern === 'cornerCrossfire') {
    const corners = [
      [0, 0, Math.PI / 4],
      [width, 0, (3 * Math.PI) / 4],
      [0, height, -Math.PI / 4],
      [width, height, (-3 * Math.PI) / 4],
    ];
    corners.forEach(([x, y, baseA]) => {
      for (let i = 0; i < 16; i++) {
        const a = baseA + (Math.random() - 0.5) * 0.5;
        const sp = 7 + Math.random() * 6;
        pushP(x, y, Math.cos(a) * sp, Math.sin(a) * sp, { gravity: 0.15 });
      }
    });
  } else if (pattern === 'chrysanthemum') {
    const rings = [4.5, 8.2];
    rings.forEach((sp, rIdx) => {
      for (let i = 0; i < 32; i++) {
        const a = (i / 32) * Math.PI * 2 + rIdx * 0.1;
        pushP(cx, cy, Math.cos(a) * sp, Math.sin(a) * sp, {
          delay: rIdx * 120,
          gravity: 0.13,
          drag: 0.965,
        });
      }
    });
  } else {
    // zigzagCascade
    for (let i = 0; i < 64; i++) {
      const t = i / 64;
      const x = width * (0.1 + t * 0.8);
      const y = height * (0.18 + Math.sin(t * Math.PI * 3) * 0.08);
      const a = -Math.PI / 2 + (Math.random() - 0.5) * 1.4;
      const sp = 3 + Math.random() * 4.5;
      pushP(x, y, Math.cos(a) * sp, Math.sin(a) * sp, {
        delay: i * 12,
        gravity: 0.16,
      });
    }
  }

  return particles;
}

export function launchConfetti() {
  if (typeof window === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const pattern = PATTERNS[Math.floor(Math.random() * PATTERNS.length)];
  const shape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
  const palette = PALETTES[Math.floor(Math.random() * PALETTES.length)];

  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.inset = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '30';
  document.body.appendChild(canvas);

  const dpr = window.devicePixelRatio || 1;
  const width = window.innerWidth;
  const height = window.innerHeight;
  canvas.width = width * dpr;
  canvas.height = height * dpr;

  const ctx = canvas.getContext('2d');
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  const particles = createParticles(pattern, width, height, palette);
  const startTime = performance.now();
  const duration = 1750;

  const frame = (now) => {
    const elapsed = now - startTime;
    ctx.clearRect(0, 0, width, height);

    for (const p of particles) {
      if (elapsed < p.delay) continue;
      const age = elapsed - p.delay;

      p.vy += p.gravity;
      p.vx *= p.drag;
      p.vy *= p.drag;
      if (p.sway) {
        p.vx += Math.sin(age * 0.012) * p.sway;
      }
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.vRot;

      if (elapsed > duration * 0.62) {
        p.alpha = Math.max(
          0,
          1 - (elapsed - duration * 0.62) / (duration * 0.38)
        );
      }

      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      drawShape(ctx, p, shape);
      ctx.restore();
    }

    if (elapsed < duration) {
      requestAnimationFrame(frame);
    } else {
      canvas.remove();
    }
  };

  requestAnimationFrame(frame);
}
