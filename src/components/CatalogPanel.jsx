import { useEffect, useState } from 'react';
import { TOTAL_IDEA_COUNT, sampleCatalogIdeas } from '../data/challenges';

export function CatalogPanel({ activeDeck, onSelectChallenge }) {
  const [query, setQuery] = useState('');
  const [items, setItems] = useState(() => sampleCatalogIdeas(activeDeck, 18, ''));

  useEffect(() => {
    setItems(sampleCatalogIdeas(activeDeck, 18, query));
  }, [activeDeck, query]);

  const handleReroll = () => {
    setItems(sampleCatalogIdeas(activeDeck, 18, query));
  };

  return (
    <section className="catalog-section" id="catalog">
      <div className="catalog-header">
        <div>
          <h2 className="catalog-title">
            Idea pool ({TOTAL_IDEA_COUNT.toLocaleString()} combinations)
          </h2>
          <p className="catalog-subtitle">
            Every spin deals 12 fresh prompts from this pool. Search or deal a sample below.
          </p>
        </div>

        <div className="catalog-controls">
          <input
            type="search"
            className="catalog-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search services, tools, twists..."
            aria-label="Search ideas"
          />
          {!query.trim() && (
            <button type="button" className="btn-ghost" onClick={handleReroll}>
              Deal 18 more
            </button>
          )}
        </div>
      </div>

      {items.length === 0 ? (
        <div className="empty-state">
          No ideas matched "{query}". Try another keyword.
        </div>
      ) : (
        <div className="catalog-grid">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`catalog-card deck-${item.deck}`}
              onClick={() => onSelectChallenge(item)}
            >
              <div className="catalog-card-top">
                <span className={`catalog-cat deck-badge-${item.deck}`}>
                  {item.category}
                </span>
                <span className="catalog-time">{item.timeEstimate}</span>
              </div>
              <h3 className="catalog-card-title">{item.title}</h3>
              <p className="catalog-card-desc">{item.prompt}</p>
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
