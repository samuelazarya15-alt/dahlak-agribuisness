import React, { useState } from 'react';
import { DAHLAK_REAL_IMAGES } from '../data/dahlakImages';

interface DahlakOfficialLogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | number;
  variant?: 'emblem' | 'horizontal' | 'badge-minimal';
  className?: string;
  showSubtitle?: boolean;
}

export const DahlakOfficialLogo: React.FC<DahlakOfficialLogoProps> = ({
  size = 'md',
  variant = 'emblem',
  className = '',
  showSubtitle = true,
}) => {
  const [imgError, setImgError] = useState(false);

  // Determine pixel size for SVG emblem
  let px = 48;
  if (typeof size === 'number') {
    px = size;
  } else {
    switch (size) {
      case 'xs':
        px = 28;
        break;
      case 'sm':
        px = 36;
        break;
      case 'md':
        px = 48;
        break;
      case 'lg':
        px = 64;
        break;
      case 'xl':
        px = 96;
        break;
      case '2xl':
        px = 140;
        break;
    }
  }

  const hasRealLogo = DAHLAK_REAL_IMAGES.logo && !imgError;

  const EmblemElement = hasRealLogo ? (
    <img
      src={DAHLAK_REAL_IMAGES.logo}
      alt="Dahlak Agribusiness and Vocational Center Official Logo"
      style={{ width: `${px}px`, height: `${px}px` }}
      className="object-contain shrink-0 transition-transform duration-300 group-hover:scale-105 select-none rounded-full"
      onError={() => setImgError(true)}
    />
  ) : (
    <svg
      width={px}
      height={px}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-300 group-hover:scale-105 select-none"
      role="img"
      aria-label="Dahlak Agribusiness and Vocational Center Official Logo"
    >
      <defs>
        {/* Outer Rich Bronze-Wood Bezel Gradient */}
        <linearGradient id="dahlakBronzeOuter" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8d562b" />
          <stop offset="25%" stopColor="#dca86d" />
          <stop offset="48%" stopColor="#5a2f14" />
          <stop offset="72%" stopColor="#caa062" />
          <stop offset="100%" stopColor="#3d1d0a" />
        </linearGradient>

        {/* Inner Bronze Inset Gradient */}
        <linearGradient id="dahlakBronzeInner" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#2c1407" />
          <stop offset="50%" stopColor="#673919" />
          <stop offset="100%" stopColor="#230e04" />
        </linearGradient>

        {/* Dawn Sky / Morning Horizon Gradient */}
        <radialGradient id="dahlakSkyDawn" cx="50%" cy="32%" r="68%">
          <stop offset="0%" stopColor="#fff9c4" />
          <stop offset="22%" stopColor="#fbc02d" />
          <stop offset="52%" stopColor="#e65100" />
          <stop offset="85%" stopColor="#4a220a" />
          <stop offset="100%" stopColor="#271004" />
        </radialGradient>

        {/* Radiant Golden Sun Core Glow */}
        <radialGradient id="dahlakSunSphere" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="35%" stopColor="#fff59d" />
          <stop offset="68%" stopColor="#ffca28" />
          <stop offset="100%" stopColor="#f57c00" />
        </radialGradient>

        {/* Background Terraced Earth & Golden Hills */}
        <linearGradient id="dahlakEarthTerraces" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#bcaaa4" />
          <stop offset="40%" stopColor="#8d6e63" />
          <stop offset="75%" stopColor="#d7ccc8" />
          <stop offset="100%" stopColor="#5d4037" />
        </linearGradient>

        {/* Midground Emerald Rolling Fields */}
        <linearGradient id="dahlakFieldMid" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#81c784" />
          <stop offset="38%" stopColor="#43a047" />
          <stop offset="75%" stopColor="#2e7d32" />
          <stop offset="100%" stopColor="#1b5e20" />
        </linearGradient>

        {/* Foreground Lush Organic Farmland */}
        <linearGradient id="dahlakFieldFore" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a5d6a7" />
          <stop offset="28%" stopColor="#4caf50" />
          <stop offset="70%" stopColor="#2e7d32" />
          <stop offset="100%" stopColor="#0d3b13" />
        </linearGradient>

        {/* Leaf Cluster Botanical Gradients */}
        <linearGradient id="dahlakLeafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#dcedc8" />
          <stop offset="25%" stopColor="#8bc34a" />
          <stop offset="65%" stopColor="#388e3c" />
          <stop offset="100%" stopColor="#134718" />
        </linearGradient>

        {/* Typography 3D Face Gradient */}
        <linearGradient id="dahlakTextFace" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#c8e6c9" />
          <stop offset="35%" stopColor="#66bb6a" />
          <stop offset="80%" stopColor="#2e7d32" />
          <stop offset="100%" stopColor="#1b5e20" />
        </linearGradient>

        {/* Gold Ribbon Text Gradient */}
        <linearGradient id="dahlakGoldText" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ffe082" />
          <stop offset="50%" stopColor="#ffd54f" />
          <stop offset="100%" stopColor="#ffb300" />
        </linearGradient>

        {/* Soft Drop Shadows */}
        <filter id="dahlakRimShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#000000" floodOpacity="0.45" />
        </filter>
        <filter id="dahlakText3D" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="1" dy="2.5" stdDeviation="1.5" floodColor="#0a290d" floodOpacity="0.9" />
        </filter>
        <filter id="dahlakGoldGlow" x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow dx="0" dy="1.5" stdDeviation="1.2" floodColor="#000000" floodOpacity="0.85" />
        </filter>

        {/* Clip Path for the Inner Canvas */}
        <clipPath id="innerCanvasClip">
          <circle cx="200" cy="200" r="164" />
        </clipPath>
      </defs>

      {/* 1. Outer Metallic Bezel Rings with Realistic Depth */}
      <circle cx="200" cy="200" r="194" fill="url(#dahlakBronzeOuter)" filter="url(#dahlakRimShadow)" />
      <circle cx="200" cy="200" r="183" fill="url(#dahlakBronzeInner)" stroke="#dca86d" strokeWidth="2.5" />
      <circle cx="200" cy="200" r="172" fill="url(#dahlakBronzeOuter)" stroke="#381907" strokeWidth="2" />
      <circle cx="200" cy="200" r="165" fill="#1f0c03" stroke="#fbc02d" strokeWidth="1" />

      {/* Inner Artwork Container Clipped */}
      <g clipPath="url(#innerCanvasClip)">
        {/* 2. Morning Dawn Twilight Sky */}
        <rect x="30" y="30" width="340" height="340" fill="url(#dahlakSkyDawn)" />

        {/* 3. Radial Bursting Sun Rays */}
        <g opacity="0.92">
          {Array.from({ length: 16 }).map((_, i) => {
            const angle = (i * 180) / 15 - 90;
            const rad = (angle * Math.PI) / 180;
            return (
              <line
                key={i}
                x1="200"
                y1="120"
                x2={200 + Math.cos(rad) * 125}
                y2={120 + Math.sin(rad) * 125}
                stroke="#ffca28"
                strokeWidth="3.2"
                strokeLinecap="round"
                opacity="0.88"
              />
            );
          })}
          {/* Glowing Center Sun Sphere */}
          <circle cx="200" cy="120" r="44" fill="url(#dahlakSunSphere)" filter="drop-shadow(0 0 12px #ffb300)" />
        </g>

        {/* 4. White Cumulus Cloud on Right */}
        <path
          d="M248 116 C248 108, 258 102, 269 102 C277 102, 285 106, 289 111 C294 108, 303 111, 305 117 C311 119, 314 125, 310 131 C307 135, 298 136, 290 136 L252 136 C244 136, 242 127, 248 116 Z"
          fill="#f8fafc"
          opacity="0.88"
          filter="drop-shadow(0 2px 3px rgba(0,0,0,0.2))"
        />

        {/* 5. Golden Earth Terraced Hill (Background) */}
        <path
          d="M45 225 Q135 170, 240 185 Q300 195, 355 220 L355 350 L45 350 Z"
          fill="url(#dahlakEarthTerraces)"
        />
        {/* Terraced Furrow Lines */}
        <path d="M110 188 Q185 192, 285 198" stroke="#a1887f" strokeWidth="2" fill="none" opacity="0.65" />
        <path d="M85 204 Q180 208, 310 214" stroke="#6d4c41" strokeWidth="2.2" fill="none" opacity="0.6" />

        {/* Conifer Pine Trees on Ridge */}
        <g transform="translate(262, 138)">
          {/* Tree 1 */}
          <polygon points="9,0 0,24 18,24" fill="#2e7d32" stroke="#1b5e20" strokeWidth="0.6" />
          <rect x="8" y="24" width="2.5" height="5" fill="#4e342e" />
          {/* Tree 2 */}
          <polygon points="24,5 16,26 32,26" fill="#388e3c" stroke="#1b5e20" strokeWidth="0.6" />
          <rect x="23" y="26" width="2.5" height="5" fill="#4e342e" />
          {/* Tree 3 */}
          <polygon points="38,10 32,28 44,28" fill="#1b5e20" stroke="#0d3b13" strokeWidth="0.6" />
          <rect x="37" y="28" width="2" height="4" fill="#4e342e" />
        </g>

        {/* 6. Midground Rolling Green Fields */}
        <path
          d="M40 240 Q155 198, 270 228 Q320 242, 360 262 L360 360 L40 360 Z"
          fill="url(#dahlakFieldMid)"
        />
        <path d="M50 252 Q165 214, 335 256" stroke="#a5d6a7" strokeWidth="3" fill="none" opacity="0.75" />
        <path d="M60 272 Q175 234, 345 276" stroke="#81c784" strokeWidth="2.5" fill="none" opacity="0.75" />

        {/* 7. Foreground Deep Green Farmland Slopes */}
        <path
          d="M35 278 Q125 236, 235 258 Q295 272, 365 298 L365 370 L35 370 Z"
          fill="url(#dahlakFieldFore)"
        />
        <path d="M40 298 Q145 260, 360 312" stroke="#dcedc8" strokeWidth="3.2" fill="none" opacity="0.85" />
        <path d="M48 318 Q155 280, 355 330" stroke="#a5d6a7" strokeWidth="2.8" fill="none" opacity="0.8" />

        {/* 8. Botanical 5-Leaf Sprout on the Left */}
        <g transform="translate(56, 102)">
          {/* Main graceful curved stalk */}
          <path
            d="M80 195 Q70 135, 85 82 Q94 50, 98 28"
            stroke="url(#dahlakLeafGrad)"
            strokeWidth="9"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M80 195 Q70 135, 85 82 Q94 50, 98 28"
            stroke="#e8f5e9"
            strokeWidth="2.2"
            strokeLinecap="round"
            fill="none"
            opacity="0.85"
          />

          {/* Top Apex Leaf */}
          <path
            d="M98 28 C88 8, 104 -2, 110 -2 C116 -2, 130 8, 120 28 C112 42, 104 38, 98 28 Z"
            fill="url(#dahlakLeafGrad)"
            stroke="#f1f8e9"
            strokeWidth="1.8"
          />
          <path d="M106 34 Q110 14, 110 0" stroke="#ffffff" strokeWidth="1.2" fill="none" opacity="0.9" />

          {/* Upper Left Leaf */}
          <path
            d="M84 78 C52 62, 36 72, 30 83 C24 94, 46 109, 78 94 C88 89, 88 84, 84 78 Z"
            fill="url(#dahlakLeafGrad)"
            stroke="#f1f8e9"
            strokeWidth="1.8"
          />
          <path d="M80 86 Q50 82, 32 84" stroke="#ffffff" strokeWidth="1.2" fill="none" opacity="0.9" />
          <path d="M62 84 Q56 76, 48 74" stroke="#ffffff" strokeWidth="0.8" fill="none" opacity="0.8" />
          <path d="M66 85 Q62 93, 52 95" stroke="#ffffff" strokeWidth="0.8" fill="none" opacity="0.8" />

          {/* Upper Right Leaf */}
          <path
            d="M90 73 C122 52, 142 58, 148 68 C154 78, 132 100, 100 89 C90 85, 90 78, 90 73 Z"
            fill="url(#dahlakLeafGrad)"
            stroke="#f1f8e9"
            strokeWidth="1.8"
          />
          <path d="M94 80 Q122 72, 146 69" stroke="#ffffff" strokeWidth="1.2" fill="none" opacity="0.9" />
          <path d="M116 75 Q122 66, 132 64" stroke="#ffffff" strokeWidth="0.8" fill="none" opacity="0.8" />
          <path d="M120 76 Q126 84, 136 86" stroke="#ffffff" strokeWidth="0.8" fill="none" opacity="0.8" />

          {/* Lower Left Leaf */}
          <path
            d="M76 130 C42 114, 20 128, 20 140 C20 153, 46 162, 74 144 Z"
            fill="url(#dahlakLeafGrad)"
            stroke="#f1f8e9"
            strokeWidth="1.8"
          />
          <path d="M72 138 Q46 132, 22 138" stroke="#ffffff" strokeWidth="1.2" fill="none" opacity="0.85" />

          {/* Lower Right Leaf */}
          <path
            d="M84 125 C116 109, 138 119, 144 130 C150 142, 124 157, 88 139 Z"
            fill="url(#dahlakLeafGrad)"
            stroke="#f1f8e9"
            strokeWidth="1.8"
          />
          <path d="M88 132 Q118 124, 142 130" stroke="#ffffff" strokeWidth="1.2" fill="none" opacity="0.85" />
        </g>

        {/* 9. Dark Base Ground Arch for Text Legibility */}
        <path
          d="M35 300 Q200 240, 365 300 L365 400 L35 400 Z"
          fill="#13240e"
          opacity="0.85"
        />

        {/* 10. Dahlak Brand Wordmark with Sprouting Leaves on 'k' */}
        <g transform="translate(50, 260)">
          {/* Shadow Behind Text */}
          <text
            x="150"
            y="48"
            textAnchor="middle"
            fontSize="66"
            fontWeight="900"
            fontFamily="'Newsreader', 'Playfair Display', 'Outfit', Georgia, serif"
            fill="#091d0a"
            letterSpacing="1"
          >
            Dahlak
          </text>
          {/* Main 3D Styled Wordmark */}
          <text
            x="150"
            y="48"
            textAnchor="middle"
            fontSize="66"
            fontWeight="900"
            fontFamily="'Newsreader', 'Playfair Display', 'Outfit', Georgia, serif"
            fill="url(#dahlakTextFace)"
            stroke="#0a2a0d"
            strokeWidth="2.2"
            letterSpacing="1"
            filter="url(#dahlakText3D)"
          >
            Dahlak
          </text>

          {/* Sprouting Twin Leaves on 'k' Ascender Tip */}
          <g transform="translate(244, 4)">
            <path
              d="M0 12 C10 -6, 26 -2, 28 6 C30 14, 15 24, 2 20 Z"
              fill="#8bc34a"
              stroke="#0d3b13"
              strokeWidth="1.2"
            />
            <path
              d="M3 20 C16 17, 28 27, 26 36 C24 43, 8 40, 1 27 Z"
              fill="#689f38"
              stroke="#0d3b13"
              strokeWidth="1.2"
            />
            <path d="M2 14 Q14 4, 24 6" stroke="#ffffff" strokeWidth="0.8" fill="none" opacity="0.8" />
          </g>
        </g>

        {/* 11. Curved Ribbon Path & AGRIBUSINESS AND VOCATIONAL CENTER Inscription */}
        <path
          id="dahlakArcPath"
          d="M 62,298 A 152,152 0 0,0 338,298"
          fill="none"
        />

        <g filter="url(#dahlakGoldGlow)">
          <text
            fill="url(#dahlakGoldText)"
            fontSize="13.2"
            fontWeight="800"
            letterSpacing="2.8"
            fontFamily="'Outfit', Arial, Helvetica, sans-serif"
          >
            <textPath href="#dahlakArcPath" startOffset="50%" textAnchor="middle">
              AGRIBUSINESS AND VOCATIONAL CENTER
            </textPath>
          </text>
        </g>
      </g>
    </svg>
  );

  if (variant === 'emblem') {
    return <div className={`inline-flex items-center justify-center ${className}`}>{EmblemElement}</div>;
  }

  if (variant === 'badge-minimal') {
    return (
      <div className={`inline-flex items-center gap-2.5 ${className}`}>
        {EmblemElement}
        <div className="flex flex-col text-left">
          <span className="font-editorial-serif text-lg font-bold text-slate-900 tracking-tight leading-none">
            Dahlak
          </span>
          <span className="text-[10px] uppercase font-mono tracking-wider text-emerald-800 font-semibold mt-0.5">
            AgriTech &amp; Vocational Hub
          </span>
        </div>
      </div>
    );
  }

  // Horizontal variant (Emblem + Full Typography)
  return (
    <div className={`inline-flex items-center gap-3.5 ${className}`}>
      {EmblemElement}
      <div className="flex flex-col text-left">
        <div className="flex items-baseline gap-1.5">
          <span className="text-2xl font-bold font-editorial-serif tracking-tight text-slate-900 leading-none">
            Dahlak
          </span>
          <span className="text-sm font-editorial-serif italic text-emerald-800 font-medium">
            Agribusiness &amp; AgriTech
          </span>
        </div>
        {showSubtitle && (
          <div className="flex flex-col mt-0.5">
            <span className="text-[10px] uppercase tracking-[0.18em] font-bold text-emerald-900 font-mono">
              &amp; Vocational Center
            </span>
            <span className="text-[9px] italic text-stone-500 font-serif">
              &ldquo;Back to organic nature.&rdquo;
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

