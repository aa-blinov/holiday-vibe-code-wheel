import { useState } from 'react';

export function AdventStrip({ history, onSelectEntry }) {
  const [copiedSummary, setCopiedSummary] = useState(false);

  const officialSpins = history
    .filter((item) => !item.isPractice)
    .slice()
    .reverse();
  const totalSlots = 25;
  const unlockedCount = officialSpins.length;
  const cycleIndex = Math.floor(Math.max(0, unlockedCount - 1) / totalSlots);
  const offset = cycleIndex * totalSlots;
  const builtSpins = officialSpins.filter((item) => item.built);
  const builtCount = builtSpins.length;

  const handleCopySummary = async () => {
    const lines = [
      `Holiday Vibe-Code Wheel (${builtCount} built / ${unlockedCount} unlocked)`,
      '',
      ...builtSpins.map((item, idx) => {
        const linkPart = item.buildUrl ? ` — ${item.buildUrl}` : '';
        return `${idx + 1}. [${item.date}] ${item.title}${linkPart}`;
      }),
    ];
    try {
      await navigator.clipboard.writeText(lines.join('\n'));
      setCopiedSummary(true);
      setTimeout(() => setCopiedSummary(false), 1800);
    } catch {
      // Clipboard may be unavailable outside HTTPS/localhost
    }
  };

  return (
    <section className="panel">
      <div className="panel-header">
        <div>
          <h2 className="panel-title">
            {cycleIndex > 0 ? `Build streak (Cycle ${cycleIndex + 1})` : 'Advent streak'}
          </h2>
          <p className="panel-subtitle">
            One official spin per day. Click an unlocked day to open its prompt.
          </p>
        </div>
        <div className="stats-group">
          <span className="stat-chip">
            {unlockedCount <= 25 ? `${unlockedCount}/25` : unlockedCount} unlocked
          </span>
          <span className="stat-chip is-accent">{builtCount} built</span>
          {builtCount > 0 && (
            <button
              type="button"
              className="btn-ghost"
              onClick={handleCopySummary}
            >
              {copiedSummary ? 'Copied' : 'Export log'}
            </button>
          )}
        </div>
      </div>

      <div className="advent-grid">
        {Array.from({ length: totalSlots }, (_, idx) => {
          const dayNum = offset + idx + 1;
          const spin = officialSpins[offset + idx];
          const isUnlocked = Boolean(spin);
          const isBuilt = Boolean(spin?.built);

          if (!isUnlocked) {
            return (
              <div key={dayNum} className="advent-cell">
                <span className="advent-day">{dayNum}</span>
                <span className="advent-status" />
              </div>
            );
          }

          return (
            <button
              key={dayNum}
              type="button"
              className={`advent-cell is-clickable unlocked ${isBuilt ? 'built' : ''}`}
              onClick={() => onSelectEntry(spin)}
              title={`Day ${dayNum} (${spin.date}): ${spin.title}`}
            >
              <span className="advent-day">{dayNum}</span>
              <span className="advent-status">{isBuilt ? 'Built' : 'Open'}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
