import React from 'react';

// ============================================================================
// 1. Perched Kingfisher on Mossy Branch (Bottom-Left)
// ============================================================================
export const PerchedKingfisherDetail: React.FC<{ size?: number; className?: string }> = ({
  size = 120,
  className = '',
}) => (
  <svg
    width={size}
    height={size * 1.15}
    viewBox="0 0 160 184"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ filter: 'drop-shadow(0 12px 24px rgba(0, 0, 0, 0.6))' }}
  >
    <defs>
      <linearGradient id="kfBreast" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f39c12" />
        <stop offset="50%" stop-color="#e67e22" />
        <stop offset="100%" stop-color="#d35400" />
      </linearGradient>
      <linearGradient id="kfWing" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#00d2d3" />
        <stop offset="40%" stop-color="#0abde3" />
        <stop offset="85%" stop-color="#10ac84" />
        <stop offset="100%" stop-color="#222f3e" />
      </linearGradient>
      <radialGradient id="kfHead" cx="40%" cy="40%" r="60%">
        <stop offset="0%" stop-color="#00cec9" />
        <stop offset="70%" stop-color="#0984e3" />
        <stop offset="100%" stop-color="#2c3e50" />
      </radialGradient>
      <linearGradient id="kfBeak" x1="0%" y1="0%" x2="100%" y2="50%">
        <stop offset="0%" stop-color="#2d3436" />
        <stop offset="50%" stop-color="#1e272e" />
        <stop offset="100%" stop-color="#000000" />
      </linearGradient>
    </defs>

    {/* Tail feathers */}
    <path d="M52 118 L34 162 L48 158 L62 122 Z" fill="#0984e3" />
    <path d="M42 124 L32 166 L38 164 L48 126 Z" fill="#0c2461" />
    <path d="M46 128 L36 156" stroke="#e67e22" strokeWidth="2.5" strokeLinecap="round" />

    {/* Plump Breast & Belly */}
    <path
      d="M58 72 C72 70, 96 82, 98 108 C100 132, 84 144, 66 142 C52 140, 48 122, 54 102 C56 90, 56 78, 58 72 Z"
      fill="url(#kfBreast)"
    />

    {/* White / Cream Cheek & Neck Patch */}
    <ellipse cx="88" cy="74" rx="7" ry="10" fill="#f8f4ec" />
    <path d="M84 76 Q92 78 88 84 Z" fill="#e8ded1" />

    {/* Folded Wing with layered feather texture */}
    <path
      d="M54 74 C50 92, 50 114, 66 130 C62 114, 66 94, 76 80 C68 74, 58 72, 54 74 Z"
      fill="url(#kfWing)"
      stroke="#0c2461"
      strokeWidth="1.2"
    />
    <path d="M60 88 C58 104, 60 118, 68 124" stroke="#00d2d3" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M66 94 C64 108, 66 120, 72 122" stroke="#222f3e" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M72 100 C70 110, 72 118, 76 120" stroke="#00cec9" strokeWidth="1.8" strokeLinecap="round" />

    {/* Head & Crown Crest */}
    <ellipse cx="78" cy="56" rx="22" ry="20" fill="url(#kfHead)" />
    <path d="M68 40 C74 36, 86 38, 92 46 C84 44, 76 42, 68 40 Z" fill="#00cec9" />
    <path d="M62 44 C68 40, 78 42, 84 48 C76 47, 70 46, 62 44 Z" fill="#0984e3" />

    {/* Long Sturdy Sharp Beak */}
    <path d="M92 56 L142 66 L92 72 Z" fill="url(#kfBeak)" />
    <path d="M92 64 L138 66" stroke="#636e72" strokeWidth="1" />

    {/* Glowing Eye */}
    <circle cx="82" cy="54" r="4.5" fill="#111111" />
    <circle cx="83.5" cy="52.5" r="1.5" fill="#ffffff" />
    <circle cx="80.5" cy="55.5" r="0.8" fill="#f39c12" />

    {/* Claws clutching the bark */}
    <path d="M66 142 L64 154 M72 142 L74 156 M78 142 L84 154" stroke="#e67e22" strokeWidth="3" strokeLinecap="round" />
    <path d="M64 152 L60 156 M74 154 L76 158 M82 152 L86 156" stroke="#2d3436" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// ============================================================================
// 2. Flying Kingfisher (Center Mid-Air with Outstretched Wings)
// ============================================================================
export const FlyingKingfisherDetail: React.FC<{ size?: number; className?: string }> = ({
  size = 140,
  className = '',
}) => (
  <svg
    width={size}
    height={size * 0.8}
    viewBox="0 0 200 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ filter: 'drop-shadow(0 16px 32px rgba(0, 0, 0, 0.65))' }}
  >
    <defs>
      <linearGradient id="flyWingLeft" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#00d2d3" />
        <stop offset="50%" stop-color="#0abde3" />
        <stop offset="100%" stop-color="#10ac84" />
      </linearGradient>
      <linearGradient id="flyWingRight" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#00cec9" />
        <stop offset="70%" stop-color="#0984e3" />
        <stop offset="100%" stop-color="#2c3e50" />
      </linearGradient>
      <linearGradient id="flyBelly" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f39c12" />
        <stop offset="60%" stop-color="#e67e22" />
        <stop offset="100%" stop-color="#d35400" />
      </linearGradient>
    </defs>

    {/* Far Right Wing (Spread Upward) */}
    <path
      d="M100 80 C95 45, 80 18, 55 4 C68 24, 82 50, 96 76 Z"
      fill="url(#flyWingRight)"
      opacity="0.9"
    />
    <path d="M55 4 C65 20, 75 40, 85 60" stroke="#00d2d3" strokeWidth="2.5" strokeLinecap="round" />

    {/* Tail Feathers */}
    <path d="M70 102 L26 122 L36 130 L65 112 Z" fill="#0984e3" />
    <path d="M30 124 L60 108" stroke="#e67e22" strokeWidth="2.5" strokeLinecap="round" />

    {/* Bird Body in Flight */}
    <path
      d="M72 90 C84 80, 114 78, 138 86 C158 92, 172 106, 180 102 C174 112, 154 118, 134 115 C112 112, 86 118, 72 104 Z"
      fill="url(#flyBelly)"
    />

    {/* Near Left Wing (Spread Wide Across) */}
    <path
      d="M84 84 C68 52, 38 20, 6 6 C16 26, 36 60, 64 82 C74 88, 78 86, 84 84 Z"
      fill="url(#flyWingLeft)"
      stroke="#0c2461"
      strokeWidth="1.5"
    />
    {/* Wing Feather Primaries */}
    <path d="M6 6 C24 20, 42 38, 60 58" stroke="#e67e22" strokeWidth="3" strokeLinecap="round" />
    <path d="M18 28 C34 42, 50 60, 68 74" stroke="#0c2461" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M30 46 C44 58, 58 72, 74 82" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.8" />

    {/* Head & Neck */}
    <ellipse cx="140" cy="88" rx="20" ry="18" fill="#0984e3" />
    <circle cx="148" cy="84" r="14" fill="#00cec9" />
    <ellipse cx="142" cy="98" rx="8" ry="5" fill="#f8f4ec" />

    {/* Beak Pointed Forward */}
    <path d="M158 82 L198 90 L160 96 Z" fill="#1e272e" />
    <path d="M160 89 L194 90" stroke="#74b9ff" strokeWidth="1" />

    {/* Eye */}
    <circle cx="150" cy="84" r="3.5" fill="#111" />
    <circle cx="151.5" cy="82.5" r="1.2" fill="#fff" />
  </svg>
);

// ============================================================================
// 3. Mini Flying Hummingbird (Timeline Seek Handle)
// ============================================================================
export const MiniSeekBird: React.FC<{ size?: number; className?: string }> = ({
  size = 46,
  className = '',
}) => (
  <svg
    width={size}
    height={size * 0.8}
    viewBox="0 0 60 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ filter: 'drop-shadow(0 4px 10px rgba(0, 0, 0, 0.55))' }}
  >
    {/* Fluttering Wings */}
    <path d="M26 22 C22 10, 12 2, 2 0 C8 10, 18 18, 24 24 Z" fill="#00d2d3" />
    <path d="M30 20 C32 10, 38 2, 46 0 C42 8, 36 16, 32 22 Z" fill="#0984e3" opacity="0.85" />
    {/* Body */}
    <ellipse cx="27" cy="26" rx="9" ry="6" fill="#e67e22" />
    {/* Head & Long Dagger Needle Beak */}
    <circle cx="34" cy="23" r="5.5" fill="#0abde3" />
    <path d="M38 22 L56 21 L39 25 Z" fill="#1e272e" />
    <circle cx="35" cy="22" r="1.5" fill="#fff" />
    {/* Tail */}
    <path d="M19 28 L8 36 L14 38 L22 31 Z" fill="#0c2461" />
    <path d="M10 35 L20 30" stroke="#f39c12" strokeWidth="1.5" />
  </svg>
);

// ============================================================================
// 4. Yellow-Breasted Finch (Perched on Speed Plaque)
// ============================================================================
export const PerchedFinchDetail: React.FC<{ size?: number; className?: string }> = ({
  size = 56,
  className = '',
}) => (
  <svg
    width={size}
    height={size * 1.1}
    viewBox="0 0 70 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ filter: 'drop-shadow(0 6px 14px rgba(0, 0, 0, 0.55))' }}
  >
    {/* Yellow Belly & Breast */}
    <path
      d="M26 30 C34 26, 52 30, 54 46 C54 60, 42 66, 28 64 C20 62, 18 48, 24 36 Z"
      fill="#fbc531"
    />
    {/* Dark Wing with olive/white bars */}
    <path
      d="M24 36 C30 42, 34 54, 36 62 C28 60, 22 50, 24 36 Z"
      fill="#2f3640"
    />
    <path d="M26 44 L34 56" stroke="#44bd32" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M30 46 L36 54" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />

    {/* Black Crown & Head */}
    <circle cx="44" cy="26" r="12" fill="#1e272e" />
    {/* Pure White Cheek Patch */}
    <ellipse cx="43" cy="28" rx="4.5" ry="5.5" fill="#ffffff" />
    {/* Beak */}
    <path d="M54 24 L66 27 L54 31 Z" fill="#dcdde1" />
    {/* Eye */}
    <circle cx="45" cy="24" r="2" fill="#fbc531" />
    {/* Tail */}
    <path d="M22 58 L10 74 L16 76 L28 64 Z" fill="#2f3640" />
    {/* Little yellow claws gripping the wood */}
    <path d="M32 65 L31 72 M36 65 L37 73 M40 65 L43 72" stroke="#e1b12c" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// ============================================================================
// 5. Gnarled Mossy Tree Branch Base (Photorealistic SVG Vector)
// ============================================================================
export const NaturalBranchScrubberBar: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 1000 36"
    preserveAspectRatio="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    style={{ filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.65))' }}
  >
    <defs>
      <linearGradient id="barkGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#724a2c" />
        <stop offset="35%" stop-color="#55351e" />
        <stop offset="70%" stop-color="#382111" />
        <stop offset="100%" stop-color="#1f1107" />
      </linearGradient>
      <linearGradient id="woodHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#8a5a35" />
        <stop offset="50%" stop-color="#a46d41" />
        <stop offset="100%" stop-color="#8a5a35" />
      </linearGradient>
    </defs>

    {/* Branch Shadow */}
    <path d="M 0 18 Q 250 24 500 20 T 1000 22 L 1000 36 L 0 36 Z" fill="rgba(0,0,0,0.5)" />

    {/* Main Wooden Branch Core */}
    <path
      d="M 0 10 Q 180 16 380 12 Q 580 16 780 11 L 1000 13 L 1000 25 Q 750 30 480 26 Q 220 30 0 24 Z"
      fill="url(#barkGradient)"
    />

    {/* Top Bark Ridge / Highlight */}
    <path
      d="M 0 10 Q 180 15 380 12 Q 580 16 780 11 L 1000 13"
      stroke="url(#woodHighlight)"
      strokeWidth="2.5"
    />

    {/* Bark Knots & Grooves */}
    <path d="M 60 15 Q 140 14 240 17" stroke="#382111" strokeWidth="2" strokeLinecap="round" />
    <path d="M 120 18 Q 180 19 280 17" stroke="#8a5a35" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M 420 15 Q 520 18 640 15" stroke="#382111" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M 480 18 Q 580 20 680 18" stroke="#8a5a35" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M 740 14 Q 840 17 960 14" stroke="#382111" strokeWidth="2" strokeLinecap="round" />

    {/* Fresh Green Moss Patches */}
    <ellipse cx="110" cy="14" rx="20" ry="3.5" fill="#4cd137" opacity="0.85" />
    <ellipse cx="320" cy="15" rx="28" ry="3" fill="#44bd32" opacity="0.9" />
    <ellipse cx="610" cy="15" rx="32" ry="3.5" fill="#4cd137" opacity="0.85" />
    <ellipse cx="860" cy="15" rx="24" ry="3" fill="#44bd32" opacity="0.9" />

    {/* Sprouting Young Twig / Leaf at Right End */}
    <path d="M 980 13 C 992 6 1000 11 996 17 C 990 17 984 15 980 13 Z" fill="#80c638" />
    <path d="M 986 10 C 994 4 1000 8 998 13 Z" fill="#a6e35a" />
  </svg>
);
