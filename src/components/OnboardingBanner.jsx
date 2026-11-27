export function OnboardingBanner({ onDismiss }) {
  return (
    <section className="onboarding-banner" aria-label="How it works">
      <div className="onboarding-head">
        <h2 className="onboarding-title">First time here? Three quick steps</h2>
        <button type="button" className="btn-ghost" onClick={onDismiss}>
          Got it
        </button>
      </div>

      <div className="onboarding-steps">
        <div className="onboarding-step">
          <span className="step-num">1</span>
          <div>
            <strong>Pick a deck</strong>
            <p>
              Filter by Micro-SaaS, Dev Tools, Games, Creative, or Holiday. Every spin deals 12 fresh ideas.
            </p>
          </div>
        </div>

        <div className="onboarding-step">
          <span className="step-num">2</span>
          <div>
            <strong>Spin once a day</strong>
            <p>
              Advent lock saves one official mission per day. Switch on Practice mode for unlimited spins.
            </p>
          </div>
        </div>

        <div className="onboarding-step">
          <span className="step-num">3</span>
          <div>
            <strong>Build &amp; track</strong>
            <p>
              Copy the prompt into your editor, ship it in ~20 minutes, and mark it Built in your streak.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
