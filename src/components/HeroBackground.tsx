import { motion } from "framer-motion";

// Hub = Lagos, Nigeria — center of the network
const hub = { x: 600, y: 300 };

// World connection targets (approximate equirectangular positions on 1200×600 canvas)
const connections = [
  { x: 320, y:  90, delay: 0.4, label: "London"    },
  { x:  85, y: 180, delay: 0.7, label: "New York"  },
  { x: 640, y:  95, delay: 0.3, label: "Cairo"     },
  { x: 830, y: 155, delay: 1.0, label: "Dubai"     },
  { x: 905, y: 225, delay: 1.3, label: "Mumbai"    },
  { x:1020, y: 270, delay: 1.6, label: "Singapore" },
  { x:1090, y: 365, delay: 1.9, label: "Sydney"    },
  { x: 240, y: 410, delay: 0.6, label: "São Paulo" },
];

// Quadratic bezier control point — arc lines toward the sky (globe curvature feel)
const ctrl = (t: { x: number; y: number }) => ({
  x: (hub.x + t.x) / 2 + (t.x < hub.x ? -30 : 30),
  y: Math.min(hub.y, t.y) - (Math.abs(hub.x - t.x) > 300 ? 100 : 55),
});

const HeroBackground = () => (
  <div
    className="absolute inset-0"
    style={{ background: "linear-gradient(135deg, #030c1b 0%, #061628 55%, #040e1e 100%)" }}
  >
    {/* Subtle dot grid */}
    <div
      className="absolute inset-0 opacity-30"
      style={{
        backgroundImage: "radial-gradient(circle, rgba(96,165,250,0.18) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    />

    {/* Network SVG */}
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <filter id="line-glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="hub-glow">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id="hub-aura" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Hub aura */}
      <circle cx={hub.x} cy={hub.y} r="90" fill="url(#hub-aura)" />

      {/* Animated connection lines (draw outward from Lagos) */}
      {connections.map((c, i) => {
        const cp = ctrl(c);
        return (
          <motion.path
            key={i}
            d={`M ${hub.x} ${hub.y} Q ${cp.x} ${cp.y} ${c.x} ${c.y}`}
            fill="none"
            stroke="rgba(96,165,250,0.45)"
            strokeWidth="1.3"
            filter="url(#line-glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.8, delay: c.delay, ease: "easeOut" }}
          />
        );
      })}

      {/* Destination nodes — appear after their line reaches them */}
      {connections.map((c, i) => (
        <motion.g
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: c.delay + 1.6, duration: 0.35, ease: "backOut" }}
          style={{ transformOrigin: `${c.x}px ${c.y}px` }}
        >
          <circle cx={c.x} cy={c.y} r="12" fill="rgba(96,165,250,0.07)" />
          <circle cx={c.x} cy={c.y} r="3.5" fill="rgba(147,197,253,0.9)" filter="url(#line-glow)" />
        </motion.g>
      ))}

      {/* Hub — pulsing rings (pure SVG animate, no Framer transform issues) */}
      <circle cx={hub.x} cy={hub.y} r="14" fill="rgba(59,130,246,0.18)">
        <animate attributeName="r"       values="14;42;14" dur="2.8s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.7;0;0.7" dur="2.8s" repeatCount="indefinite" />
      </circle>
      <circle cx={hub.x} cy={hub.y} r="7" fill="#3b82f6" filter="url(#hub-glow)" />
      <circle cx={hub.x} cy={hub.y} r="4" fill="#bfdbfe" />

      {/* Hub label */}
      <text
        x={hub.x + 16}
        y={hub.y - 14}
        fill="rgba(147,197,253,0.65)"
        fontSize="10.5"
        fontFamily="'Space Grotesk', Arial, sans-serif"
        fontWeight="600"
        letterSpacing="0.08em"
      >
        LAGOS · NIGERIA
      </text>
    </svg>

    {/* Left gradient — strong where text lives, fades to transparent on right */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(to right, rgba(3,12,27,0.97) 0%, rgba(3,12,27,0.88) 30%, rgba(3,12,27,0.55) 58%, rgba(3,12,27,0.15) 100%)",
      }}
    />
    {/* Top + bottom fade */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#030c1b]/55 via-transparent to-[#030c1b]/72" />
  </div>
);

export default HeroBackground;
