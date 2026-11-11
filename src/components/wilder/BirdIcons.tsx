import React from 'react';

// ============================================================================
// WILDER STUDIO-GRADE AVIAN & BOTANICAL ICONS
// Sculptural, realistic, aerodynamic silhouettes crafted for luxury cinema UI.
// No cartoonish shapes, no childish eyes or comical beaks.
// ============================================================================

interface IconProps {
  size?: number;
  className?: string;
  color?: string;
}

/**
 * Majestic Sculptural Bird in Upward Flight (Center Play / Full Wingspread)
 * Precision aerodynamic avian silhouette inspired by the Peregrine Falcon & Eagle.
 */
export const SculpturalFlightBird: React.FC<IconProps> = ({
  size = 56,
  className = '',
  color = '#f7f4ed',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.4))' }}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="wilderWingGradGold" x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ffe58f" />
        <stop offset="50%" stopColor="#d4af37" />
        <stop offset="100%" stopColor="#a3781e" />
      </linearGradient>
      <linearGradient id="wilderFeatherGrad" x1="50" y1="20" x2="50" y2="90" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
        <stop offset="100%" stopColor="#e8dfcc" stopOpacity="0.8" />
      </linearGradient>
    </defs>
    {/* Outstretched Left Wing Primary Feathers */}
    <path
      d="M50 48 C42 32 26 18 8 16 C12 28 22 42 36 50 C26 38 14 30 4 28 C8 38 18 50 32 56 C22 46 12 40 6 40 C12 50 24 58 36 62 Z"
      fill="url(#wilderFeatherGrad)"
    />
    {/* Outstretched Right Wing Primary Feathers */}
    <path
      d="M50 48 C58 32 74 18 92 16 C88 28 78 42 64 50 C74 38 86 30 96 28 C92 38 82 50 68 56 C78 46 88 40 94 40 C88 50 76 58 64 62 Z"
      fill="url(#wilderFeatherGrad)"
    />
    {/* Central Aerodynamic Fuselage & Head in Ascending Flight */}
    <path
      d="M50 20 C52 26 55 34 54 44 C53 54 52 64 53 74 L50 82 L47 74 C48 64 47 54 46 44 C45 34 48 26 50 20 Z"
      fill="url(#wilderWingGradGold)"
    />
    {/* Sleek Forward Crest / Head */}
    <path
      d="M50 14 C52 17 52.5 21 50 24 C47.5 21 48 17 50 14 Z"
      fill="#ffffff"
    />
    {/* Fanned Tail Feathers */}
    <path
      d="M47 74 L40 88 L46 86 L50 90 L54 86 L60 88 L53 74 Z"
      fill="url(#wilderWingGradGold)"
      opacity="0.9"
    />
  </svg>
);

/**
 * Resting Bird Calmly Perched on a Delicate Sprig (Pause State)
 * Realistic, serene profile silhouette of a songbird/kingfisher with folded wings.
 */
export const SculpturalRestingBird: React.FC<IconProps> = ({
  size = 48,
  className = '',
  color = '#f7f4ed',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ filter: 'drop-shadow(0 3px 8px rgba(0, 0, 0, 0.4))' }}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="restBodyGrad" x1="30" y1="20" x2="70" y2="80" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="60%" stopColor="#e8ded0" />
        <stop offset="100%" stopColor="#c8bfae" />
      </linearGradient>
      <linearGradient id="restWingGrad" x1="40" y1="35" x2="75" y2="85" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#d4af37" />
        <stop offset="100%" stopColor="#8f6b1b" />
      </linearGradient>
    </defs>
    {/* Perched Branch Sprig */}
    <path
      d="M14 80 C32 77 55 76 86 78 C80 77 65 75 50 77 C35 78 20 81 14 80 Z"
      stroke="#7c5f3b"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    <path
      d="M68 76 C72 70 78 68 84 69"
      stroke="#7c5f3b"
      strokeWidth="2"
      strokeLinecap="round"
    />
    {/* Small leaf on branch */}
    <path
      d="M84 69 C88 66 94 67 96 71 C92 72 87 71 84 69 Z"
      fill="#88d63a"
    />
    {/* Bird Tail Feathers Extending Down Past Branch */}
    <path
      d="M38 68 L24 88 L30 87 L38 74 Z"
      fill="#a8842c"
    />
    {/* Bird Breast & Underbelly */}
    <path
      d="M44 38 C40 44 38 54 42 66 C46 74 54 77 62 76 C56 75 50 72 48 64 C44 54 48 44 52 38 Z"
      fill="url(#restBodyGrad)"
    />
    {/* Folded Primary Wing */}
    <path
      d="M46 40 C55 38 68 44 72 56 C74 64 70 72 62 76 C66 70 68 60 64 52 C60 46 52 42 46 40 Z"
      fill="url(#restWingGrad)"
    />
    {/* Wing Feather Texture lines */}
    <path d="M52 48 C58 52 64 60 62 70" stroke="#f7e6a6" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M56 52 C60 56 65 62 64 68" stroke="#ffe58f" strokeWidth="1" strokeLinecap="round" />
    {/* Head & Beak Profile */}
    <path
      d="M48 38 C46 32 48 26 53 23 C57 20 62 21 65 25 C67 28 66 33 63 36 C58 39 52 40 48 38 Z"
      fill="url(#restBodyGrad)"
    />
    {/* Slender Royal Beak */}
    <path
      d="M64 26 L76 29 L64 32 Z"
      fill="#d4af37"
    />
    {/* Tiny Realistic Claws holding branch */}
    <path d="M52 75 L52 78 M56 75 L56 79 M60 75 L61 78" stroke="#ffd56b" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

/**
 * Realistic Hummingbird in Glide — The Draggable Seek Indicator Handle
 * Sleek, elegant, jewel-like avian vector gliding along the branch timeline.
 */
export const GlidingSeekBird: React.FC<IconProps> = ({
  size = 28,
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ filter: 'drop-shadow(0 2px 6px rgba(0, 0, 0, 0.6))' }}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="hummingBody" x1="15" y1="15" x2="45" y2="45" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="50%" stopColor="#a7e652" />
        <stop offset="100%" stopColor="#3d7d1e" />
      </linearGradient>
      <linearGradient id="hummingWing" x1="10" y1="10" x2="35" y2="35" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ffd866" />
        <stop offset="100%" stopColor="#c48a1c" />
      </linearGradient>
    </defs>
    {/* Forward Beak */}
    <path d="M42 27 L57 29 L42 31 Z" fill="#ffd866" />
    {/* Head & Torso */}
    <path
      d="M26 33 C22 35 16 38 8 36 C14 34 20 31 24 28 C28 25 35 24 40 27 C43 29 43 32 40 33 C35 34 30 33 26 33 Z"
      fill="url(#hummingBody)"
    />
    {/* Aerodynamic High-Speed Wing in Upstroke */}
    <path
      d="M28 28 C24 18 16 8 8 4 C12 12 18 20 25 27 C20 18 14 12 6 9 C11 17 19 25 27 29 Z"
      fill="url(#hummingWing)"
    />
    {/* Trailing Tail Quill */}
    <path d="M12 36 L2 44 L9 39 Z" fill="#ffd866" />
    {/* Subtle Eye Reflection */}
    <circle cx="38" cy="28" r="1.2" fill="#152614" />
  </svg>
);

/**
 * Singing Songbird with Acoustic Soundwaves (Volume Control)
 * Sleek avian silhouette facing right with melodic concentric acoustic rings.
 */
export const SingingAcousticBird: React.FC<IconProps & { volumeLevel?: number; isMuted?: boolean }> = ({
  size = 22,
  className = '',
  volumeLevel = 1,
  isMuted = false,
  color = '#f7f4ed',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Songbird Body Silhouette */}
    <path
      d="M5 22 C4 20 5 17 8 15 C11 13 14 12 17 14 C18 11 20 9 22 9 C24 9 25 11 24 13 C26 12 28 13 29 13.5 L25 15.5 C24 18 21 21 17 21 C13 21 11 22 7 23 Z"
      fill={isMuted ? '#8a9b8e' : color}
    />
    {/* Open Singing Beak */}
    {!isMuted && (
      <path d="M24 12 L28 10.5 L24.5 13 Z" fill="#ffd866" />
    )}
    {/* Slender Tail */}
    <path d="M6 22 L2 26 L5 23 Z" fill={isMuted ? '#8a9b8e' : color} />

    {/* Acoustic Resonance Sound Arcs */}
    {!isMuted && volumeLevel > 0.1 && (
      <path
        d="M27 9 C29 12 29 17 27 20"
        stroke="#a2ea4c"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    )}
    {!isMuted && volumeLevel > 0.55 && (
      <path
        d="M30 6 C33 11 33 19 30 24"
        stroke="#ffd866"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    )}

    {/* Mute Slash if muted */}
    {isMuted && (
      <line
        x1="4"
        y1="28"
        x2="28"
        y2="4"
        stroke="#f87171"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    )}
  </svg>
);

/**
 * Majestic Soaring Wings Expanding to Corners (Fullscreen Control)
 * Symmetrical soaring bird wings spreading out to the screen perimeter.
 */
export const SoaringFullscreenBird: React.FC<IconProps & { isFullscreen?: boolean }> = ({
  size = 22,
  className = '',
  isFullscreen = false,
  color = '#f7f4ed',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {isFullscreen ? (
      /* Contract / Exit Fullscreen: Inward Wing Feathers */
      <g stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 6 L6 6 L6 12" />
        <path d="M20 6 L26 6 L26 12" />
        <path d="M12 26 L6 26 L6 20" />
        <path d="M20 26 L26 26 L26 20" />
        <path d="M16 11 L16 21" stroke="#a2ea4c" strokeWidth="1.5" />
      </g>
    ) : (
      /* Expand to Corners: Sculpted Outward Avian Wing Spans */
      <g>
        {/* Top-Left Wing Tip */}
        <path
          d="M13 13 C9 11 5 7 3 3 C7 5 11 9 13 13 Z"
          fill="#ffd866"
        />
        {/* Top-Right Wing Tip */}
        <path
          d="M19 13 C23 11 27 7 29 3 C25 5 21 9 19 13 Z"
          fill="#ffd866"
        />
        {/* Bottom Corner Anchors */}
        <path
          d="M13 19 C9 21 5 25 3 29 C7 27 11 23 13 19 Z"
          fill="#a2ea4c"
        />
        <path
          d="M19 19 C23 21 27 25 29 29 C25 27 21 23 19 19 Z"
          fill="#a2ea4c"
        />
        {/* Central Avian Emblem */}
        <circle cx="16" cy="16" r="2.5" fill={color} />
      </g>
    )}
  </svg>
);

/**
 * Delicate Botanical Leaf Badge (Speed, Captions, Nature Details)
 */
export const BotanicalLeafIcon: React.FC<IconProps> = ({
  size = 18,
  className = '',
  color = '#a2ea4c',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C12 17 15 13 20 12C20 6.5 17.5 2 12 2Z"
      fill={color}
    />
    <path
      d="M12 22C17 22 21 18 21 13C16 13 13 17 12 22Z"
      fill="#ffd866"
      opacity="0.8"
    />
    <path
      d="M4 18 C8 14 14 8 20 4"
      stroke="#142c16"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);
