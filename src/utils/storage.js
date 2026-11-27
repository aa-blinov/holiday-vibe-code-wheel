const STORAGE_KEY = 'vibe_code_wheel_v1';

export function getTodayKey() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return {
        history: [],
        practiceMode: false,
        theme: 'holiday',
      };
    }
    const parsed = JSON.parse(raw);
    return {
      history: Array.isArray(parsed.history) ? parsed.history : [],
      practiceMode: Boolean(parsed.practiceMode),
      theme: parsed.theme === 'paper' ? 'paper' : 'holiday',
    };
  } catch {
    return {
      history: [],
      practiceMode: false,
      theme: 'holiday',
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
