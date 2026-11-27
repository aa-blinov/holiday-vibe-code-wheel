let audioCtx = null;
let noiseBuffer = null;

function getAudioContext() {
  if (typeof window === 'undefined') return null;
  const Ctx = window.AudioContext || window.webkitAudioContext;
  if (!Ctx) return null;
  if (!audioCtx) {
    audioCtx = new Ctx();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

function getNoiseBuffer(ctx) {
  if (noiseBuffer && noiseBuffer.sampleRate === ctx.sampleRate) {
    return noiseBuffer;
  }
  const length = Math.floor(ctx.sampleRate * 0.025);
  const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < length; i++) {
    data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (length * 0.25));
  }
  noiseBuffer = buffer;
  return buffer;
}

export function playTick(progress = 0.5) {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const clamped = Math.max(0, Math.min(1, progress));

  // Warm wooden body (pure sine, zero harsh buzz)
  const osc = ctx.createOscillator();
  const bodyGain = ctx.createGain();
  const startFreq = 620 - clamped * 160;
  const endFreq = 180 - clamped * 35;

  osc.type = 'sine';
  osc.frequency.setValueAtTime(startFreq, now);
  osc.frequency.exponentialRampToValueAtTime(endFreq, now + 0.024);

  const vol = 0.055 + clamped * 0.025;
  bodyGain.gain.setValueAtTime(0.001, now);
  bodyGain.gain.linearRampToValueAtTime(vol, now + 0.002);
  bodyGain.gain.exponentialRampToValueAtTime(0.001, now + 0.028);

  osc.connect(bodyGain);
  bodyGain.connect(ctx.destination);
  osc.start(now);
  osc.stop(now + 0.03);

  // Soft tactile flapper transient (bandpass-filtered micro-tap)
  const noise = ctx.createBufferSource();
  noise.buffer = getNoiseBuffer(ctx);

  const filter = ctx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.setValueAtTime(1900 - clamped * 500, now);
  filter.Q.setValueAtTime(2.2, now);

  const tapGain = ctx.createGain();
  tapGain.gain.setValueAtTime(0.04, now);
  tapGain.gain.exponentialRampToValueAtTime(0.001, now + 0.016);

  noise.connect(filter);
  filter.connect(tapGain);
  tapGain.connect(ctx.destination);
  noise.start(now);
}

export function playWinChime() {
  const ctx = getAudioContext();
  if (!ctx) return;

  // Warm celesta-like major 9th arpeggio (C5, E5, G5, D6)
  const notes = [523.25, 659.25, 783.99, 1174.66];
  const now = ctx.currentTime;

  notes.forEach((freq, i) => {
    const start = now + i * 0.068;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, start);

    gain.gain.setValueAtTime(0.001, start);
    gain.gain.linearRampToValueAtTime(0.055, start + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.001, start + 0.45);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(start);
    osc.stop(start + 0.48);
  });
}
