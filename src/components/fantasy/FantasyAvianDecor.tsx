import React from 'react';

// ============================================================================
// WILDER FANTASY FOREST LIVING WORLD — PREMIUM ARTISTIC ASSETS
// High-fidelity handcrafted SVG illustrations & interactive nature components
// ============================================================================

interface DecorProps {
  className?: string;
  style?: React.CSSProperties;
  size?: number;
}

/**
 * Majestic Golden Eagle with Giant Outstretched Wings Spanning the Player
 * Realistic multi-tiered feather quills, golden primary tips, and regal crown.
 */
export const SpreadEagleWings: React.FC<DecorProps> = ({ className = '', style }) => (
  <svg
    viewBox="0 0 760 190"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.85))', ...style }}
    aria-hidden="true"
  >
    <defs>
      {/* Primary Wing Gradient */}
      <linearGradient id="eagleWingPrimaryGrad" x1="0" y1="50" x2="760" y2="50" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#1e130c" />
        <stop offset="12%" stopColor="#3d2616" />
        <stop offset="30%" stopColor="#694625" />
        <stop offset="50%" stopColor="#d4af37" />
        <stop offset="70%" stopColor="#694625" />
        <stop offset="88%" stopColor="#3d2616" />
        <stop offset="100%" stopColor="#1e130c" />
      </linearGradient>
      {/* Golden Highlight Feather Gradient */}
      <linearGradient id="eagleGoldHighlights" x1="380" y1="20" x2="380" y2="170" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fff8db" />
        <stop offset="35%" stopColor="#ffd466" />
        <stop offset="70%" stopColor="#b8861d" />
        <stop offset="100%" stopColor="#54370d" />
      </linearGradient>
      {/* Eagle Head & Crown */}
      <linearGradient id="eagleRegalHead" x1="360" y1="40" x2="400" y2="110" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="30%" stopColor="#f5df9a" />
        <stop offset="75%" stopColor="#cfa032" />
        <stop offset="100%" stopColor="#6b4a14" />
      </linearGradient>
    </defs>

    {/* LEFT WING OUTSTRETCHED PRIMARY & SECONDARY FEATHERS */}
    <g fill="url(#eagleWingPrimaryGrad)">
      {/* Upper Primary Flight Quills */}
      <path d="M380 95 C290 75 160 30 20 20 C10 40 40 70 130 92 C200 110 290 115 380 95 Z" />
      <path d="M20 20 C70 15 140 30 210 52 C280 72 340 88 380 95 C310 82 220 60 110 44 C55 35 15 25 20 20 Z" opacity="0.95" />
      <path d="M45 35 C12 45 2 62 14 78 C50 84 95 86 150 88 C95 78 50 67 45 35 Z" opacity="0.88" />
      <path d="M80 52 C35 68 25 90 42 110 C85 110 140 106 200 102 C135 97 80 87 80 52 Z" opacity="0.9" />
      <path d="M125 72 C80 94 70 120 98 135 C148 130 205 122 270 114 C205 113 138 102 125 72 Z" opacity="0.85" />
      <path d="M175 92 C135 115 128 140 158 152 C210 144 268 134 330 122 C265 124 195 114 175 92 Z" opacity="0.8" />
    </g>

    {/* LEFT WING GOLDEN FEATHER HIGHLIGHTS */}
    <path d="M25 24 C85 24 165 42 245 68" stroke="url(#eagleGoldHighlights)" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M60 42 C120 48 190 70 260 92" stroke="url(#eagleGoldHighlights)" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
    <path d="M100 65 C155 72 220 92 285 110" stroke="url(#eagleGoldHighlights)" strokeWidth="1.8" strokeLinecap="round" opacity="0.75" />

    {/* RIGHT WING OUTSTRETCHED PRIMARY & SECONDARY FEATHERS */}
    <g fill="url(#eagleWingPrimaryGrad)">
      {/* Upper Primary Flight Quills */}
      <path d="M380 95 C470 75 600 30 740 20 C750 40 720 70 630 92 C560 110 470 115 380 95 Z" />
      <path d="M740 20 C690 15 620 30 550 52 C480 72 420 88 380 95 C450 82 540 60 650 44 C705 35 745 25 740 20 Z" opacity="0.95" />
      <path d="M715 35 C748 45 758 62 746 78 C710 84 665 86 610 88 C665 78 710 67 715 35 Z" opacity="0.88" />
      <path d="M680 52 C725 68 735 90 718 110 C675 110 620 106 560 102 C625 97 680 87 680 52 Z" opacity="0.9" />
      <path d="M635 72 C680 94 690 120 662 135 C612 130 555 122 490 114 C555 113 622 102 635 72 Z" opacity="0.85" />
      <path d="M585 92 C625 115 632 140 602 152 C550 144 492 134 430 122 C495 124 565 114 585 92 Z" opacity="0.8" />
    </g>

    {/* RIGHT WING GOLDEN FEATHER HIGHLIGHTS */}
    <path d="M735 24 C675 24 595 42 515 68" stroke="url(#eagleGoldHighlights)" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M700 42 C640 48 570 70 500 92" stroke="url(#eagleGoldHighlights)" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
    <path d="M660 65 C605 72 540 92 475 110" stroke="url(#eagleGoldHighlights)" strokeWidth="1.8" strokeLinecap="round" opacity="0.75" />

    {/* CENTRAL TORSO & FAN TAIL */}
    <path
      d="M355 90 C355 120 368 155 380 178 C392 155 405 120 405 90 Z"
      fill="#442a18"
    />
    {/* Tail Feathers with Pure White Rim */}
    <path d="M368 152 L352 184 L375 180 L380 186 L385 180 L408 184 L392 152 Z" fill="#ffffff" opacity="0.95" />

    {/* REGAL EAGLE HEAD & FORWARD PROFILE */}
    <path
      d="M380 44 C366 44 358 56 362 74 C366 90 373 100 380 104 C387 100 394 90 398 74 C402 56 394 44 380 44 Z"
      fill="url(#eagleRegalHead)"
    />
    {/* Powerful Golden Hooked Beak */}
    <path
      d="M375 75 L385 75 L380 94 Z"
      fill="#ffd466"
    />
    <path d="M377 75 L383 75 L380 88 Z" fill="#f59e0b" />
    {/* Fierce Eyes */}
    <circle cx="371" cy="65" r="3" fill="#18110b" />
    <circle cx="371.6" cy="64.4" r="1" fill="#ffffff" />
    <circle cx="389" cy="65" r="3" fill="#18110b" />
    <circle cx="388.4" cy="64.4" r="1" fill="#ffffff" />
  </svg>
);

/**
 * Serpentine Twisted Tree Branch Search Bar Frame
 * Realistic gnarled bark grain, curling vines, blooming golden dew buds.
 */
export const TwistedBranchSearchBar: React.FC<DecorProps> = ({ className = '', style }) => (
  <svg
    viewBox="0 0 540 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ ...style }}
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="premiumBarkGrad" x1="0" y1="0" x2="540" y2="60" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#4a2e19" />
        <stop offset="25%" stopColor="#251509" />
        <stop offset="50%" stopColor="#5c3b20" />
        <stop offset="75%" stopColor="#2e190c" />
        <stop offset="100%" stopColor="#432815" />
      </linearGradient>
      <linearGradient id="mossVineShine" x1="0" y1="30" x2="540" y2="30" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#5ea825" />
        <stop offset="50%" stopColor="#a3ff47" />
        <stop offset="100%" stopColor="#5ea825" />
      </linearGradient>
    </defs>

    {/* Serpentine Twisted Bark Silhouette */}
    <path
      d="M 12 30 Q 28 4 72 10 T 165 8 T 270 4 T 375 10 T 475 6 Q 525 4 536 24 Q 542 46 498 52 T 375 54 T 270 58 T 165 54 T 42 52 Q 4 46 12 30 Z"
      fill="url(#premiumBarkGrad)"
      stroke="#140a04"
      strokeWidth="2.5"
    />
    {/* Interior Translucent Glass Fill for Input */}
    <path
      d="M 28 30 Q 40 14 78 18 T 170 16 T 270 12 T 370 18 T 465 14 Q 508 14 518 28 Q 522 42 485 46 T 370 48 T 270 52 T 170 48 T 55 46 Q 24 42 28 30 Z"
      fill="rgba(14, 22, 16, 0.75)"
      stroke="rgba(136, 214, 58, 0.3)"
      strokeWidth="1.2"
    />
    {/* Intertwined Living Vine */}
    <path
      d="M 18 28 Q 68 44 140 20 T 270 34 T 400 18 T 522 28"
      stroke="url(#mossVineShine)"
      strokeWidth="2.2"
      fill="none"
      opacity="0.9"
    />
    {/* Natural Sprouting Leaves & Golden Dew Nodes */}
    <path d="M 58 10 Q 60 2 66 4 Q 64 10 58 10 Z" fill="#88d63a" />
    <circle cx="66" cy="4" r="1.5" fill="#ffd466" />

    <path d="M 178 6 Q 181 0 187 2 Q 185 8 178 6 Z" fill="#a3ff47" />
    <circle cx="187" cy="2" r="1.5" fill="#ffd466" />

    <path d="M 320 54 Q 323 60 329 58 Q 327 53 320 54 Z" fill="#88d63a" />
    <circle cx="329" cy="58" r="1.5" fill="#ffd466" />

    <path d="M 452 8 Q 456 2 462 4 Q 459 10 452 8 Z" fill="#a3ff47" />
    <circle cx="462" cy="4" r="1.5" fill="#ffd466" />
  </svg>
);

/**
 * Left Sidebar Navigation Icons (Wooden Hut, Owl, Plaque, Reel)
 */
export const WoodenHutIcon: React.FC<{ size?: number; className?: string }> = ({ size = 26, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    {/* Mossy Green Leaf Gable Roof */}
    <path d="M16 2 L2 14 L7 14 L7 29 L25 29 L25 14 L30 14 Z" fill="#2d683a" stroke="#88d63a" strokeWidth="2" strokeLinejoin="round" />
    {/* Chimney */}
    <rect x="20" y="5" width="4" height="6" fill="#5c3c22" rx="1" />
    {/* Golden Sunlit Window */}
    <circle cx="16" cy="11" r="3" fill="#ffd466" />
    {/* Wooden Plank Door */}
    <path d="M12 18 L20 18 L20 29 L12 29 Z" fill="#f5c542" opacity="0.9" stroke="#5c3c22" strokeWidth="1" />
  </svg>
);

export const PerchedOwlIcon: React.FC<{ size?: number; className?: string }> = ({ size = 26, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    {/* Body */}
    <ellipse cx="16" cy="18" rx="8.5" ry="10.5" fill="#7a5538" stroke="#ffd466" strokeWidth="1.5" />
    {/* Ear Tufts */}
    <path d="M9 9 L12 14 M23 9 L20 14" stroke="#7a5538" strokeWidth="3" strokeLinecap="round" />
    {/* Big Luminous Eyes */}
    <circle cx="12.5" cy="14" r="4" fill="#ffffff" stroke="#2a180c" strokeWidth="1" />
    <circle cx="12.5" cy="14" r="1.8" fill="#18110b" />
    <circle cx="19.5" cy="14" r="4" fill="#ffffff" stroke="#2a180c" strokeWidth="1" />
    <circle cx="19.5" cy="14" r="1.8" fill="#18110b" />
    {/* Golden Beak */}
    <path d="M14.5 16 L17.5 16 L16 20 Z" fill="#ffd466" />
    {/* Perched Branch */}
    <path d="M5 28 C11 26 21 26 27 28" stroke="#5c3c22" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export const CarvedPlaqueIcon: React.FC<{ size?: number; className?: string }> = ({ size = 26, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    <rect x="4" y="6" width="24" height="20" rx="5" fill="#4d321d" stroke="#88d63a" strokeWidth="2" />
    <path d="M10 15 L22 15 M10 20 L18 20" stroke="#f7f4ed" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M16 10 C18 6 22 6 24 9 C21 11 18 11 16 10 Z" fill="#88d63a" />
  </svg>
);

export const TreeLibraryIcon: React.FC<{ size?: number; className?: string }> = ({ size = 26, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    <circle cx="16" cy="16" r="12" fill="#2a180c" stroke="#ffd466" strokeWidth="2" />
    <path d="M13 11 L22 16 L13 21 Z" fill="#88d63a" />
    <circle cx="16" cy="16" r="4" stroke="#ffd466" strokeWidth="1.2" fill="none" />
  </svg>
);

/**
 * Playful Bear Cub Frame Mascot (Clinging to Left & Right of Video Player)
 * Dimensional fur texture, rounded ears, and gentle hugging paws.
 */
export const BearCubHugging: React.FC<{ side?: 'left' | 'right'; size?: number; className?: string }> = ({
  side = 'left',
  size = 68,
  className = '',
}) => (
  <svg
    width={size}
    height={size * 1.3}
    viewBox="0 0 80 104"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{
      transform: side === 'right' ? 'scaleX(-1)' : 'none',
      filter: 'drop-shadow(0 8px 20px rgba(0, 0, 0, 0.75))',
    }}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id={`bearFur-${side}`} x1="20" y1="20" x2="60" y2="90" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#96663e" />
        <stop offset="55%" stopColor="#5c3c22" />
        <stop offset="100%" stopColor="#321e10" />
      </linearGradient>
      <linearGradient id={`bearSnout-${side}`} x1="45" y1="35" x2="65" y2="55" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ebc59d" />
        <stop offset="100%" stopColor="#b3875e" />
      </linearGradient>
    </defs>

    {/* Clinging Torso & Back */}
    <path
      d="M24 45 C14 55 8 76 15 92 C23 98 42 98 52 90 C62 82 65 65 58 48 Z"
      fill={`url(#bearFur-${side})`}
    />
    {/* Rear Paws clutching trunk */}
    <path d="M12 85 C8 92 14 100 24 98 C26 90 20 85 12 85 Z" fill="#3c2514" />

    {/* Large Cute Round Head */}
    <circle cx="48" cy="36" r="22" fill={`url(#bearFur-${side})`} />

    {/* Round Fluffy Ears with Pinkish-Gold Inner Rim */}
    <circle cx="34" cy="17" r="8.5" fill="#5c3c22" />
    <circle cx="34" cy="17" r="5" fill="#b3875e" />
    <circle cx="58" cy="17" r="8.5" fill="#5c3c22" />
    <circle cx="58" cy="17" r="5" fill="#b3875e" />

    {/* Warm Snout & Cute Button Nose */}
    <ellipse cx="56" cy="42" rx="10" ry="8" fill={`url(#bearSnout-${side})`} />
    <ellipse cx="58" cy="38" rx="4.2" ry="3" fill="#18110b" />
    <path d="M58 41 L58 45 M55 45 Q58 48 61 45" stroke="#18110b" strokeWidth="1.4" strokeLinecap="round" />

    {/* Big Soulful Eyes with Sunlight Catchlight */}
    <circle cx="44" cy="31" r="3.2" fill="#18110b" />
    <circle cx="44.6" cy="30.2" r="1.1" fill="#ffffff" />
    <circle cx="56" cy="29" r="3.2" fill="#18110b" />
    <circle cx="56.6" cy="28.2" r="1.1" fill="#ffffff" />

    {/* Front Claws Gripping Video Frame */}
    <path
      d="M52 56 C64 54 75 58 78 64 C76 70 66 70 54 66 Z"
      fill={`url(#bearFur-${side})`}
    />
    <circle cx="76" cy="64" r="3.8" fill="#2a180c" />
    <circle cx="72" cy="62" r="2.2" fill="#18110b" />
  </svg>
);

/**
 * Monarch Butterfly Perched on the Video Frame
 * Gentle animated fluttering wing beats.
 */
export const MonarchButterfly: React.FC<{ size?: number; className?: string }> = ({ size = 42, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 44 44"
    fill="none"
    className={`monarch-butterfly-svg ${className}`}
    aria-hidden="true"
  >
    {/* Left Forewing */}
    <path d="M22 20 Q 8 2 2 13 Q 5 24 22 22 Z" fill="#ff7a18" stroke="#18110b" strokeWidth="1.4" />
    {/* Left Hindwing */}
    <path d="M22 22 Q 8 25 4 33 Q 11 39 22 26 Z" fill="#ff9933" stroke="#18110b" strokeWidth="1.4" />
    {/* Right Forewing */}
    <path d="M22 20 Q 36 2 42 13 Q 39 24 22 22 Z" fill="#ff7a18" stroke="#18110b" strokeWidth="1.4" />
    {/* Right Hindwing */}
    <path d="M22 22 Q 36 25 40 33 Q 33 39 22 26 Z" fill="#ff9933" stroke="#18110b" strokeWidth="1.4" />
    {/* Delicate White Dot Clusters */}
    <circle cx="6" cy="15" r="1" fill="#ffffff" />
    <circle cx="38" cy="15" r="1" fill="#ffffff" />
    <circle cx="8" cy="34" r="1" fill="#ffffff" />
    <circle cx="36" cy="34" r="1" fill="#ffffff" />
    {/* Body & Antennae */}
    <line x1="22" y1="13" x2="22" y2="31" stroke="#18110b" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M22 13 Q 18 8 16 7 M22 13 Q 26 8 28 7" stroke="#18110b" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

/**
 * Forest Singing Robin perched on branch next to player
 */
export const PerchedRobin: React.FC<{ size?: number; className?: string }> = ({ size = 42, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 44 44" fill="none" className={`perched-robin-svg ${className}`} aria-hidden="true">
    {/* Body */}
    <path d="M12 28 C12 20 18 14 26 14 C32 14 36 18 36 24 C36 32 26 34 16 32 Z" fill="#4d321d" />
    {/* Red/Orange Breast */}
    <path d="M22 18 C28 18 34 22 34 28 C34 32 28 34 22 32 Z" fill="#e0531c" />
    {/* Eye */}
    <circle cx="28" cy="18" r="2" fill="#111" />
    <circle cx="28.4" cy="17.6" r="0.7" fill="#fff" />
    {/* Singing Beak */}
    <path d="M34 18 L41 16 L34 20 Z" fill="#ffd466" />
    {/* Folded Wing */}
    <path d="M14 22 C18 20 22 22 22 28 C18 30 14 28 14 22 Z" fill="#2e1d13" />
    {/* Tail */}
    <path d="M14 28 L4 34 L8 36 L16 30 Z" fill="#2e1d13" />
  </svg>
);

/**
 * Ambient Living Forest Spores & Fireflies
 * Pure CSS animated bioluminescent particle system.
 */
export const LivingForestFireflies: React.FC = () => (
  <div className="living-forest-fireflies" aria-hidden="true">
    <div className="firefly firefly-1" />
    <div className="firefly firefly-2" />
    <div className="firefly firefly-3" />
    <div className="firefly firefly-4" />
    <div className="firefly firefly-5" />
    <div className="firefly firefly-6" />
    <div className="firefly firefly-7" />
  </div>
);
