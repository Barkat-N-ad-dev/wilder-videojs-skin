import React from 'react';
import { SculpturalFlightBird } from './BirdIcons';

interface WilderViewportProps {
  children?: React.ReactNode;
  isPlaying: boolean;
  onTogglePlay: () => void;
  isLoading: boolean;
  title: string;
  series: string;
  location: string;
  aspectRatio?: '16/9' | '21/9' | '4/3';
  showControls: boolean;
}

export const WilderViewport: React.FC<WilderViewportProps> = ({
  children,
  isPlaying,
  onTogglePlay,
  isLoading,
  title,
  series,
  location,
  aspectRatio = '16/9',
  showControls,
}) => {
  const aspectClass =
    aspectRatio === '21/9'
      ? 'aspect-21-9'
      : aspectRatio === '4/3'
      ? 'aspect-4-3'
      : 'aspect-16-9';

  return (
    <div
      className={`wilder-cinema-viewport ${aspectClass}`}
      onClick={(e) => {
        // Toggle play if user clicks directly on the video viewport (not controls)
        if ((e.target as HTMLElement).tagName === 'VIDEO' || (e.target as HTMLElement).classList.contains('wilder-cinema-viewport')) {
          onTogglePlay();
        }
      }}
    >
      {/* Real Video Element */}
      {children}

      {/* Realistic Distant Soaring Silhouettes in Ambient Sky */}
      <div className="ambient-distant-sky" aria-hidden="true">
        <div className="distant-glider glider-1" />
        <div className="distant-glider glider-2" />
      </div>

      {/* Top Left: Editorial Brand Watermark */}
      <div className={`viewport-watermark ${showControls ? 'fade-in' : 'fade-out'}`}>
        <div className="watermark-emblem">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C12 17 15 13 20 12C20 6.5 17.5 2 12 2Z"
              fill="#a2ea4c"
            />
            <path
              d="M12 22C17.5 22 21 18 21 13C16 13 13 17 12 22Z"
              fill="#ffd866"
              opacity="0.85"
            />
          </svg>
        </div>
        <div className="watermark-titles">
          <span className="watermark-brand">WILDER</span>
          <span className="watermark-sub">{series} // {location}</span>
        </div>
      </div>

      {/* Top Right: Documentary Broadcast Status Tag */}
      <div className={`viewport-top-specs ${showControls ? 'fade-in' : 'fade-out'}`}>
        <span className="spec-pill">4K UHD</span>
        <span className="spec-pill audio-pill">NATURAL ACOUSTICS</span>
      </div>

      {/* Magnificent Center Bird Play / Pause Trigger */}
      {(!isPlaying || isLoading) && (
        <div className="viewport-center-stage">
          {isLoading ? (
            <div className="wilder-loader-spinner" aria-label="Loading stream">
              <div className="sun-ring ring-1" />
              <div className="sun-ring ring-2" />
            </div>
          ) : (
            <button
              type="button"
              className="center-avian-play-btn"
              onClick={(e) => {
                e.stopPropagation();
                onTogglePlay();
              }}
              aria-label="Play documentary film"
              title="Play"
            >
              {/* Outer Golden Solar Flare Ring */}
              <div className="avian-sun-corona" />
              
              {/* Inner Glowing Sun Disc */}
              <div className="avian-disc">
                <SculpturalFlightBird size={58} className="center-bird-svg" />
              </div>

              {/* Minimalist Editorial Affordance */}
              <span className="avian-play-label">WATCH FILM</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
};
