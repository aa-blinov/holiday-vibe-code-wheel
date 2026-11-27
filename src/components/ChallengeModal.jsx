import { useEffect, useMemo, useRef, useState } from 'react';

const CLOSE_DURATION_MS = 170;

export function ChallengeModal({
  entry,
  challenge,
  canSpinAgain = false,
  onSpinAgain,
  onClose,
  onToggleBuilt,
}) {
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const closeTimerRef = useRef(null);

  const fullPromptText = useMemo(() => {
    if (!challenge) return '';
    return [
      `Project: ${challenge.title}`,
      `Category: ${challenge.category} (${challenge.timeEstimate})`,
      '',
      `Task: ${challenge.prompt}`,
      `Constraint: ${challenge.vibeRule}`,
      '',
      'Keep the scope small enough to ship in one sitting.',
    ].join('\n');
  }, [challenge]);

  useEffect(() => {
    setIsClosing(false);
    setCopiedPrompt(false);
    setCopiedLink(false);
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    };
  }, [challenge]);

  const requestClose = (callback = onClose) => {
    if (isClosing) return;
    setIsClosing(true);
    closeTimerRef.current = setTimeout(() => {
      setIsClosing(false);
      callback();
    }, CLOSE_DURATION_MS);
  };

  useEffect(() => {
    if (!challenge) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [challenge]);

  useEffect(() => {
    if (!challenge) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') requestClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [challenge, isClosing]);

  if (!challenge) return null;

  const handleCopyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(fullPromptText);
      setCopiedPrompt(true);
      setTimeout(() => setCopiedPrompt(false), 1800);
    } catch {
      // Clipboard may be unavailable outside HTTPS/localhost
    }
  };

  const handleCopyLink = async () => {
    const shareUrl = `${window.location.origin}${window.location.pathname}?idea=${encodeURIComponent(challenge.id)}`;
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 1800);
    } catch {
      // Clipboard may be unavailable outside HTTPS/localhost
    }
  };

  return (
    <div
      className={`modal-backdrop ${isClosing ? 'is-closing' : ''}`}
      onClick={() => requestClose()}
    >
      <div
        className={`modal-card ${isClosing ? 'is-closing' : ''}`}
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

        <div className="prompt-preview-wrap">
          <span className="constraint-label">Full prompt to copy</span>
          <pre
            className="prompt-preview-box"
            tabIndex={0}
            aria-label="Full prompt text"
          >
            {fullPromptText}
          </pre>
        </div>

        <div className="modal-actions">
          <button
            type="button"
            className="btn-secondary"
            onClick={handleCopyPrompt}
          >
            {copiedPrompt ? 'Prompt copied' : 'Copy prompt'}
          </button>

          <button
            type="button"
            className="btn-secondary"
            onClick={handleCopyLink}
          >
            {copiedLink ? 'Link copied' : 'Copy link'}
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

        {canSpinAgain && onSpinAgain && (
          <button
            type="button"
            className="btn-ghost modal-spin-again"
            onClick={() => requestClose(onSpinAgain)}
          >
            Spin again
          </button>
        )}

        <button
          type="button"
          className="modal-close"
          onClick={() => requestClose()}
          aria-label="Close dialog"
        >
          ×
        </button>
      </div>
    </div>
  );
}
