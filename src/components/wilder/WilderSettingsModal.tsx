import React from 'react';
import { X, Sliders, Volume2, Film, Sparkles } from 'lucide-react';
import { BotanicalLeafIcon } from './BirdIcons';

interface WilderSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  playbackRate: number;
  onChangePlaybackRate: (rate: number) => void;
  quality: string;
  onChangeQuality: (q: string) => void;
  audioAcoustics: string;
  onChangeAudioAcoustics: (a: string) => void;
  narratorTrack: boolean;
  onToggleNarratorTrack: () => void;
}

export const WilderSettingsModal: React.FC<WilderSettingsModalProps> = ({
  isOpen,
  onClose,
  playbackRate,
  onChangePlaybackRate,
  quality,
  onChangeQuality,
  audioAcoustics,
  onChangeAudioAcoustics,
  narratorTrack,
  onToggleNarratorTrack,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="wilder-settings-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Stream Settings"
    >
      <div
        className="wilder-settings-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="settings-header">
          <div className="settings-title-group">
            <BotanicalLeafIcon size={16} color="#a2ea4c" />
            <span className="settings-title-text">CINEMA ENGINE PREFERENCES</span>
          </div>
          <button
            type="button"
            className="settings-close-btn"
            onClick={onClose}
            aria-label="Close settings"
          >
            <X size={16} />
          </button>
        </div>

        {/* Setting Row: Quality */}
        <div className="settings-field">
          <div className="field-label-group">
            <Film size={14} className="field-icon" />
            <label htmlFor="setting-quality">CANOPY RESOLUTION</label>
          </div>
          <select
            id="setting-quality"
            value={quality}
            onChange={(e) => onChangeQuality(e.target.value)}
            className="settings-select"
          >
            <option value="4k">4K Master HDR (60fps)</option>
            <option value="1080p">1080p Full High Definition</option>
            <option value="720p">720p Mobile Optimized</option>
            <option value="auto">Adaptive Stream (Auto)</option>
          </select>
        </div>

        {/* Setting Row: Playback Velocity */}
        <div className="settings-field">
          <div className="field-label-group">
            <Sliders size={14} className="field-icon" />
            <label htmlFor="setting-rate">PLAYBACK TEMPO</label>
          </div>
          <select
            id="setting-rate"
            value={playbackRate}
            onChange={(e) => onChangePlaybackRate(parseFloat(e.target.value))}
            className="settings-select"
          >
            <option value="0.5">0.50x (Slow-Motion Study)</option>
            <option value="0.75">0.75x (Gentle Observation)</option>
            <option value="1">1.00x (Natural Reality)</option>
            <option value="1.25">1.25x (Elevated Pace)</option>
            <option value="1.5">1.50x (Expedited)</option>
          </select>
        </div>

        {/* Setting Row: Soundscape */}
        <div className="settings-field">
          <div className="field-label-group">
            <Volume2 size={14} className="field-icon" />
            <label htmlFor="setting-audio">ACOUSTIC PROFILE</label>
          </div>
          <select
            id="setting-audio"
            value={audioAcoustics}
            onChange={(e) => onChangeAudioAcoustics(e.target.value)}
            className="settings-select"
          >
            <option value="dolby">Spatial Dolby Canopy Master</option>
            <option value="pure">Pure Biome Ambience (No Voice)</option>
            <option value="hydro">Submerged Hydrophone Focus</option>
          </select>
        </div>

        {/* Setting Row: Narrator Voice Toggle */}
        <div className="settings-field settings-toggle-field">
          <div className="field-label-group">
            <Sparkles size={14} className="field-icon" />
            <span>NARRATOR DISCOURSE</span>
          </div>
          <button
            type="button"
            className={`toggle-switch-btn ${narratorTrack ? 'is-active' : ''}`}
            onClick={onToggleNarratorTrack}
            aria-label="Toggle Narrator Track"
          >
            <div className="toggle-thumb" />
          </button>
        </div>
      </div>
    </div>
  );
};
