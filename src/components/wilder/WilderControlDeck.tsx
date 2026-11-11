import React from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  RotateCw,
  Volume2,
  VolumeX,
  Gauge,
  Sliders,
  Maximize,
  Minimize,
  PictureInPicture,
  Subtitles,
} from 'lucide-react';

interface WilderControlDeckProps {
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
  onTogglePiP?: () => void;
  showCaptions: boolean;
  onToggleCaptions: () => void;
}

export const WilderControlDeck: React.FC<WilderControlDeckProps> = ({
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
  onTogglePiP,
  showCaptions,
  onToggleCaptions,
}) => {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const nextRate = () => {
    const rates = [0.5, 0.75, 1.0, 1.25, 1.5, 2.0];
    const currentIndex = rates.indexOf(playbackRate);
    const nextIdx = (currentIndex + 1) % rates.length;
    onChangePlaybackRate(rates[nextIdx]);
  };

  return (
    <div className="wilder-control-deck" role="toolbar" aria-label="Cinematic Film Controls">
      {/* Left Control Group: Play, Jump, Volume, Time */}
      <div className="wilder-control-group">
        <button
          type="button"
          className={`wilder-btn ${isPlaying ? 'active' : ''}`}
          onClick={onTogglePlay}
          aria-label={isPlaying ? 'Pause film' : 'Play film'}
          aria-pressed={isPlaying}
          title={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? <Pause size={18} /> : <Play size={18} />}
        </button>

        <button
          type="button"
          className="wilder-btn"
          onClick={() => onSeekRelative(-10)}
          aria-label="Replay 10 seconds"
          title="Replay 10s"
        >
          <RotateCcw size={16} />
        </button>

        <button
          type="button"
          className="wilder-btn"
          onClick={() => onSeekRelative(30)}
          aria-label="Skip forward 30 seconds"
          title="Skip 30s"
        >
          <RotateCw size={16} />
        </button>

        {/* Minimal Nature Volume Box */}
        <div className="wilder-volume-box">
          <button
            type="button"
            className="wilder-btn"
            onClick={onToggleMute}
            aria-label={isMuted ? 'Unmute nature audio' : 'Mute nature audio'}
            aria-pressed={isMuted}
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted || volume === 0 ? <VolumeX size={17} /> : <Volume2 size={17} />}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={isMuted ? 0 : volume}
            onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
            className="wilder-volume-slider"
            aria-label="Nature Soundtrack Volume"
          />
        </div>

        {/* Editorial Time Readout */}
        <div className="wilder-time-readout" aria-label="Playback timestamp">
          <span className="wilder-time-current">{formatTime(currentTime)}</span>
          <span className="wilder-time-sep">/</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Right Control Group: Speed, Captions, PiP, Settings, Fullscreen */}
      <div className="wilder-control-group">
        {/* Playback Speed Calibration */}
        <button
          type="button"
          className="wilder-btn"
          onClick={nextRate}
          aria-label={`Playback velocity: ${playbackRate}x`}
          title="Change playback speed"
        >
          <Gauge size={14} style={{ marginRight: '4px' }} />
          <span>{playbackRate}x</span>
        </button>

        {/* Closed Captions / Subtitles */}
        <button
          type="button"
          className={`wilder-btn ${showCaptions ? 'active' : ''}`}
          onClick={onToggleCaptions}
          aria-label={showCaptions ? 'Disable subtitles' : 'Enable subtitles'}
          aria-pressed={showCaptions}
          title="Subtitles & Captions"
        >
          <Subtitles size={16} />
        </button>

        {/* Picture-in-Picture */}
        {onTogglePiP && (
          <button
            type="button"
            className="wilder-btn"
            onClick={onTogglePiP}
            aria-label="Toggle Picture-in-Picture"
            title="Picture-in-Picture"
          >
            <PictureInPicture size={16} />
          </button>
        )}

        {/* Settings Menu Toggle */}
        <button
          type="button"
          className={`wilder-btn ${showSettings ? 'active' : ''}`}
          onClick={onToggleSettings}
          aria-label="Documentary stream settings"
          aria-expanded={showSettings}
          title="Settings & Audio Tracks"
        >
          <Sliders size={16} />
        </button>

        {/* Fullscreen Expand */}
        <button
          type="button"
          className="wilder-btn"
          onClick={onToggleFullscreen}
          aria-label={isFullscreen ? 'Exit full screen cinematic view' : 'Enter full screen cinematic view'}
          aria-pressed={isFullscreen}
          title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
        >
          {isFullscreen ? <Minimize size={17} /> : <Maximize size={17} />}
        </button>
      </div>
    </div>
  );
};
