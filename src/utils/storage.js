const STORAGE_KEY = 'vibe_code_wheel_v1';

export function getTodayKey() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function isHolidaySeason(date = new Date()) {
  const m = date.getMonth();
  const d = date.getDate();
  return m === 11 || (m === 10 && d >= 15) || (m === 0 && d <= 10);
}

export function getDefaultTheme() {
  return isHolidaySeason() ? 'holiday' : 'dark';
}

export function loadState() {
  const defaultTheme = getDefaultTheme();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return {
        history: [],
        practiceMode: false,
        theme: defaultTheme,
        onboardingSeen: false,
        soundEnabled: true,
      };
    }
    const parsed = JSON.parse(raw);
    const validTheme =
      parsed.theme === 'holiday' ||
      parsed.theme === 'dark' ||
      parsed.theme === 'paper'
        ? parsed.theme
        : defaultTheme;
    return {
      history: Array.isArray(parsed.history) ? parsed.history : [],
      practiceMode: Boolean(parsed.practiceMode),
      theme: validTheme,
      onboardingSeen: Boolean(parsed.onboardingSeen),
      soundEnabled: parsed.soundEnabled !== false,
    };
  } catch {
    return {
      history: [],
      practiceMode: false,
      theme: defaultTheme,
      onboardingSeen: false,
      soundEnabled: true,
    };
  }
}

export function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Ignore storage quota errors in private browsing
  }
}

export function hasSpunToday(history) {
  const today = getTodayKey();
  return history.some((entry) => entry.date === today && !entry.isPractice);
}

export function getTodayEntry(history) {
  const today = getTodayKey();
  return history.find((entry) => entry.date === today && !entry.isPractice) || null;
}
