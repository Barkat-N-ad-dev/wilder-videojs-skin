import React, { useState, useRef, useEffect } from 'react';
import {
  SpreadEagleWings,
  BearCubHugging,
  MonarchButterfly,
  PerchedRobin,
} from './FantasyAvianDecor';
import {
  RotateCcw,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Maximize2,
  Minimize2,
  Subtitles,
  Settings,
  Send,
  Sparkles,
  Heart,
  RefreshCw,
  AlertCircle,
  Gauge,
  Check,
} from 'lucide-react';
import { GlidingSeekBird } from '@/components/wilder/BirdIcons';
import type { NatureFilm } from '@/config/media';

interface FantasyCenterPlayerProps {
  children?: React.ReactNode;
  film: NatureFilm;
  isPlaying: boolean;
  onTogglePlay: () => void;
  onSeekRelative: (sec: number) => void;
  onSeekTo: (time: number) => void;
  currentTime: number;
  duration: number;
  bufferedEnd: number;
  volume: number;
  isMuted: boolean;
  onVolumeChange: (vol: number) => void;
  onToggleMute: () => void;
  playbackRate: number;
  onChangePlaybackRate: (rate: number) => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  showSettings: boolean;
  onToggleSettings: () => void;
  showCaptions: boolean;
  onToggleCaptions: () => void;
  isLoading?: boolean;
  hasError?: boolean;
  errorMessage?: string;
  onRetryPlayback?: () => void;
}

export const FantasyCenterPlayer: React.FC<FantasyCenterPlayerProps> = ({
  children,
  film,
  isPlaying,
  onTogglePlay,
  onSeekRelative,
  onSeekTo,
  currentTime,
  duration,
  bufferedEnd,
  volume,
  isMuted,
  onVolumeChange,
  onToggleMute,
  playbackRate,
  onChangePlaybackRate,
  isFullscreen,
  onToggleFullscreen,
  showSettings,
  onToggleSettings,
  showCaptions,
  onToggleCaptions,
  isLoading = false,
  hasError = false,
  errorMessage = '',
  onRetryPlayback,
}) => {
  const [showVolumeSlider, setShowVolumeSlider] = useState<boolean>(false);
  const [showSpeedMenu, setShowSpeedMenu] = useState<boolean>(false);
  const [hoverPosition, setHoverPosition] = useState<number | null>(null);
  const [hoverTime, setHoverTime] = useState<number>(0);
  const [reactionCount, setReactionCount] = useState<number>(142);
  const [hasLiked, setHasLiked] = useState<boolean>(false);

  const speedMenuRef = useRef<HTMLDivElement>(null);

  const speedOptions = [0.5, 0.75, 1.0, 1.25, 1.5, 2.0];

  const [comments, setComments] = useState<{ author: string; text: string; tag: string }[]>([
    { tag: '🌿 Leaves', author: 'OwlWhisperer', text: 'This is beautiful!' },
    { tag: '🦌 Fauna', author: 'RiverStone', text: 'Love this channel!' },
  ]);
  const [newComment, setNewComment] = useState<string>('');

  const safeDuration = duration > 0 ? duration : 100;
  const progressPercent = Math.min(100, Math.max(0, (currentTime / safeDuration) * 100));
  const bufferPercent = Math.min(100, Math.max(0, (bufferedEnd / safeDuration) * 100));

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Close speed menu on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (speedMenuRef.current && !speedMenuRef.current.contains(e.target as Node)) {
        setShowSpeedMenu(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const handlePostComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    setComments((prev) => [
      ...prev,
      { tag: '✨ Sanctuary', author: 'Nature Wanderer', text: newComment.trim() },
    ]);
    setNewComment('');
  };

  // Active documentary subtitle calculation
  const currentChapter = film.chapters && film.chapters.length > 0
    ? [...film.chapters].reverse().find((c) => currentTime >= c.time) || film.chapters[0]
    : null;

  return (
    <div className="fantasy-center-stage">
      {/* Ancient Tree Living Shrine Frame */}
      <div className="tree-shrine-frame">
        {/* Crown: Giant Golden Eagle Spreading Wings Across Player */}
        <div className="eagle-wings-header">
          <SpreadEagleWings className="eagle-wings-svg" />
          <div className="eagle-title-label">
            <span>Video Player</span>
          </div>
        </div>

        {/* Flanking Mascots: Bear Cubs Hugging Tree Pillars */}
        <div className="cub-flank cub-left">
          <BearCubHugging side="left" size={72} />
        </div>
        <div className="cub-flank cub-right">
          <BearCubHugging side="right" size={72} />
        </div>

        {/* Top-Right: Perched Monarch Butterfly with wing flutter */}
        <div className="frame-butterfly" title="Monarch Butterfly">
          <MonarchButterfly size={46} />
        </div>

        {/* Bottom-Right: Forest Singing Robin Perched on Twig */}
        <div className="frame-robin" title="Singing Robin">
          <PerchedRobin size={40} />
        </div>

        {/* Central Real Video Screen Frame */}
        <div
          className="rustic-video-screen"
          onClick={(e) => {
            if ((e.target as HTMLElement).tagName === 'VIDEO' || (e.target as HTMLElement).classList.contains('rustic-video-screen')) {
              onTogglePlay();
            }
          }}
        >
          {/* Active Video.js Video */}
          {children}

          {/* Film Title Watermark Banner */}
          <div className="screen-title-banner">
            <span className="banner-title-text">{film.title}</span>
            <span className="banner-series-pill">{film.series}</span>
          </div>

          {/* Dynamic Living Captions Banner */}
          {showCaptions && currentChapter && (
            <div className="screen-subtitles-banner" aria-live="polite">
              <span className="subtitles-text">
                [{currentChapter.title}]: {currentChapter.description}
              </span>
            </div>
          )}

          {/* Loading / Buffering Spinner State */}
          {isLoading && !hasError && (
            <div className="screen-loading-overlay" aria-label="Buffering wildlife stream">
              <div className="sanctuary-loader-disc">
                <div className="loader-solar-ring" />
                <Sparkles size={20} color="#ffd466" />
              </div>
              <span className="loader-text">Loading Sanctuary Stream...</span>
            </div>
          )}

          {/* Error Recovery State */}
          {hasError && (
            <div className="screen-error-overlay" role="alert">
              <AlertCircle size={32} color="#f87171" />
              <span className="error-title">Stream Interrupted</span>
              <p className="error-desc">{errorMessage || 'Unable to connect to the nature stream.'}</p>
              {onRetryPlayback && (
                <button
                  type="button"
                  className="error-retry-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    onRetryPlayback();
                  }}
                >
                  <RefreshCw size={14} />
                  <span>Reconnect Stream</span>
                </button>
              )}
            </div>
          )}

          {/* Paused Golden Solar Halo Trigger */}
          {!isPlaying && !isLoading && !hasError && (
            <div className="screen-paused-halo">
              <button
                type="button"
                className="screen-big-play-trigger"
                onClick={onTogglePlay}
                aria-label="Play documentary film"
                title="Play Film (Space)"
              >
                <div className="play-sun-corona" />
                <Play size={34} fill="#ffd466" color="#ffd466" style={{ marginLeft: '4px' }} />
              </button>
            </div>
          )}
        </div>

        {/* Circular Glowing Interactive Controls Deck */}
        <div className="fantasy-controls-bar" role="toolbar" aria-label="Wildlife Video Controls">
          {/* Cyan / Blue Rewind Circular Button (-10s) */}
          <button
            type="button"
            className="glow-circle-btn blue-rewind-btn"
            onClick={() => onSeekRelative(-10)}
            aria-label="Rewind 10 seconds (Left Arrow)"
            title="Rewind 10s"
          >
            <RotateCcw size={18} />
          </button>

          {/* Center: Large Golden Sun Play / Pause Circular Button */}
          <button
            type="button"
            className={`glow-circle-btn gold-play-btn ${isPlaying ? 'is-playing' : ''}`}
            onClick={onTogglePlay}
            aria-label={isPlaying ? 'Pause film (Space)' : 'Play film (Space)'}
            title={isPlaying ? 'Pause film' : 'Play film'}
          >
            {isPlaying ? (
              <Pause size={24} fill="#ffffff" color="#ffffff" />
            ) : (
              <Play size={24} fill="#ffffff" color="#ffffff" style={{ marginLeft: '3px' }} />
            )}
            <div className="gold-btn-flare" />
          </button>

          {/* Amber / Golden Sound / Volume Circular Button */}
          <div
            className="volume-button-cluster"
            onMouseEnter={() => setShowVolumeSlider(true)}
            onMouseLeave={() => setShowVolumeSlider(false)}
          >
            <button
              type="button"
              className="glow-circle-btn amber-sound-btn"
              onClick={onToggleMute}
              aria-label={isMuted ? 'Unmute audio (M)' : 'Mute audio (M)'}
              title={isMuted ? 'Unmute (M)' : 'Mute (M)'}
            >
              {isMuted ? <VolumeX size={19} /> : <Volume2 size={19} />}
            </button>

            {/* Expandable Natural Volume Slider Tray */}
            {showVolumeSlider && (
              <div className="fantasy-volume-slider-tray" role="region" aria-label="Volume Control">
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.05}
                  value={isMuted ? 0 : volume}
                  onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
                  className="fantasy-range"
                  aria-label="Volume level"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={Math.round((isMuted ? 0 : volume) * 100)}
                  style={{
                    background: `linear-gradient(to right, #88d63a 0%, #ffd466 ${(isMuted ? 0 : volume) * 100}%, rgba(255,255,255,0.2) ${(isMuted ? 0 : volume) * 100}%, rgba(255,255,255,0.2) 100%)`,
                  }}
                />
              </div>
            )}
          </div>

          {/* Playback Velocity (Pace) Popover */}
          <div className="speed-button-cluster" ref={speedMenuRef}>
            <button
              type="button"
              className={`glow-circle-btn auxiliary-btn ${playbackRate !== 1.0 ? 'active-speed' : ''}`}
              onClick={() => setShowSpeedMenu(!showSpeedMenu)}
              aria-label={`Playback speed: ${playbackRate}x`}
              title="Playback Velocity"
            >
              <span className="speed-btn-text">{playbackRate}x</span>
            </button>

            {showSpeedMenu && (
              <div className="fantasy-speed-popover" role="menu" aria-label="Playback Speed Options">
                <div className="speed-popover-title">
                  <Gauge size={12} color="#ffd466" />
                  <span>Velocity</span>
                </div>
                {speedOptions.map((rate) => (
                  <button
                    key={rate}
                    type="button"
                    className={`speed-option-btn ${playbackRate === rate ? 'is-selected' : ''}`}
                    onClick={() => {
                      onChangePlaybackRate(rate);
                      setShowSpeedMenu(false);
                    }}
                    role="menuitem"
                  >
                    <span>{rate === 1.0 ? 'Normal (1.0x)' : `${rate}x`}</span>
                    {playbackRate === rate && <Check size={12} color="#88d63a" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Fullscreen Trigger */}
          <button
            type="button"
            className="glow-circle-btn auxiliary-btn"
            onClick={onToggleFullscreen}
            aria-label={isFullscreen ? 'Exit fullscreen (F)' : 'Enter fullscreen (F)'}
            title="Fullscreen (F)"
          >
            {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
          </button>

          {/* Subtitles (CC) */}
          <button
            type="button"
            className={`glow-circle-btn auxiliary-btn ${showCaptions ? 'active-cc' : ''}`}
            onClick={onToggleCaptions}
            aria-label={showCaptions ? 'Disable subtitles (C)' : 'Enable subtitles (C)'}
            title="Subtitles (C)"
            aria-pressed={showCaptions}
          >
            <Subtitles size={16} />
          </button>

          {/* Stream Settings */}
          <button
            type="button"
            className="glow-circle-btn auxiliary-btn"
            onClick={onToggleSettings}
            aria-label="Documentary Stream Settings"
            title="Settings"
            aria-haspopup="dialog"
          >
            <Settings size={16} />
          </button>

          {/* Like / Nature Love Reaction Button */}
          <button
            type="button"
            className={`glow-circle-btn auxiliary-btn like-btn ${hasLiked ? 'has-liked' : ''}`}
            onClick={() => {
              setHasLiked(!hasLiked);
              setReactionCount(hasLiked ? reactionCount - 1 : reactionCount + 1);
            }}
            aria-label={hasLiked ? 'Liked film' : 'Like film'}
            title="Love this film"
          >
            <Heart size={15} fill={hasLiked ? '#f43f5e' : 'none'} color={hasLiked ? '#f43f5e' : '#f7f4ed'} />
          </button>
        </div>

        {/* Natural Branch Timeline Scrubber */}
        <div
          className="fantasy-branch-scrubber"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
            setHoverPosition(ratio * 100);
            setHoverTime(ratio * safeDuration);
          }}
          onMouseLeave={() => setHoverPosition(null)}
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
            onSeekTo(ratio * safeDuration);
          }}
          role="slider"
          aria-label="Branch Timeline Scrubber"
          aria-valuemin={0}
          aria-valuemax={Math.round(safeDuration)}
          aria-valuenow={Math.round(currentTime)}
          aria-valuetext={`${formatTime(currentTime)} of ${formatTime(safeDuration)}`}
          tabIndex={0}
        >
          {/* Hover Time Tooltip */}
          {hoverPosition !== null && (
            <div className="scrubber-hover-pill" style={{ left: `${hoverPosition}%` }}>
              <span>{formatTime(hoverTime)}</span>
            </div>
          )}

          {/* Buffered Mist Glow */}
          <div className="scrubber-buffered" style={{ width: `${bufferPercent}%` }} />
          {/* Luminous Vine Progress */}
          <div className="scrubber-progress" style={{ width: `${progressPercent}%` }} />

          {/* Chapter Dew Drops */}
          {film.chapters?.map((ch, idx) => {
            const chPos = (ch.time / safeDuration) * 100;
            if (chPos <= 0 || chPos >= 100) return null;
            return (
              <div
                key={idx}
                className="scrubber-chapter-dew"
                style={{ left: `${chPos}%` }}
                title={ch.title}
              />
            );
          })}

          {/* Draggable Hummingbird Seek Handle */}
          <div className="scrubber-handle" style={{ left: `${progressPercent}%` }}>
            <GlidingSeekBird size={26} />
            <div className="seek-glow-ring" />
          </div>

          {/* Timecode Readout */}
          <div className="scrubber-timecode">
            <span className="time-curr">{formatTime(currentTime)}</span>
            <span className="time-sep">/</span>
            <span className="time-tot">{formatTime(safeDuration)}</span>
          </div>
        </div>

        {/* Secondary "Video Player" Label matching the reference design */}
        <div className="footer-video-player-label">
          <span>Video Player</span>
        </div>
      </div>

      {/* Stepping-Stones Path Comments Section Below Player */}
      <div className="forest-path-comments-section">
        <div className="path-comments-bubbles">
          {comments.map((cm, i) => (
            <div key={i} className="path-comment-pill">
              <span className="comment-tag-badge">{cm.tag}</span>
              <span className="comment-quote-text">"{cm.text}"</span>
              <span className="comment-author-name">— {cm.author}</span>
            </div>
          ))}
          <div className="path-comment-pill likes-counter-pill">
            <Sparkles size={11} color="#ffd466" />
            <span>{reactionCount} Nature Lovers</span>
          </div>
        </div>

        {/* Interactive Comment Input */}
        <form onSubmit={handlePostComment} className="path-comment-input-form">
          <input
            type="text"
            placeholder="Share nature observations in the sanctuary..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="path-comment-input"
            aria-label="Write a nature comment"
          />
          <button
            type="submit"
            className="path-comment-send-btn"
            aria-label="Send comment"
            title="Send Comment"
          >
            <Send size={13} />
          </button>
        </form>
      </div>
    </div>
  );
};
