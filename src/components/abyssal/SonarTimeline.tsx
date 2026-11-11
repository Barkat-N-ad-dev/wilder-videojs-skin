import React, { useState, useRef } from 'react';
import type { VideoChapter } from '@/config/media';

interface SonarTimelineProps {
  currentTime: number;
  duration: number;
  bufferedEnd: number;
  chapters?: VideoChapter[];
  onSeek: (time: number) => void;
}

export const SonarTimeline: React.FC<SonarTimelineProps> = ({
  currentTime,
  duration,
  bufferedEnd,
  chapters = [],
  onSeek,
}) => {
  const [hoverPosition, setHoverPosition] = useState<number | null>(null);
  const [hoverTime, setHoverTime] = useState<number>(0);
  const [hoverChapter, setHoverChapter] = useState<VideoChapter | null>(null);
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

    // Find nearest chapter
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
      className="abyssal-sonar-timeline"
      ref={trackRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="slider"
      tabIndex={0}
      aria-label="Sonar Timeline Scrub"
      aria-valuemin={0}
      aria-valuemax={Math.round(safeDuration)}
      aria-valuenow={Math.round(currentTime)}
      aria-valuetext={`${formatTime(currentTime)} of ${formatTime(safeDuration)}`}
    >
      <div className="abyssal-timeline-track">
        {/* Buffered Depth Fill */}
        <div
          className="abyssal-timeline-buffered"
          style={{ width: `${bufferPercent}%` }}
        />

        {/* Progress Fill */}
        <div
          className="abyssal-timeline-progress"
          style={{ width: `${progressPercent}%` }}
        >
          <div className="abyssal-timeline-sweep" />
        </div>

        {/* Tactical Playhead Thumb */}
        <div
          className="abyssal-playhead-thumb"
          style={{ left: `${progressPercent}%` }}
        />

        {/* Chapter Markers */}
        {chapters.map((ch, idx) => {
          const markerPos = (ch.time / safeDuration) * 100;
          if (markerPos < 0 || markerPos > 100) return null;
          return (
            <div
              key={idx}
              className="abyssal-chapter-marker"
              style={{ left: `${markerPos}%` }}
              title={`${ch.title} (${ch.depth})`}
            />
          );
        })}
      </div>

      {/* Hover Time & Bathymetry Tooltip */}
      {hoverPosition !== null && (
        <div
          className="abyssal-time-preview"
          style={{ left: `${hoverPosition}%` }}
        >
          <span className="preview-time">{formatTime(hoverTime)}</span>
          {hoverChapter && (
            <span className="preview-depth">
              {hoverChapter.title} // {hoverChapter.depth}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
