import React, { useState } from 'react';
import { TwistedBranchSearchBar } from './FantasyAvianDecor';
import { Search, Compass, X, Sparkles, Award, ShieldCheck, Flame } from 'lucide-react';

interface FantasyTopNavProps {
  onSearch?: (query: string) => void;
  activeSearchQuery?: string;
}

export const FantasyTopNav: React.FC<FantasyTopNavProps> = ({
  onSearch,
  activeSearchQuery = '',
}) => {
  const [query, setQuery] = useState<string>(activeSearchQuery);
  const [showProfile, setShowProfile] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };

  return (
    <header className="fantasy-top-nav">
      {/* LEFT: WILDER Brand Identity (Replacing YouTube logo) */}
      <div className="fantasy-brand-section">
        {/* White doves and hummingbird decorative cluster taking flight */}
        <div className="flying-doves-cluster" aria-hidden="true">
          <div className="dove-silhouette dove-1" />
          <div className="dove-silhouette dove-2" />
          <div className="dove-silhouette dove-3" />
          <div className="dove-silhouette dove-4" />
        </div>

        {/* WILDER Primary Logo Pill */}
        <div className="wilder-nature-brand-pill">
          {/* Glowing Green & Gold Leaf/Hummingbird Medallion */}
          <div className="wilder-emblem-disc">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C12 17 15 13 20 12C20 6.5 17.5 2 12 2Z"
                fill="#88d63a"
              />
              <path
                d="M12 22C17.5 22 21 18 21 13C16 13 13 17 12 22Z"
                fill="#ffd466"
                opacity="0.9"
              />
            </svg>
            <div className="emblem-halo-pulse" />
          </div>

          <div className="wilder-titles">
            <span className="brand-wordmark">WILDER</span>
            <span className="brand-subtext">Nature in Motion</span>
          </div>
        </div>
      </div>

      {/* CENTER: Serpentine Twisted Tree Branch Search Bar */}
      <div className="fantasy-search-container">
        <form onSubmit={handleSubmit} className="branch-search-form">
          {/* Twisted Bark Frame SVG */}
          <TwistedBranchSearchBar className="branch-search-frame" />

          {/* Search Input Field */}
          <div className="branch-input-wrapper">
            <input
              type="text"
              placeholder="Search Nature Documentaries..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                if (onSearch) onSearch(e.target.value);
              }}
              className="branch-search-input"
              aria-label="Search nature videos"
            />
            {query && (
              <button
                type="button"
                className="branch-clear-btn"
                onClick={() => {
                  setQuery('');
                  if (onSearch) onSearch('');
                }}
                aria-label="Clear search"
              >
                <X size={14} />
              </button>
            )}
            <button
              type="submit"
              className="branch-search-submit"
              aria-label="Submit search"
              title="Search"
            >
              <Search size={17} />
            </button>
          </div>
        </form>
      </div>

      {/* RIGHT: Nature Guide Bear Medallion Avatar */}
      <div className="fantasy-user-section">
        <button
          type="button"
          className="nature-guide-avatar-btn"
          onClick={() => setShowProfile(!showProfile)}
          aria-label="Nature Guide Profile"
          title="Nature Guide"
        >
          <div className="avatar-wooden-frame">
            <img
              src="https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=140&q=85"
              alt="Nature Guide Bear"
              className="avatar-bear-img"
            />
            <div className="avatar-gold-sheen" />
          </div>
          <span className="avatar-guide-label">Nature Guide</span>
        </button>

        {/* Profile Popover Menu */}
        {showProfile && (
          <div className="nature-guide-popover">
            <div className="popover-header">
              <div className="popover-bear-thumb">
                <img
                  src="https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=80&q=80"
                  alt="Bear"
                />
              </div>
              <div>
                <div className="popover-name">Forest Ranger Grizz</div>
                <div className="popover-rank">
                  <ShieldCheck size={12} color="#88d63a" />
                  <span>Master Naturalist</span>
                </div>
              </div>
            </div>

            <div className="popover-divider" />

            <div className="popover-badges-row">
              <span className="naturalist-badge">
                <Award size={11} color="#ffd466" />
                <span>Canopy Scout</span>
              </span>
              <span className="naturalist-badge">
                <Flame size={11} color="#f97316" />
                <span>4K Master</span>
              </span>
            </div>

            <div className="popover-stats">
              <div className="popover-stat-item">
                <span className="stat-number">52</span>
                <span className="stat-tag">Biomes</span>
              </div>
              <div className="popover-stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-tag">HDR 60</span>
              </div>
            </div>

            <button
              type="button"
              className="popover-action-btn"
              onClick={() => setShowProfile(false)}
            >
              <Sparkles size={13} color="#88d63a" />
              <span>Sanctuary Mode Active</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
