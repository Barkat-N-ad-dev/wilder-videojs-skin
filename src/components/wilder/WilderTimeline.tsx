import React, { useState, useRef } from 'react';
import type { DocumentaryChapter } from '@/config/media';

interface WilderTimelineProps {
  currentTime: number;
  duration: number;
  bufferedEnd: number;
  chapters?: DocumentaryChapter[];
  onSeek: (time: number) => void;
}

export const WilderTimeline: React.FC<WilderTimelineProps> = ({
  currentTime,
  duration,
  bufferedEnd,
  chapters = [],
  onSeek,
}) => {
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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const targetTime = ratio * safeDuration;
    setHoverPosition(ratio * 100);
    setHoverTime(targetTime);

    if (chapters.length > 0) {
      const activeCh = [...chapters].reverse().find((c) => targetTime >= c.time);
      setHoverChapter(activeCh || chapters[0]);
    }
  };

  const handleMouseLeave = () => {
    setHoverPosition(null);
    setHoverChapter(null);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    onSeek(ratio * safeDuration);
  };

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
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="slider"
      tabIndex={0}
      aria-label="Documentary Film Timeline"
      aria-valuemin={0}
      aria-valuemax={Math.round(safeDuration)}
      aria-valuenow={Math.round(currentTime)}
      aria-valuetext={`${formatTime(currentTime)} of ${formatTime(safeDuration)}`}
    >
      <div className="wilder-timeline-rail">
        {/* Buffered Progress (Mist / Water Layer) */}
        <div
          className="wilder-timeline-buffered"
          style={{ width: `${bufferPercent}%` }}
        />

        {/* Played Progress (Golden Dawn to Forest Green) */}
        <div
          className="wilder-timeline-played"
          style={{ width: `${progressPercent}%` }}
        />

        {/* Pearl Playhead Thumb */}
        <div
          className="wilder-playhead"
          style={{ left: `${progressPercent}%` }}
        />

        {/* Chapter Notches */}
        {chapters.map((ch, idx) => {
          const markerPos = (ch.time / safeDuration) * 100;
          if (markerPos < 0 || markerPos > 100) return null;
          return (
            <div
              key={idx}
              className="wilder-chapter-tick"
              style={{ left: `${markerPos}%` }}
              title={`${ch.title} (${ch.location})`}
            />
          );
        })}
      </div>

      {/* Hover Preview Bubble */}
      {hoverPosition !== null && (
        <div
          className="wilder-time-bubble"
          style={{ left: `${hoverPosition}%` }}
        >
          <span className="wilder-bubble-time">{formatTime(hoverTime)}</span>
          {hoverChapter && (
            <span className="wilder-bubble-title">
              {hoverChapter.title} — {hoverChapter.location}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
