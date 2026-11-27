export function HistoryPanel({ history, onSelectEntry, onToggleBuilt, onClearHistory }) {
  return (
    <section className="panel">
      <div className="panel-header">
        <div>
          <h2 className="panel-title">Spin log</h2>
          <p className="panel-subtitle">Daily rolls and practice spins saved locally.</p>
        </div>
        {history.length > 0 && (
          <button
            type="button"
            className="btn-ghost"
            onClick={onClearHistory}
          >
            Reset log
          </button>
        )}
      </div>

      {history.length === 0 ? (
        <div className="empty-state">
          No spins recorded yet. Spin the wheel to draw your first service prompt.
        </div>
      ) : (
        <ul className="history-list">
          {history.map((entry) => (
            <li key={entry.id} className="history-item">
              <button
                type="button"
                className="history-main"
                onClick={() => onSelectEntry(entry)}
              >
                <span className="history-date">
                  {entry.date}
                  {entry.isPractice && (
                    <span className="practice-tag">Practice</span>
                  )}
                  <span className="history-open-cue">Open prompt</span>
                </span>
                <span className="history-title">{entry.title}</span>
              </button>

              <div className="history-actions">
                {entry.buildUrl && (
                  <a
                    href={entry.buildUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost history-link"
                  >
                    Live ↗
                  </a>
                )}
                <button
                  type="button"
                  className={`built-toggle ${entry.built ? 'is-built' : ''}`}
                  onClick={() => onToggleBuilt(entry.id)}
                >
                  {entry.built ? 'Built' : 'Mark built'}
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
