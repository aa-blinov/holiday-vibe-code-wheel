export function AdventStrip({ history, onSelectEntry }) {
  const officialSpins = history.filter((item) => !item.isPractice);
  const totalSlots = 25;
  const unlockedCount = Math.min(officialSpins.length, totalSlots);
  const builtCount = officialSpins.filter((item) => item.built).length;

  return (
    <section className="panel">
      <div className="panel-header">
        <div>
          <h2 className="panel-title">Advent streak</h2>
          <p className="panel-subtitle">
            One official spin per day. Click an unlocked day to open its prompt.
          </p>
        </div>
        <div className="stats-group">
          <span className="stat-chip">{unlockedCount}/25 unlocked</span>
          <span className="stat-chip is-accent">{builtCount} built</span>
        </div>
      </div>

      <div className="advent-grid">
        {Array.from({ length: totalSlots }, (_, idx) => {
          const dayNum = idx + 1;
          const spin = officialSpins[idx];
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
