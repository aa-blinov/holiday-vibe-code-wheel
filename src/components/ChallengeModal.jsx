import { useEffect, useState } from 'react';

export function ChallengeModal({ entry, challenge, onClose, onToggleBuilt }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!challenge) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [challenge, onClose]);

  if (!challenge) return null;

  const handleCopy = async () => {
    const text = `${challenge.title} (${challenge.category}, ${challenge.timeEstimate})\n\nBrief: ${challenge.prompt}\nConstraint: ${challenge.vibeRule}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard may be unavailable outside HTTPS/localhost
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-card"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="challenge-title"
      >
        <div className="modal-meta">
          <span className="meta-label">{challenge.category}</span>
          <span className="meta-mono">{challenge.timeEstimate}</span>
        </div>

        <h2 id="challenge-title" className="modal-title">
          {challenge.title}
        </h2>

        <p className="modal-prompt">{challenge.prompt}</p>

        <div className="constraint-box">
          <span className="constraint-label">Build constraint</span>
          <p className="constraint-text">{challenge.vibeRule}</p>
        </div>

        <div className="modal-actions">
          <button type="button" className="btn-secondary" onClick={handleCopy}>
            {copied ? 'Prompt copied' : 'Copy prompt'}
          </button>

          {entry && (
            <button
              type="button"
              className={`btn-primary ${entry.built ? 'is-built' : ''}`}
              onClick={() => onToggleBuilt(entry.id)}
            >
              {entry.built ? 'Marked as built' : 'Mark as built'}
            </button>
          )}
        </div>

        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Close dialog"
        >
          ×
        </button>
      </div>
    </div>
  );
}
