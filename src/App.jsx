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

export default function App() {
  const [state, setState] = useState(() => loadState());
  const [activeDeck, setActiveDeck] = useState('mix');
  const [wheelItems, setWheelItems] = useState(() => drawWheelIdeas('mix', 12));
  const [activeEntryId, setActiveEntryId] = useState(null);
  const [previewChallenge, setPreviewChallenge] = useState(null);

  useEffect(() => {
    saveState(state);
  }, [state]);

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
      history: [newEntry, ...prev.history],
    }));
    setPreviewChallenge(null);
    setActiveEntryId(newEntry.id);
  };

  const handleToggleBuilt = (entryId) => {
    setState((prev) => ({
      ...prev,
      history: prev.history.map((item) =>
        item.id === entryId ? { ...item, built: !item.built } : item
      ),
    }));
  };

  const handleTogglePractice = () => {
    setState((prev) => ({
      ...prev,
      practiceMode: !prev.practiceMode,
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
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="topbar-left">
          <h1 className="brand-title">Holiday Vibe-Code Wheel</h1>
          <p className="brand-sub">
            Daily prompts for small web tools and services.
          </p>
        </div>

        <div className="topbar-controls">
          <label className="mode-toggle">
            <input
              type="checkbox"
              checked={state.practiceMode}
              onChange={handleTogglePractice}
            />
            <span className="toggle-track" />
            <span className="toggle-label">
              {state.practiceMode ? 'Practice mode (unlimited)' : 'Advent lock (1/day)'}
            </span>
          </label>

          {todayEntry && (
            <button
              type="button"
              className="today-pill"
              onClick={() => {
                setPreviewChallenge(null);
                setActiveEntryId(todayEntry.id);
              }}
            >
              Today: <strong>{todayEntry.title}</strong>
            </button>
          )}
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

        <button
          type="button"
          className="btn-ghost"
          onClick={() => setWheelItems(drawWheelIdeas(activeDeck, 12))}
        >
          Shuffle wheel
        </button>
      </div>

      <main className="main-grid">
        <section className="wheel-section">
          <SpinWheel
            items={wheelItems}
            disabled={wheelDisabled}
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
          <AdventStrip history={state.history} />
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
        onClose={handleCloseModal}
        onToggleBuilt={handleToggleBuilt}
      />
    </div>
  );
}
