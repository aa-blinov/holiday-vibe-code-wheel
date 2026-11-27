import { useEffect, useMemo, useRef, useState } from 'react';

const CLOSE_DURATION_MS = 170;

export function ChallengeModal({
  entry,
  challenge,
  canSpinAgain = false,
  onSpinAgain,
  onClose,
  onToggleBuilt,
  onUpdateBuildUrl,
}) {
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const closeTimerRef = useRef(null);
  const modalRef = useRef(null);

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

  const shareUrl = useMemo(() => {
    if (!challenge || typeof window === 'undefined') return '';
    return `${window.location.origin}${window.location.pathname}?idea=${encodeURIComponent(challenge.id)}`;
  }, [challenge]);

  useEffect(() => {
    setIsClosing(false);
    setCopiedPrompt(false);
    setCopiedShare(false);
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
    const prevFocused = document.activeElement;
    const prevOverflow = document.body.style.overflow;
    const prevPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    modalRef.current?.focus();

    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPaddingRight;
      if (prevFocused && typeof prevFocused.focus === 'function') {
        prevFocused.focus();
      }
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

  const handleShare = async () => {
    const shareText = `Today's build on Holiday Vibe-Code Wheel: ${challenge.title} (${challenge.timeEstimate})\n${shareUrl}`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: challenge.title,
          text: `Today's build on Holiday Vibe-Code Wheel: ${challenge.title}`,
          url: shareUrl,
        });
        return;
      } catch {
        // Fallback to clipboard if user cancels or share fails
      }
    }
    try {
      await navigator.clipboard.writeText(shareText);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 1800);
    } catch {
      // Clipboard may be unavailable outside HTTPS/localhost
    }
  };

  const encodedPrompt = encodeURIComponent(fullPromptText);
  const chatGptUrl = `https://chatgpt.com/?q=${encodedPrompt}`;
  const claudeUrl = `https://claude.ai/new?q=${encodedPrompt}`;

  return (
    <div
      className={`modal-backdrop ${isClosing ? 'is-closing' : ''}`}
      onClick={() => requestClose()}
    >
      <div
        ref={modalRef}
        tabIndex={-1}
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
          <div className="prompt-preview-head">
            <span className="constraint-label">Full prompt to copy</span>
            <div className="ai-launch-links">
              <a
                href={chatGptUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ai-link"
              >
                Open in ChatGPT ↗
              </a>
              <a
                href={claudeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ai-link"
              >
                Open in Claude ↗
              </a>
            </div>
          </div>
          <pre
            className="prompt-preview-box"
            tabIndex={0}
            aria-label="Full prompt text"
          >
            {fullPromptText}
          </pre>
        </div>

        {entry && onUpdateBuildUrl && (
          <div className="build-url-wrap">
            <label htmlFor="build-url-input" className="constraint-label">
              Your build link (optional)
            </label>
            <input
              id="build-url-input"
              type="url"
              className="build-url-input"
              value={entry.buildUrl || ''}
              onChange={(e) => onUpdateBuildUrl(entry.id, e.target.value)}
              placeholder="https://github.com/... or live demo URL"
            />
          </div>
        )}

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
            onClick={handleShare}
          >
            {copiedShare ? 'Share text copied' : 'Share'}
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
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M4 4l10 10M14 4L4 14" />
          </svg>
        </button>
      </div>
    </div>
  );
}
