import { memo } from "react"

export const FloorPlanGround = memo(function FloorPlanGround() {
  // Ground floor refined layout per user's latest instruction
  // Left: Split سالن کیوسک into two equal halves — top 50%: سالن کیوسک، bottom 50%: انبار کیوسک.
  // راهرو و شوروم must be attached to the end (bottom edge) of سالن کیوسک, one at right corner, one at left corner, with gap between them.
  // Right: سالن پوز as the main container (full right column). Inside it, انبار مواد اولیه (پوز) occupies 30% of the column width.
  return (
    <svg data-floor="ground" viewBox="0 0 900 1100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {/* Background - subtle grid pattern */}
      <defs>
        <style>{`
          .room { transition: all 200ms ease; }
          .room:hover { fill-opacity: 0.24 !important; stroke: #fb923c; filter: drop-shadow(0 0 6px rgba(251,146,60,0.35)); }
        `}</style>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" strokeWidth="0.5" />
          {/* حرکت آرام شبکه برای حس زنده بودن نقشه */}
          <animateTransform attributeName="patternTransform" type="translate" from="0 0" to="20 0" dur="18s" repeatCount="indefinite" />
        </pattern>
      </defs>
      <rect width="900" height="1100" fill="#f1f5f9" />
      <rect width="900" height="1100" fill="url(#grid)" />

      {/* Building outline with animated stroke (خط محیطی با حرکت ظریف) */}
      <rect x="50" y="50" width="800" height="1000" fill="#ffffff" stroke="#1e293b" strokeWidth="2" strokeDasharray="6 4">
        <animate attributeName="stroke-dashoffset" from="0" to="10" dur="8s" repeatCount="indefinite" />
      </rect>

      {/* Left column container: x=50, width=480, height=1000 */}
      {/* Top half (50%) — سالن کیوسک */}
      <text data-text-key="ground-kiosk-hall-label" x="290" y="90" textAnchor="middle" className="fill-slate-800 font-semibold text-xl" style={{ fontFamily: 'system-ui', opacity: 0.9 }}>سالن کیوسک</text>
      {/* Escape corridor inside سالن کیوسک at left side */}
      <text data-text-key="ground-kiosk-escape-1-label" x="96" y="79" textAnchor="middle" className="fill-green-700 text-xs" style={{ fontFamily: 'system-ui', opacity: 0.9 }}>راهرو فرار</text>

      {/* Attach راهرو و شوروم to the bottom edge of سالن کیوسک, at left/right corners */}
      {/* Bottom edge of سالن کیوسک is at y=50+500=550. Squares 100x100 so y=450 to sit flush at bottom. */}
      {/* Left corner — راهرو */}
      <rect className="room" data-shape-key="ground-corridor" x="39" y="479" width="100" height="100" fill="#eef2ff" fillOpacity="0.08" stroke="#475569" strokeWidth="2" strokeDasharray="4 3">
        <animate attributeName="stroke-dashoffset" from="0" to="12" dur="4s" repeatCount="indefinite" />
      </rect>
      <text data-text-key="ground-corridor-label" x="100" y="505" textAnchor="middle" className="fill-slate-700 text-sm" style={{ fontFamily: 'system-ui' }}>راهرو</text>
      {/* Right corner — شوروم */}
      <rect className="room" data-shape-key="ground-showroom" x="430" y="450" width="100" height="100" fill="#fff7ed" fillOpacity="0.08" stroke="#475569" strokeWidth="2" strokeDasharray="4 3">
        <animate attributeName="stroke-dashoffset" from="0" to="12" dur="4s" repeatCount="indefinite" />
      </rect>
      <text data-text-key="ground-showroom-label" x="480" y="505" textAnchor="middle" className="fill-slate-700 text-sm" style={{ fontFamily: 'system-ui' }}>شوروم</text>

      {/* Bottom half (50%) — انبار کیوسک */}
      <rect className="room" data-shape-key="ground-kiosk-store" x="50" y="550" width="480" height="500" fill="#f1f5f9" fillOpacity="0.06" stroke="#475569" strokeWidth="2">
        <animate attributeName="fill-opacity" values="0.06;0.12;0.06" dur="6s" repeatCount="indefinite" />
      </rect>
      <text data-text-key="ground-kiosk-store-label" x="290" y="800" textAnchor="middle" className="fill-slate-800 font-semibold text-base" style={{ fontFamily: 'system-ui' }}>انبار کیوسک</text>
      {/* Escape corridor in انبار کیوسک corner (bottom-right) */}
      <rect className="room" data-shape-key="ground-kiosk-store-escape" x="470" y="990" width="60" height="60" fill="#dcfce7" fillOpacity="0.15" stroke="#166534" strokeWidth="2">
        <animate attributeName="fill-opacity" values="0.15;0.5;0.15" dur="3s" repeatCount="indefinite" />
      </rect>
      <text data-text-key="ground-kiosk-store-escape-label" x="500" y="1020" textAnchor="middle" className="fill-green-700 text-xs" style={{ fontFamily: 'system-ui' }}>راهرو فرار</text>

      {/* Right column: سالن پوز as container (x=530, width=320, height=1000) */}
      <rect className="room" data-shape-key="ground-pos-hall" x="530" y="50" width="320" height="1000" fill="#fef2f2" fillOpacity="0.06" stroke="#475569" strokeWidth="2">
        <animate attributeName="fill-opacity" values="0.06;0.1;0.06" dur="7s" repeatCount="indefinite" />
      </rect>
      {/* Title centered */}
      <text data-text-key="ground-pos-hall-label" x="690" y="90" textAnchor="middle" className="fill-slate-800 font-semibold text-xl" style={{ fontFamily: 'system-ui', opacity: 0.9 }}>سالن پوز</text>

      {/* Raw materials store as an internal square occupying ~30% of سالن پوز area */}
      <rect className="room" data-shape-key="ground-raw-store" x="540" y="740" width="310" height="310" fill="#f8fafc" fillOpacity="0.06" stroke="#475569" strokeWidth="2">
        <animate attributeName="fill-opacity" values="0.06;0.12;0.06" dur="6s" repeatCount="indefinite" />
      </rect>
      <text data-text-key="ground-raw-store-label" x="695" y="880" textAnchor="middle" className="fill-slate-800 font-semibold text-sm" style={{ fontFamily: 'system-ui' }}>انبار مواد اولیه</text>
      <text data-text-key="ground-raw-store-sub" x="695" y="900" textAnchor="middle" className="fill-slate-500 text-xs" style={{ fontFamily: 'system-ui' }}>(پوز)</text>

      {/* Small room inside the store */}
      <rect className="room" data-shape-key="ground-small-room" x="764" y="760" width="76" height="76" fill="#fff7ed" fillOpacity="0.08" stroke="#475569" strokeWidth="2">
        <animate attributeName="fill-opacity" values="0.08;0.18;0.08" dur="5s" repeatCount="indefinite" />
      </rect>
      <text data-text-key="ground-small-room-label" x="802" y="800" textAnchor="middle" className="fill-slate-700 text-xs" style={{ fontFamily: 'system-ui' }}>اتاقک</text>

      {/* Escape corridor at lower corner of the store */}
      <rect className="room" data-shape-key="ground-pos-escape" x="790" y="990" width="50" height="50" fill="#dcfce7" fillOpacity="0.15" stroke="#166534" strokeWidth="2">
        <animate attributeName="fill-opacity" values="0.15;0.5;0.15" dur="3s" repeatCount="indefinite" />
      </rect>
      <text data-text-key="ground-pos-escape-label" x="815" y="1015" textAnchor="middle" className="fill-green-700 text-xs" style={{ fontFamily: 'system-ui' }}>راهرو فرار</text>

      {/* Decorative dimension lines */}
      <line x1="50" y1="30" x2="850" y2="30" stroke="#94a3b8" strokeWidth="0.5" strokeDasharray="2,2" />
      <line x1="30" y1="50" x2="30" y2="1050" stroke="#94a3b8" strokeWidth="0.5" strokeDasharray="2,2" />
      {/* پاک‌سازی اشکال نمونه‌ی قبلی برای جلوگیری از شلوغی روی تصویر واقعی */}
      {/* لایه‌ی رویی برای اشکال و متن‌های پویا تا همیشه بالا باشند */}
      <g id="overlay" data-overlay-layer="true"></g>
          </svg>
  )
})
