import React, { useState, useRef, useEffect } from 'react';
import {
  SculpturalFlightBird,
  SculpturalRestingBird,
  SingingAcousticBird,
  SoaringFullscreenBird,
  BotanicalLeafIcon,
} from './BirdIcons';
import {
  RotateCcw,
  RotateCw,
  Subtitles,
  Settings,
  Check,
} from 'lucide-react';

interface WilderBirdControlsProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
  onSeekRelative: (seconds: number) => void;
  volume: number;
  isMuted: boolean;
  onVolumeChange: (vol: number) => void;
  onToggleMute: () => void;
  currentTime: number;
  duration: number;
  playbackRate: number;
  onChangePlaybackRate: (rate: number) => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  showSettings: boolean;
  onToggleSettings: () => void;
  showCaptions: boolean;
  onToggleCaptions: () => void;
  filmTitle?: string;
}

export const WilderBirdControls: React.FC<WilderBirdControlsProps> = ({
  isPlaying,
  onTogglePlay,
  onSeekRelative,
  volume,
  isMuted,
  onVolumeChange,
  onToggleMute,
  currentTime,
  duration,
  playbackRate,
  onChangePlaybackRate,
  isFullscreen,
  onToggleFullscreen,
  showSettings,
  onToggleSettings,
  showCaptions,
  onToggleCaptions,
  filmTitle = 'Wilder Film',
}) => {
  const [showSpeedMenu, setShowSpeedMenu] = useState<boolean>(false);
  const [showVolumeSlider, setShowVolumeSlider] = useState<boolean>(false);
  const speedMenuRef = useRef<HTMLDivElement>(null);
  const volumeContainerRef = useRef<HTMLDivElement>(null);

  const speedOptions = [0.5, 0.75, 1.0, 1.25, 1.5, 2.0];

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Close menus on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (speedMenuRef.current && !speedMenuRef.current.contains(e.target as Node)) {
        setShowSpeedMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="wilder-controls-deck">
      {/* LEFT SECTION: Play/Pause, Replay/Skip, Timecode */}
      <div className="controls-group-left">
        {/* Tactile Sunlit Bird Play/Pause Button */}
        <button
          type="button"
          className="bird-play-trigger-btn"
          onClick={onTogglePlay}
          aria-label={isPlaying ? 'Pause film' : 'Play film'}
          title={isPlaying ? 'Pause film' : 'Play film'}
        >
          {isPlaying ? (
            <SculpturalRestingBird size={24} className="control-bird-icon" />
          ) : (
            <SculpturalFlightBird size={24} className="control-bird-icon" />
          )}
        </button>

        {/* 10s Replay / Skip Buttons with subtle feather accents */}
        <button
          type="button"
          className="deck-icon-btn"
          onClick={() => onSeekRelative(-10)}
          aria-label="Rewind 10 seconds"
          title="Rewind 10s"
        >
          <RotateCcw size={16} />
        </button>

        <button
          type="button"
          className="deck-icon-btn"
          onClick={() => onSeekRelative(10)}
          aria-label="Skip ahead 10 seconds"
          title="Forward 10s"
        >
          <RotateCw size={16} />
        </button>

        {/* Elegant Timecode Display */}
        <div className="deck-timecode" aria-label="Playback time">
          <span className="time-current">{formatTime(currentTime)}</span>
          <span className="time-divider">/</span>
          <span className="time-duration">{formatTime(duration)}</span>
        </div>
      </div>

      {/* CENTER SECTION: Minimal Editorial Film Watermark / Badge */}
      <div className="controls-group-center">
        <div className="deck-film-badge">
          <BotanicalLeafIcon size={14} color="#a2ea4c" />
          <span className="badge-film-title">{filmTitle}</span>
        </div>
      </div>

      {/* RIGHT SECTION: Volume Songbird, Speed, Captions, Settings, Fullscreen */}
      <div className="controls-group-right">
        {/* Acoustic Songbird Volume Control with Interactive Slider */}
        <div
          className="deck-volume-wrapper"
          ref={volumeContainerRef}
          onMouseEnter={() => setShowVolumeSlider(true)}
          onMouseLeave={() => setShowVolumeSlider(false)}
        >
          <button
            type="button"
            className="deck-icon-btn volume-bird-btn"
            onClick={onToggleMute}
            aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            <SingingAcousticBird
              size={21}
              volumeLevel={isMuted ? 0 : volume}
              isMuted={isMuted}
            />
          </button>

          {/* Smooth Expanding Horizontal Slider */}
          <div className={`volume-slider-tray ${showVolumeSlider ? 'is-visible' : ''}`}>
            <input
              type="range"
              min={0}
              max={1}
              step={0.05}
              value={isMuted ? 0 : volume}
              onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
              className="natural-volume-range"
              aria-label="Volume level"
              style={{
                background: `linear-gradient(to right, #88d63a 0%, #ffd466 ${(isMuted ? 0 : volume) * 100}%, rgba(255,255,255,0.18) ${(isMuted ? 0 : volume) * 100}%, rgba(255,255,255,0.18) 100%)`,
              }}
            />
          </div>
        </div>

        {/* Refined Speed Selector Pill */}
        <div className="deck-speed-wrapper" ref={speedMenuRef}>
          <button
            type="button"
            className={`deck-pill-btn ${playbackRate !== 1.0 ? 'active' : ''}`}
            onClick={() => setShowSpeedMenu(!showSpeedMenu)}
            aria-label="Playback Speed"
            title="Speed"
          >
            <span>{playbackRate}x</span>
          </button>

          {/* Speed Floating Selection Menu */}
          {showSpeedMenu && (
            <div className="deck-speed-popover">
              <div className="speed-popover-header">
                <BotanicalLeafIcon size={12} color="#a2ea4c" />
                <span>Pace</span>
              </div>
              {speedOptions.map((rate) => (
                <button
                  key={rate}
                  type="button"
                  className={`speed-option-item ${playbackRate === rate ? 'selected' : ''}`}
                  onClick={() => {
                    onChangePlaybackRate(rate);
                    setShowSpeedMenu(false);
                  }}
                >
                  <span>{rate === 1.0 ? 'Normal (1.0x)' : `${rate}x`}</span>
                  {playbackRate === rate && <Check size={13} color="#a2ea4c" />}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Captions / Subtitles Toggle */}
        <button
          type="button"
          className={`deck-icon-btn ${showCaptions ? 'active-highlight' : ''}`}
          onClick={onToggleCaptions}
          aria-label={showCaptions ? 'Disable subtitles' : 'Enable subtitles'}
          title="Subtitles (CC)"
        >
          <Subtitles size={17} />
        </button>

        {/* Stream Settings Modal Toggle */}
        <button
          type="button"
          className={`deck-icon-btn ${showSettings ? 'active-highlight' : ''}`}
          onClick={onToggleSettings}
          aria-label="Documentary Stream Settings"
          title="Settings"
        >
          <Settings size={17} />
        </button>

        {/* Fullscreen: Symmetrical Outstretched Wings */}
        <button
          type="button"
          className="deck-icon-btn fullscreen-bird-btn"
          onClick={onToggleFullscreen}
          aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
          title="Fullscreen (F)"
        >
          <SoaringFullscreenBird size={19} isFullscreen={isFullscreen} />
        </button>
      </div>
    </div>
  );
};
