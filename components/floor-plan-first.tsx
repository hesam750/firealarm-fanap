import { memo } from "react"

export const FloorPlanFirst = memo(function FloorPlanFirst() {
  return (
    <svg data-floor="first" viewBox="0 0 800 1000" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {/* پس‌زمینه و کانتینر کلی ساختمان */}
  <defs>
    <style>{`
      .room { transition: all 200ms ease; }
      .room:hover { fill-opacity: 0.24 !important; stroke: #fb923c; filter: drop-shadow(0 0 6px rgba(251,146,60,0.35)); }
    `}</style>
    <pattern id="grid-first" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" strokeWidth="0.5" />
      {/* حرکت آرام شبکه برای حس زنده بودن نقشه */}
      <animateTransform attributeName="patternTransform" type="translate" from="0 0" to="20 0" dur="18s" repeatCount="indefinite" />
    </pattern>
  </defs>
      <rect width="800" height="1000" fill="#f1f5f9" />
      <rect width="800" height="1000" fill="url(#grid-first)" />

      {/* محدوده ساختمان */}
  <rect x="50" y="50" width="700" height="900" fill="#ffffff" stroke="#1e293b" strokeWidth="2" strokeDasharray="6 4">
    <animate attributeName="stroke-dashoffset" from="0" to="10" dur="8s" repeatCount="indefinite" />
  </rect>

      {/* تقسیم‌بندی‌ها بر اساس عکس طبقه اول (تقریبی) */}
      {/* سطر بالا: سه بخش بزرگ */}
      {/* انبار عمومی (چپ بالا) */}
  <rect className="room" data-shape-key="first-general-storage" x="50" y="50" width="260" height="300" fill="#f8fafc" fillOpacity="0.06" stroke="#475569" strokeWidth="2">
    <animate attributeName="fill-opacity" values="0.06;0.12;0.06" dur="6s" repeatCount="indefinite" />
  </rect>
      <text data-text-key="first-general-storage-label" x="180" y="190" textAnchor="middle" className="fill-slate-800 font-semibold text-lg" style={{ fontFamily: "system-ui" }}>انبار عمومی</text>
      <text data-text-key="first-general-storage-codes" x="180" y="212" textAnchor="middle" className="fill-slate-500 text-xs" style={{ fontFamily: "monospace" }}>WR-FB-07 · WR-FB-08</text>

      {/* میانی بالا (راستوِی راهروها و اتاق‌ها) */}
  <rect className="room" data-shape-key="first-rooms-corridor" x="310" y="50" width="210" height="300" fill="#f8fafc" fillOpacity="0.06" stroke="#475569" strokeWidth="2">
    <animate attributeName="fill-opacity" values="0.06;0.11;0.06" dur="7s" repeatCount="indefinite" />
  </rect>
      <text data-text-key="first-rooms-corridor-label" x="415" y="190" textAnchor="middle" className="fill-slate-800 font-semibold text-sm" style={{ fontFamily: "system-ui" }}>اتاق‌ها و راهرو</text>
      <text data-text-key="first-rooms-corridor-codes" x="415" y="212" textAnchor="middle" className="fill-slate-500 text-xs" style={{ fontFamily: "monospace" }}>WL-FB-09 · WR-FB-06</text>

      {/* THT (راست بالا) */}
  <rect className="room" data-shape-key="first-tht" x="520" y="50" width="230" height="300" fill="#f8fafc" fillOpacity="0.06" stroke="#475569" strokeWidth="2">
    <animate attributeName="fill-opacity" values="0.06;0.12;0.06" dur="6s" repeatCount="indefinite" />
  </rect>
      <text data-text-key="first-tht-label" x="635" y="190" textAnchor="middle" className="fill-slate-800 font-semibold text-lg" style={{ fontFamily: "system-ui" }}>THT</text>
      <text data-text-key="first-tht-codes" x="635" y="212" textAnchor="middle" className="fill-slate-500 text-xs" style={{ fontFamily: "monospace" }}>TH-FB-15 · TH-FB-16</text>

      {/* سطر میانی: چند سالن تولید/مونتاژ بر اساس عکس */}
      {/* سالن مونتاژ (چپ میانی) */}
  <rect className="room" data-shape-key="first-assembly-hall" x="50" y="350" width="180" height="280" fill="#f8fafc" fillOpacity="0.06" stroke="#475569" strokeWidth="2">
    <animate attributeName="fill-opacity" values="0.06;0.12;0.06" dur="6s" repeatCount="indefinite" />
  </rect>
      <text data-text-key="first-assembly-hall-label" x="140" y="490" textAnchor="middle" className="fill-slate-800 font-semibold" style={{ fontFamily: "system-ui" }}>سالن مونتاژ</text>
      <text data-text-key="first-assembly-hall-codes" x="140" y="510" textAnchor="middle" className="fill-slate-500 text-xs" style={{ fontFamily: "monospace" }}>TP-FB-03 · TP-FB-04</text>

      {/* سالن تولید/پرس (میانی) */}
  <rect className="room" data-shape-key="first-production-line" x="230" y="350" width="270" height="280" fill="#f8fafc" fillOpacity="0.06" stroke="#475569" strokeWidth="2">
    <animate attributeName="fill-opacity" values="0.06;0.12;0.06" dur="6s" repeatCount="indefinite" />
  </rect>
      <text data-text-key="first-production-line-label" x="365" y="480" textAnchor="middle" className="fill-slate-800 font-semibold" style={{ fontFamily: "system-ui" }}>خط/سالن تولید</text>
      <text data-text-key="first-production-line-codes" x="365" y="500" textAnchor="middle" className="fill-slate-500 text-xs" style={{ fontFamily: "monospace" }}>PP-FB-10 · PP-FB-11 · ST-FB-13 · RE-FB-12</text>

      {/* SMT (راست میانی) */}
  <rect className="room" data-shape-key="first-smt" x="500" y="350" width="250" height="280" fill="#f8fafc" fillOpacity="0.06" stroke="#475569" strokeWidth="2">
    <animate attributeName="fill-opacity" values="0.06;0.12;0.06" dur="6s" repeatCount="indefinite" />
  </rect>
      <text data-text-key="first-smt-label" x="625" y="480" textAnchor="middle" className="fill-slate-800 font-semibold" style={{ fontFamily: "system-ui" }}>SMT</text>
      <text data-text-key="first-smt-codes" x="625" y="500" textAnchor="middle" className="fill-slate-500 text-xs" style={{ fontFamily: "monospace" }}>PA-FB-12 · PA-FB-14 · PA-FB-06</text>

      {/* سطر پایین: ناحیه خدمات/اداری، پله و اتاق‌ها */}
      {/* خدمات و اداری (چپ پایین) */}
  <rect className="room" data-shape-key="first-services-admin" x="50" y="630" width="260" height="320" fill="#f8fafc" fillOpacity="0.06" stroke="#475569" strokeWidth="2">
    <animate attributeName="fill-opacity" values="0.06;0.12;0.06" dur="6s" repeatCount="indefinite" />
  </rect>
      <text data-text-key="first-services-admin-label" x="180" y="780" textAnchor="middle" className="fill-slate-800 font-semibold" style={{ fontFamily: "system-ui" }}>خدمات و اداری</text>
      <text data-text-key="first-services-admin-codes" x="180" y="800" textAnchor="middle" className="fill-slate-500 text-xs" style={{ fontFamily: "monospace" }}>CFFB-02</text>

      {/* راهرو مرکزی و پله (میانه پایین) */}
  <rect className="room" data-shape-key="first-main-corridor-stairs" x="310" y="630" width="220" height="320" fill="#f8fafc" fillOpacity="0.06" stroke="#475569" strokeWidth="2">
    <animate attributeName="fill-opacity" values="0.06;0.11;0.06" dur="7s" repeatCount="indefinite" />
  </rect>
      <text data-text-key="first-main-corridor-stairs-label" x="420" y="780" textAnchor="middle" className="fill-slate-800 font-semibold" style={{ fontFamily: "system-ui" }}>راهرو مرکزی و پله</text>
      <text data-text-key="first-main-corridor-stairs-codes" x="420" y="800" textAnchor="middle" className="fill-slate-500 text-xs" style={{ fontFamily: "monospace" }}>CF-FB-02</text>

      {/* اتاق‌های راست پایین */}
  <rect className="room" data-shape-key="first-admin-rooms" x="530" y="630" width="220" height="320" fill="#f8fafc" fillOpacity="0.06" stroke="#475569" strokeWidth="2">
    <animate attributeName="fill-opacity" values="0.06;0.12;0.06" dur="6s" repeatCount="indefinite" />
  </rect>
      <text data-text-key="first-admin-rooms-label" x="640" y="780" textAnchor="middle" className="fill-slate-800 font-semibold" style={{ fontFamily: "system-ui" }}>اتاق‌های اداری</text>

      {/* توضیح کُدها در حاشیه‌ها برای خوانایی بیشتر مطابق عکس */}
      <text data-text-key="first-code-tp-fb-03" x="70" y="360" className="fill-slate-600 text-xs" style={{ fontFamily: "monospace" }}>TP-FB-03</text>
      <text data-text-key="first-code-tp-fb-04" x="70" y="610" className="fill-slate-600 text-xs" style={{ fontFamily: "monospace" }}>TP-FB-04</text>
      <text data-text-key="first-code-pp-fb-10-11" x="300" y="620" className="fill-slate-600 text-xs" style={{ fontFamily: "monospace" }}>PP-FB-10 · PP-FB-11</text>
      <text data-text-key="first-code-st-fb-13-re-fb-12" x="310" y="340" className="fill-slate-600 text-xs" style={{ fontFamily: "monospace" }}>ST-FB-13 · RE-FB-12</text>
      <text data-text-key="first-code-pa-fb-06-14" x="730" y="380" textAnchor="end" className="fill-slate-600 text-xs" style={{ fontFamily: "monospace" }}>PA-FB-06 · PA-FB-14</text>
      <text data-text-key="first-code-pa-fb-12" x="730" y="600" textAnchor="end" className="fill-slate-600 text-xs" style={{ fontFamily: "monospace" }}>PA-FB-12</text>
    </svg>
  )
})
