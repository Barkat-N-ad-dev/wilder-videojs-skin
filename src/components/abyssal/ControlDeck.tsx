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
  Eye,
  EyeOff,
  Subtitles,
  PictureInPicture,
} from 'lucide-react';

interface ControlDeckProps {
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
  showHud: boolean;
  onToggleHud: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  showSettings: boolean;
  onToggleSettings: () => void;
  onTogglePiP?: () => void;
}

export const ControlDeck: React.FC<ControlDeckProps> = ({
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
  showHud,
  onToggleHud,
  isFullscreen,
  onToggleFullscreen,
  showSettings,
  onToggleSettings,
  onTogglePiP,
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
    <div className="abyssal-control-deck" role="toolbar" aria-label="Abyssal Observation Controls">
      {/* Primary Playback Group */}
      <div className="deck-group">
        <button
          type="button"
          className={`abyssal-btn ${isPlaying ? 'active' : ''}`}
          onClick={onTogglePlay}
          aria-label={isPlaying ? 'Halt Observation Feed' : 'Initiate Observation Feed'}
          aria-pressed={isPlaying}
          title={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? <Pause size={18} /> : <Play size={18} />}
        </button>

        <button
          type="button"
          className="abyssal-btn"
          onClick={() => onSeekRelative(-10)}
          aria-label="Replay 10 Seconds"
          title="Seek Backward 10s"
        >
          <RotateCcw size={16} />
        </button>

        <button
          type="button"
          className="abyssal-btn"
          onClick={() => onSeekRelative(30)}
          aria-label="Advance 30 Seconds"
          title="Seek Forward 30s"
        >
          <RotateCw size={16} />
        </button>

        {/* Acoustic Volume Controls */}
        <div className="abyssal-volume-container">
          <button
            type="button"
            className="abyssal-btn"
            onClick={onToggleMute}
            aria-label={isMuted ? 'Unmute Hydrophone Feed' : 'Mute Hydrophone Feed'}
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
            className="abyssal-volume-slider"
            aria-label="Hydrophone Acoustic Gain"
          />
        </div>

        {/* Mission Elapsed Time (MET) Display */}
        <div className="abyssal-time-display" aria-label="Mission Elapsed Time">
          <span className="abyssal-time-current">{formatTime(currentTime)}</span>
          <span className="abyssal-time-divider">/</span>
          <span className="abyssal-time-duration">{formatTime(duration)}</span>
        </div>
      </div>

      {/* Secondary & Diagnostic Group */}
      <div className="deck-group">
        {/* Playback Rate Calibration */}
        <button
          type="button"
          className="abyssal-btn"
          onClick={nextRate}
          aria-label={`Playback Velocity: ${playbackRate}x`}
          title="Adjust Playback Rate"
        >
          <Gauge size={14} style={{ marginRight: '4px' }} />
          <span>{playbackRate}x</span>
        </button>

        {/* HUD Telemetry Overlay Toggle */}
        <button
          type="button"
          className={`abyssal-btn ${showHud ? 'active' : ''}`}
          onClick={onToggleHud}
          aria-label={showHud ? 'Hide Submersible Telemetry HUD' : 'Show Submersible Telemetry HUD'}
          aria-pressed={showHud}
          title="Toggle Telemetry HUD"
        >
          {showHud ? <Eye size={17} /> : <EyeOff size={17} />}
        </button>

        {/* Picture-in-Picture Toggle */}
        {onTogglePiP && (
          <button
            type="button"
            className="abyssal-btn"
            onClick={onTogglePiP}
            aria-label="Toggle Picture-in-Picture Feed"
            title="Picture-in-Picture"
          >
            <PictureInPicture size={16} />
          </button>
        )}

        {/* Submersible Diagnostic Settings */}
        <button
          type="button"
          className={`abyssal-btn ${showSettings ? 'active' : ''}`}
          onClick={onToggleSettings}
          aria-label="Submersible Diagnostic Settings"
          aria-expanded={showSettings}
          title="Diagnostics & Settings"
        >
          <Sliders size={16} />
        </button>

        {/* Fullscreen Expand */}
        <button
          type="button"
          className="abyssal-btn"
          onClick={onToggleFullscreen}
          aria-label={isFullscreen ? 'Compress Observation Chamber' : 'Expand Full Chamber'}
          aria-pressed={isFullscreen}
          title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
        >
          {isFullscreen ? <Minimize size={17} /> : <Maximize size={17} />}
        </button>
      </div>
    </div>
  );
};
