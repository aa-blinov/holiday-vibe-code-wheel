export function AdventStrip({ history }) {
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
            One official spin per day across 25 winter builds.
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

          return (
            <div
              key={dayNum}
              className={`advent-cell ${isUnlocked ? 'unlocked' : ''} ${isBuilt ? 'built' : ''}`}
              title={
                spin
                  ? `Day ${dayNum} (${spin.date}): ${spin.title}`
                  : `Day ${dayNum}: Locked`
              }
            >
              <span className="advent-day">{dayNum}</span>
              <span className="advent-status">
                {isBuilt ? 'Built' : isUnlocked ? 'Open' : ''}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
