import { useEffect, useMemo, useState } from 'react';
import {
  DECKS,
  drawWheelIdeas,
  findIdeaById,
} from './data/challenges';
import {
  getTodayEntry,
  getTodayKey,
  hasSpunToday,
  loadState,
  saveState,
} from './utils/storage';
import { SpinWheel } from './components/SpinWheel';
import { ChallengeModal } from './components/ChallengeModal';
import { AdventStrip } from './components/AdventStrip';
import { HistoryPanel } from './components/HistoryPanel';
import { CatalogPanel } from './components/CatalogPanel';
import { Snowfall } from './components/Snowfall';
import { OnboardingBanner } from './components/OnboardingBanner';
import { launchConfetti } from './utils/confetti';

function getNewYearCountdown() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDate();

  // Nov 15 – Dec 31: live countdown with seconds to Jan 1
  if (month === 11 || (month === 10 && day >= 15)) {
    const nextYear = year + 1;
    const target = new Date(nextYear, 0, 1, 0, 0, 0);
    const diffMs = Math.max(0, target.getTime() - now.getTime());
    const totalSec = Math.floor(diffMs / 1000);
    const days = Math.floor(totalSec / 86400);
    const hours = String(Math.floor((totalSec % 86400) / 3600)).padStart(2, '0');
    const mins = String(Math.floor((totalSec % 3600) / 60)).padStart(2, '0');
    const secs = String(totalSec % 60).padStart(2, '0');
    return `${days}d ${hours}h ${mins}m ${secs}s to ${nextYear}`;
  }

  // Jan 1 – Jan 10: New Year week
  if (month === 0 && day <= 10) {
    return `Happy ${year} / Day ${day}`;
  }

  // Rest of the year: evergreen daily build counter
  const startOfYear = new Date(year, 0, 0);
  const dayOfYear = Math.floor(
    (now.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24)
  );
  return `Day ${dayOfYear} of ${year}`;
}

export default function App() {
  const [state, setState] = useState(() => loadState());
  const [activeDeck, setActiveDeck] = useState('mix');
  const [wheelItems, setWheelItems] = useState(() => drawWheelIdeas('mix', 12));
  const [activeEntryId, setActiveEntryId] = useState(null);
  const [previewChallenge, setPreviewChallenge] = useState(() => {
    const ideaId = new URLSearchParams(window.location.search).get('idea');
    return ideaId ? findIdeaById(ideaId) : null;
  });
  const [spinRequestId, setSpinRequestId] = useState(0);
  const [countdown, setCountdown] = useState(() => getNewYearCountdown());

  useEffect(() => {
    saveState(state);
    document.documentElement.dataset.theme = state.theme;
  }, [state]);

  useEffect(() => {
    const id = setInterval(() => {
      setCountdown(getNewYearCountdown());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const handleSelectDeck = (deckId) => {
    setActiveDeck(deckId);
    setWheelItems(drawWheelIdeas(deckId, 12));
  };

  const handleBeforeSpin = () => {
    const fresh = drawWheelIdeas(activeDeck, 12);
    setWheelItems(fresh);
    return fresh;
  };

  const spunToday = useMemo(
    () => hasSpunToday(state.history),
    [state.history]
  );

  const todayEntry = useMemo(
    () => getTodayEntry(state.history),
    [state.history]
  );

  const wheelDisabled = !state.practiceMode && spunToday;

  const activeEntry = useMemo(
    () => state.history.find((item) => item.id === activeEntryId) || null,
    [state.history, activeEntryId]
  );

  const activeChallenge = useMemo(() => {
    if (activeEntry) {
      return findIdeaById(activeEntry.challengeId);
    }
    return previewChallenge;
  }, [activeEntry, previewChallenge]);

  const handleSpinComplete = (challenge) => {
    const newEntry = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      date: getTodayKey(),
      challengeId: challenge.id,
      title: challenge.title,
      built: false,
      isPractice: state.practiceMode,
    };

    setState((prev) => ({
      ...prev,
      onboardingSeen: true,
      history: [newEntry, ...prev.history],
    }));
    setPreviewChallenge(null);
    setActiveEntryId(newEntry.id);
    requestAnimationFrame(() => launchConfetti());
  };

  const handleToggleBuilt = (entryId) => {
    setState((prev) => ({
      ...prev,
      history: prev.history.map((item) =>
        item.id === entryId ? { ...item, built: !item.built } : item
      ),
    }));
  };

  const handleUpdateBuildUrl = (entryId, buildUrl) => {
    setState((prev) => ({
      ...prev,
      history: prev.history.map((item) =>
        item.id === entryId ? { ...item, buildUrl } : item
      ),
    }));
  };

  const handleTogglePractice = () => {
    setState((prev) => ({
      ...prev,
      practiceMode: !prev.practiceMode,
    }));
  };

  const handleToggleTheme = () => {
    const order = ['holiday', 'dark', 'paper'];
    setState((prev) => {
      const next = order[(order.indexOf(prev.theme) + 1) % order.length];
      return { ...prev, theme: next };
    });
  };

  const handleToggleSound = () => {
    setState((prev) => ({
      ...prev,
      soundEnabled: !prev.soundEnabled,
    }));
  };

  const handleDismissOnboarding = () => {
    setState((prev) => ({
      ...prev,
      onboardingSeen: true,
    }));
  };

  const handleClearHistory = () => {
    setState((prev) => ({
      ...prev,
      history: [],
    }));
    setActiveEntryId(null);
  };

  const handleCloseModal = () => {
    setActiveEntryId(null);
    setPreviewChallenge(null);
    if (window.location.search.includes('idea=')) {
      const url = new URL(window.location.href);
      url.searchParams.delete('idea');
      const next = url.pathname + (url.search ? url.search : '') + url.hash;
      window.history.replaceState(null, '', next);
    }
  };

  return (
    <div className="app-shell">
      {state.theme === 'holiday' && <Snowfall />}
      <header className="topbar">
        <div className="topbar-left">
          <h1 className="brand-title">Holiday Vibe-Code Wheel</h1>
          <p className="brand-sub">
            Daily prompts for small web tools and services.
          </p>
        </div>

        <div className="topbar-controls">
          <button
            type="button"
            className="topbar-text-btn"
            onClick={handleToggleSound}
          >
            {state.soundEnabled ? 'Sound on' : 'Sound off'}
          </button>

          <button
            type="button"
            className="topbar-text-btn"
            onClick={handleToggleTheme}
          >
            {state.theme === 'holiday'
              ? 'Theme: New Year'
              : state.theme === 'dark'
                ? 'Theme: Dark'
                : 'Theme: Light'}
          </button>

          <label className="mode-toggle">
            <input
              type="checkbox"
              checked={state.practiceMode}
              onChange={handleTogglePractice}
            />
            <span className="toggle-track" />
            <span className="toggle-label">
              {state.practiceMode ? 'Practice mode' : 'Daily lock'}
            </span>
          </label>
        </div>
      </header>

      <div className="deck-bar">
        <div className="deck-tabs" role="tablist" aria-label="Service decks">
          {DECKS.map((deck) => (
            <button
              key={deck.id}
              type="button"
              role="tab"
              aria-selected={activeDeck === deck.id}
              className={`deck-tab ${activeDeck === deck.id ? 'is-active' : ''}`}
              onClick={() => handleSelectDeck(deck.id)}
            >
              {deck.label}
            </button>
          ))}
        </div>

        <select
          className="deck-select"
          aria-label="Category deck"
          value={activeDeck}
          onChange={(e) => handleSelectDeck(e.target.value)}
        >
          {DECKS.map((deck) => (
            <option key={deck.id} value={deck.id}>
              {deck.label}
            </option>
          ))}
        </select>

        <button
          type="button"
          className="topbar-text-btn"
          onClick={() => setWheelItems(drawWheelIdeas(activeDeck, 12))}
        >
          Shuffle wheel
        </button>
      </div>

      {!state.onboardingSeen && (
        <OnboardingBanner onDismiss={handleDismissOnboarding} />
      )}

      <main className="main-grid">
        <section className="wheel-section">
          <div className="wheel-countdown">{countdown}</div>
          <SpinWheel
            items={wheelItems}
            disabled={wheelDisabled}
            theme={state.theme}
            soundEnabled={state.soundEnabled}
            spinRequestId={spinRequestId}
            onBeforeSpin={handleBeforeSpin}
            onSpinComplete={handleSpinComplete}
          />
          {wheelDisabled && (
            <p className="lock-note">
              Already spun today. Turn on <strong>Practice mode</strong> above for extra rolls.
            </p>
          )}
        </section>

        <div className="side-column">
          <AdventStrip
            history={state.history}
            onSelectEntry={(entry) => {
              setPreviewChallenge(null);
              setActiveEntryId(entry.id);
            }}
          />
          <HistoryPanel
            history={state.history}
            onSelectEntry={(entry) => {
              setPreviewChallenge(null);
              setActiveEntryId(entry.id);
            }}
            onToggleBuilt={handleToggleBuilt}
            onClearHistory={handleClearHistory}
          />
        </div>
      </main>

      <CatalogPanel
        activeDeck={activeDeck}
        onSelectChallenge={(challenge) => {
          setActiveEntryId(null);
          setPreviewChallenge(challenge);
        }}
      />

      <ChallengeModal
        entry={activeEntry}
        challenge={activeChallenge}
        canSpinAgain={state.practiceMode}
        onSpinAgain={() => {
          handleCloseModal();
          setSpinRequestId((n) => n + 1);
        }}
        onClose={handleCloseModal}
        onToggleBuilt={handleToggleBuilt}
        onUpdateBuildUrl={handleUpdateBuildUrl}
      />
    </div>
  );
}
