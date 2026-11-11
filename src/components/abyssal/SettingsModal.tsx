import React from 'react';
import { X, Check } from 'lucide-react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  playbackRate: number;
  onChangePlaybackRate: (rate: number) => void;
  quality: string;
  onChangeQuality: (q: string) => void;
  audioFilter: string;
  onChangeAudioFilter: (filter: string) => void;
  bioluminescentBoost: boolean;
  onToggleBioBoost: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  playbackRate,
  onChangePlaybackRate,
  quality,
  onChangeQuality,
  audioFilter,
  onChangeAudioFilter,
  bioluminescentBoost,
  onToggleBioBoost,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="abyssal-settings-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Submersible Diagnostic Settings"
    >
      <div className="settings-header">
        <span>SUB-01 DIAGNOSTICS & TELEMETRY</span>
        <button
          type="button"
          onClick={onClose}
          style={{ background: 'none', border: 'none', color: 'var(--abyss-cyan)', cursor: 'pointer' }}
          aria-label="Close Settings"
        >
          <X size={16} />
        </button>
      </div>

      <div className="settings-row">
        <label htmlFor="select-speed" style={{ color: 'var(--abyss-text-label)' }}>
          TRANSMISSION SPEED
        </label>
        <select
          id="select-speed"
          value={playbackRate}
          onChange={(e) => onChangePlaybackRate(parseFloat(e.target.value))}
          className="settings-select"
        >
          <option value="0.5">0.50x (Slow Recon)</option>
          <option value="0.75">0.75x (Detail)</option>
          <option value="1">1.00x (Standard)</option>
          <option value="1.25">1.25x (Accelerated)</option>
          <option value="1.5">1.50x (Fast Ascent)</option>
          <option value="2">2.00x (Emergency)</option>
        </select>
      </div>

      <div className="settings-row">
        <label htmlFor="select-quality" style={{ color: 'var(--abyss-text-label)' }}>
          OPTICAL RESOLUTION
        </label>
        <select
          id="select-quality"
          value={quality}
          onChange={(e) => onChangeQuality(e.target.value)}
          className="settings-select"
        >
          <option value="auto">Adaptive HLS (Auto)</option>
          <option value="1080p">1080p Ultra-Hadal</option>
          <option value="720p">720p Pelagic</option>
          <option value="480p">480p Low-Bandwidth</option>
        </select>
      </div>

      <div className="settings-row">
        <label htmlFor="select-filter" style={{ color: 'var(--abyss-text-label)' }}>
          HYDROPHONE DSP
        </label>
        <select
          id="select-filter"
          value={audioFilter}
          onChange={(e) => onChangeAudioFilter(e.target.value)}
          className="settings-select"
        >
          <option value="flat">Standard Acoustic</option>
          <option value="deep">Benthic Low-Pass</option>
          <option value="sonar">Sonar Isolation (42kHz)</option>
        </select>
      </div>

      <div className="settings-row" style={{ marginTop: '14px', paddingTop: '8px', borderTop: '1px solid rgba(0, 217, 245, 0.15)' }}>
        <span style={{ color: 'var(--abyss-text-label)' }}>BIOLUMINESCENT BOOST</span>
        <button
          type="button"
          onClick={onToggleBioBoost}
          className={`abyssal-btn ${bioluminescentBoost ? 'active' : ''}`}
          style={{ height: '32px', minWidth: '32px', padding: '0 8px' }}
          aria-pressed={bioluminescentBoost}
        >
          {bioluminescentBoost ? <Check size={14} /> : 'OFF'}
        </button>
      </div>
    </div>
  );
};
