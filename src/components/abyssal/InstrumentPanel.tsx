import React from 'react';

interface InstrumentPanelProps {
  currentTime: number;
  duration: number;
  bufferedEnd: number;
  baseDepthMeters?: number;
}

export const InstrumentPanel: React.FC<InstrumentPanelProps> = ({
  currentTime,
  duration,
  bufferedEnd,
  baseDepthMeters = 10928,
}) => {
  const safeDuration = duration > 0 ? duration : 100;
  const ratio = Math.min(1, Math.max(0, currentTime / safeDuration));

  // Dynamic bathymetry calculation based on dive progress
  const currentDepth = Math.round(1200 + ratio * (baseDepthMeters - 1200));
  // 1 atmosphere ~ 1 bar per 10 meters of depth in seawater
  const hydrostaticPressure = Math.round(currentDepth / 10.05);

  const bufferHealthPercent = Math.min(
    100,
    Math.round(((bufferedEnd - currentTime) / Math.max(1, safeDuration - currentTime)) * 100) || 45
  );

  return (
    <div className="abyssal-instrument-panel" aria-label="Acoustic & Environmental Telemetry">
      <div className="instrument-card cyan-accent">
        <span className="instrument-label">HADAL BATHYMETRY</span>
        <div className="instrument-value">
          <span>{currentDepth.toLocaleString()} M</span>
          <span style={{ fontSize: '10px', color: 'var(--abyss-cyan)' }}>SUB-01</span>
        </div>
        <div className="instrument-meter">
          <div
            className="instrument-meter-fill"
            style={{ width: `${Math.round(ratio * 100)}%` }}
          />
        </div>
      </div>

      <div className="instrument-card amber-alert">
        <span className="instrument-label">HYDROSTATIC PRESSURE</span>
        <div className="instrument-value">
          <span>{hydrostaticPressure.toLocaleString()} BAR</span>
          <span style={{ fontSize: '10px', color: 'var(--abyss-amber)' }}>HULL STABLE</span>
        </div>
        <div className="instrument-meter">
          <div
            className="instrument-meter-fill"
            style={{
              width: `${Math.min(100, Math.round((hydrostaticPressure / 1150) * 100))}%`,
              backgroundColor: 'var(--abyss-amber)',
              boxShadow: '0 0 6px var(--abyss-amber)',
            }}
          />
        </div>
      </div>

      <div className="instrument-card">
        <span className="instrument-label">BUFFER TELEMETRY</span>
        <div className="instrument-value">
          <span>{Math.round((bufferedEnd / safeDuration) * 100)}%</span>
          <span style={{ fontSize: '10px', color: 'var(--abyss-teal-bright)' }}>L-BAND HLS</span>
        </div>
        <div className="instrument-meter">
          <div
            className="instrument-meter-fill"
            style={{
              width: `${Math.round((bufferedEnd / safeDuration) * 100)}%`,
              backgroundColor: 'var(--abyss-teal-bright)',
            }}
          />
        </div>
      </div>

      <div className="instrument-card">
        <span className="instrument-label">ACOUSTIC LINK</span>
        <div className="instrument-value">
          <span>42.5 kHz</span>
          <span style={{ fontSize: '10px', color: 'var(--abyss-green-safe)' }}>99.8% LOCK</span>
        </div>
        <div className="instrument-meter">
          <div
            className="instrument-meter-fill"
            style={{ width: '99%', backgroundColor: 'var(--abyss-green-safe)' }}
          />
        </div>
      </div>
    </div>
  );
};
