import React, { useState, useRef, useEffect, useCallback } from 'react';
import { GlidingSeekBird } from './BirdIcons';
import type { DocumentaryChapter } from '@/config/media';

interface WilderBranchTimelineProps {
  currentTime: number;
  duration: number;
  bufferedEnd: number;
  chapters?: DocumentaryChapter[];
  onSeek: (time: number) => void;
}

export const WilderBranchTimeline: React.FC<WilderBranchTimelineProps> = ({
  currentTime,
  duration,
  bufferedEnd,
  chapters = [],
  onSeek,
}) => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [hoverPosition, setHoverPosition] = useState<number | null>(null);
  const [hoverTime, setHoverTime] = useState<number>(0);
  const [hoverChapter, setHoverChapter] = useState<DocumentaryChapter | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const safeDuration = duration > 0 ? duration : 100;
  const progressPercent = Math.min(100, Math.max(0, (currentTime / safeDuration) * 100));
  const bufferPercent = Math.min(100, Math.max(0, (bufferedEnd / safeDuration) * 100));

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getPositionRatio = useCallback((clientX: number) => {
    if (!trackRef.current) return 0;
    const rect = trackRef.current.getBoundingClientRect();
    return Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const ratio = getPositionRatio(e.clientX);
    const targetTime = ratio * safeDuration;
    setHoverPosition(ratio * 100);
    setHoverTime(targetTime);

    if (chapters.length > 0) {
      const activeCh = [...chapters].reverse().find((c) => targetTime >= c.time);
      setHoverChapter(activeCh || chapters[0]);
    }
  };

  const handleMouseLeave = () => {
    if (!isDragging) {
      setHoverPosition(null);
      setHoverChapter(null);
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    const ratio = getPositionRatio(e.clientX);
    onSeek(ratio * safeDuration);
  };

  useEffect(() => {
    if (!isDragging) return;

    const onGlobalMouseMove = (e: MouseEvent) => {
      const ratio = getPositionRatio(e.clientX);
      onSeek(ratio * safeDuration);
    };

    const onGlobalMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener('mousemove', onGlobalMouseMove);
    window.addEventListener('mouseup', onGlobalMouseUp);
    return () => {
      window.removeEventListener('mousemove', onGlobalMouseMove);
      window.removeEventListener('mouseup', onGlobalMouseUp);
    };
  }, [isDragging, getPositionRatio, onSeek, safeDuration]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      onSeek(Math.min(safeDuration, currentTime + 5));
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      onSeek(Math.max(0, currentTime - 5));
    }
  };

  return (
    <div
      className="wilder-timeline-wrapper"
      ref={trackRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onKeyDown={handleKeyDown}
      role="slider"
      tabIndex={0}
      aria-label="Natural Branch Timeline"
      aria-valuemin={0}
      aria-valuemax={Math.round(safeDuration)}
      aria-valuenow={Math.round(currentTime)}
      aria-valuetext={`${formatTime(currentTime)} of ${formatTime(safeDuration)}`}
    >
      {/* Interactive Hover Tooltip */}
      {hoverPosition !== null && (
        <div
          className="wilder-timeline-tooltip"
          style={{ left: `${hoverPosition}%` }}
        >
          <div className="tooltip-glass-pill">
            <span className="tooltip-time">{formatTime(hoverTime)}</span>
            {hoverChapter && (
              <span className="tooltip-chapter"> // {hoverChapter.title}</span>
            )}
          </div>
          <div className="tooltip-leaf-pointer" />
        </div>
      )}

      {/* Realistic Organic Wooden Branch Track SVG */}
      <div className="wilder-branch-track">
        <svg
          className="branch-svg-art"
          viewBox="0 0 1000 24"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Realistic Bark Gradient */}
            <linearGradient id="barkGrad" x1="0" y1="0" x2="0" y2="24" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#3c2a1c" />
              <stop offset="40%" stopColor="#22160e" />
              <stop offset="70%" stopColor="#1a110a" />
              <stop offset="100%" stopColor="#2c1d13" />
            </linearGradient>
            {/* Living Moss Highlight */}
            <linearGradient id="mossGrad" x1="0" y1="0" x2="1000" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#4a632b" stopOpacity="0.4" />
              <stop offset="35%" stopColor="#75993a" stopOpacity="0.6" />
              <stop offset="70%" stopColor="#3a521e" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#678a30" stopOpacity="0.5" />
            </linearGradient>
          </defs>

          {/* Organic Contoured Tree Branch Body */}
          <path
            d="M 0 11 Q 120 8 260 12 T 540 10 T 820 13 T 1000 11 L 1000 15 Q 820 17 540 14 T 260 16 T 120 13 T 0 15 Z"
            fill="url(#barkGrad)"
          />
          {/* Subtle Moss Texture Overlay along upper bark edge */}
          <path
            d="M 0 11 Q 120 8 260 12 T 540 10 T 820 13 T 1000 11 L 1000 13 Q 820 15 540 12 T 260 14 T 120 10 T 0 12 Z"
            fill="url(#mossGrad)"
          />
          {/* Delicate Natural Budding Knots */}
          <circle cx="250" cy="11" r="2.2" fill="#5c3f2b" />
          <path d="M 250 9 Q 252 5 256 6 Q 254 9 250 9 Z" fill="#88d63a" opacity="0.8" />

          <circle cx="500" cy="11" r="2.5" fill="#4d3423" />
          <path d="M 500 9 Q 503 4 507 5 Q 504 9 500 9 Z" fill="#a2ea4c" opacity="0.85" />

          <circle cx="750" cy="12" r="2" fill="#5c3f2b" />
          <path d="M 750 10 Q 752 6 756 7 Q 753 10 750 10 Z" fill="#88d63a" opacity="0.75" />
        </svg>

        {/* Buffered Stream Mist Glow */}
        <div
          className="branch-buffered-glow"
          style={{ width: `${bufferPercent}%` }}
        />

        {/* Sunlit Living Green Vine (Progress Track) */}
        <div
          className="branch-progress-vine"
          style={{ width: `${progressPercent}%` }}
        >
          <div className="vine-glowing-edge" />
        </div>

        {/* Chapter Notches (Delicate golden dew droplets) */}
        {chapters.map((ch, index) => {
          const chPos = (ch.time / safeDuration) * 100;
          if (chPos <= 0 || chPos >= 100) return null;
          return (
            <div
              key={`${ch.title}-${index}`}
              className="branch-chapter-knot"
              style={{ left: `${chPos}%` }}
              title={ch.title}
            >
              <div className="knot-dew-drop" />
            </div>
          );
        })}

        {/* Sculptural Golden-Green Hummingbird Seek Handle */}
        <div
          className={`branch-seek-bird-handle ${isDragging ? 'is-dragging' : ''}`}
          style={{ left: `${progressPercent}%` }}
        >
          <GlidingSeekBird size={30} className="seek-bird-icon" />
          {/* Subtle Golden Flight Aura */}
          <div className="seek-bird-pulse" />
        </div>
      </div>
    </div>
  );
};
