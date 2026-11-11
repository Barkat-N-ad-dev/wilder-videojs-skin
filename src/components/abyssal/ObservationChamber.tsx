import React from 'react';
import { Play, Pause } from 'lucide-react';

interface ObservationChamberProps {
  children?: React.ReactNode;
  isPlaying: boolean;
  onTogglePlay: () => void;
  showHud: boolean;
  isLoading: boolean;
  aspectRatio?: '16/9' | '21/9' | '4/3';
  depthText?: string;
  pressureText?: string;
  submersibleId?: string;
}

export const ObservationChamber: React.FC<ObservationChamberProps> = ({
  children,
  isPlaying,
  onTogglePlay,
  showHud,
  isLoading,
  aspectRatio = '16/9',
  depthText = '10,928 M',
  pressureText = '1,085 BAR',
  submersibleId = 'SUB-ARCHELON-01',
}) => {
  const aspectClass =
    aspectRatio === '21/9'
      ? 'aspect-wide'
      : aspectRatio === '4/3'
      ? 'aspect-standard'
      : '';

  return (
    <div className={`abyssal-chamber ${aspectClass}`}>
      {/* Video Content */}
      {children}

      {/* Futuristic Submersible Reticle & Telemetry Overlay */}
      <div className={`abyssal-hud-layer ${!showHud ? 'hud-hidden' : ''}`}>
        <div className="hud-corner hud-corner-tl" />
        <div className="hud-corner hud-corner-tr" />
        <div className="hud-corner hud-corner-bl" />
        <div className="hud-corner hud-corner-br" />
        <div className="hud-center-crosshair" />

        <div className="hud-telemetry-strip">
          <div>
            <span>CHAMBER: PORT-01 // {submersibleId}</span>
          </div>
          <div>
            <span>DEPTH: {depthText} | HYDRO-PRES: {pressureText}</span>
          </div>
        </div>
      </div>

      {/* Center Illuminated Play/Pause Trigger (when paused or hovered) */}
      {!isPlaying && !isLoading && (
        <div className="abyssal-center-play-wrapper">
          <div className="abyssal-center-sonar-ring" />
          <button
            type="button"
            className="abyssal-center-play-btn"
            onClick={onTogglePlay}
            aria-label="Initiate Observation Feed"
            title="Initiate Observation Feed"
          >
            <Play size={32} fill="#00d9f5" />
          </button>
        </div>
      )}

      {/* Sonar Radar Loading / Signal Acquisition Overlay */}
      {isLoading && (
        <div className="abyssal-loading-overlay">
          <div className="radar-scope">
            <div className="radar-sweep-beam" />
          </div>
          <div style={{ color: 'var(--abyss-cyan)', letterSpacing: '2px', fontSize: '12px' }}>
            ACOUSTIC TARGET LOCK IN PROGRESS...
          </div>
        </div>
      )}
    </div>
  );
};
