import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Stylized, hand-authored continent silhouette (not a geographic/photographic
 * map). Anchor points are smoothed into a closed spline so the shape reads as
 * an elegant abstraction of Africa rather than a literal outline.
 */
const AFRICA_ANCHORS: [number, number][] = [
  [65, 10], [140, 4], [200, 10], [248, 30], [252, 55], [235, 80], [270, 85],
  [318, 108], [275, 130], [255, 175], [258, 225], [248, 275], [252, 340],
  [220, 400], [190, 445], [155, 425], [125, 375], [100, 310], [80, 255],
  [95, 220], [60, 195], [95, 180], [55, 160], [28, 145], [20, 110],
  [42, 85], [30, 50], [48, 18],
];

function smoothClosedPath(pts: [number, number][]): string {
  const n = pts.length;
  let d = `M ${pts[0][0]},${pts[0][1]} `;
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i - 1 + n) % n];
    const p1 = pts[i];
    const p2 = pts[(i + 1) % n];
    const p3 = pts[(i + 2) % n];
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += `C ${c1x},${c1y} ${c2x},${c2y} ${p2[0]},${p2[1]} `;
  }
  return d + "Z";
}

// Group transform mapping the 0-320 x 0-460 local shape into the 1600x900 master viewBox.
const GX = 950;
const GY = 40;
const GS = 1.55;
const toMaster = ([x, y]: [number, number]): [number, number] => [GX + x * GS, GY + y * GS];

const HUB = toMaster([155, 240]); // central "Africa" source node

const AFRICAN_CITIES: { name: string; pos: [number, number] }[] = [
  { name: "Lagos", pos: toMaster([75, 190]) },
  { name: "Accra", pos: toMaster([55, 168]) },
  { name: "Cairo", pos: toMaster([245, 45]) },
  { name: "Nairobi", pos: toMaster([250, 190]) },
  { name: "Kigali", pos: toMaster([215, 215]) },
  { name: "Johannesburg", pos: toMaster([210, 370]) },
  { name: "Cape Town", pos: toMaster([185, 435]) },
];

const WORLD_CITIES: { name: string; pos: [number, number] }[] = [
  { name: "London", pos: [120, 90] },
  { name: "New York", pos: [60, 320] },
  { name: "São Paulo", pos: [140, 700] },
  { name: "Berlin", pos: [700, 40] },
  { name: "Dubai", pos: [1500, 220] },
  { name: "Mumbai", pos: [1560, 420] },
  { name: "Singapore", pos: [1520, 650] },
];

function arcPath(from: [number, number], to: [number, number]): string {
  const mx = (from[0] + to[0]) / 2;
  const my = (from[1] + to[1]) / 2;
  const dist = Math.hypot(to[0] - from[0], to[1] - from[1]);
  const bow = Math.min(dist * 0.28, 220);
  return `M ${from[0]},${from[1]} Q ${mx},${my - bow} ${to[0]},${to[1]}`;
}

const continentPath = smoothClosedPath(AFRICA_ANCHORS);

const HeroBackground = () => {
  const prefersReducedMotion = useReducedMotion();
  const continentD = useMemo(() => continentPath, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#04081a]">
      {/* Ambient starfield */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.5) 0, transparent 60%)," +
            "radial-gradient(1px 1px at 60% 15%, rgba(255,255,255,0.4) 0, transparent 60%)," +
            "radial-gradient(1.5px 1.5px at 80% 60%, rgba(255,255,255,0.35) 0, transparent 60%)," +
            "radial-gradient(1px 1px at 35% 75%, rgba(255,255,255,0.3) 0, transparent 60%)," +
            "radial-gradient(1.5px 1.5px at 90% 85%, rgba(255,255,255,0.4) 0, transparent 60%)",
        }}
      />

      <svg
        className={`absolute inset-0 h-full w-full ${prefersReducedMotion ? "" : "animate-float"}`}
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <filter id="af-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="af-fill" cx="35%" cy="30%" r="80%">
            <stop offset="0%" stopColor="hsl(43 74% 49%)" stopOpacity="0.16" />
            <stop offset="55%" stopColor="hsl(240 70% 46%)" stopOpacity="0.14" />
            <stop offset="100%" stopColor="hsl(240 100% 25%)" stopOpacity="0.05" />
          </radialGradient>
          <pattern id="af-dots" width="14" height="14" patternUnits="userSpaceOnUse">
            <circle cx="1.2" cy="1.2" r="1.2" fill="hsl(210 60% 85% / 0.35)" />
          </pattern>
          <clipPath id="af-clip">
            <path d={continentD} transform={`translate(${GX} ${GY}) scale(${GS})`} />
          </clipPath>
        </defs>

        {/* Continent glow + fill */}
        <g filter="url(#af-glow)">
          <path
            d={continentD}
            transform={`translate(${GX} ${GY}) scale(${GS})`}
            fill="url(#af-fill)"
            stroke="hsl(43 74% 62% / 0.75)"
            strokeWidth={1.6}
          />
        </g>

        {/* Dot-matrix texture, clipped to the continent shape */}
        <rect x="900" y="0" width="600" height="900" fill="url(#af-dots)" clipPath="url(#af-clip)" opacity={0.6} />

        {/* Internal connective lines: hub to each African city */}
        {AFRICAN_CITIES.map((c) => (
          <line
            key={`link-${c.name}`}
            x1={HUB[0]}
            y1={HUB[1]}
            x2={c.pos[0]}
            y2={c.pos[1]}
            stroke="hsl(43 74% 60% / 0.28)"
            strokeWidth={0.75}
          />
        ))}

        {/* Outbound arcs: Africa to the world */}
        {WORLD_CITIES.map((city, i) => (
          <motion.path
            key={city.name}
            d={arcPath(HUB, city.pos)}
            fill="none"
            stroke="hsl(43 74% 60% / 0.65)"
            strokeWidth={1.1}
            strokeLinecap="round"
            initial={prefersReducedMotion ? undefined : { pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 1.6, delay: 0.6 + i * 0.22, ease: "easeInOut" }}
          />
        ))}

        {/* World-city endpoint nodes */}
        {WORLD_CITIES.map((city, i) => (
          <motion.circle
            key={`node-${city.name}`}
            cx={city.pos[0]}
            cy={city.pos[1]}
            r={2.6}
            fill="hsl(0 0% 100% / 0.85)"
            initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.5, delay: 1.1 + i * 0.22 }}
          />
        ))}

        {/* African city nodes */}
        {AFRICAN_CITIES.map((c) => (
          <circle key={c.name} cx={c.pos[0]} cy={c.pos[1]} r={2.2} fill="hsl(43 90% 70%)" opacity={0.85} />
        ))}

        {/* Central hub — pulsing source node */}
        <circle cx={HUB[0]} cy={HUB[1]} r={5} fill="hsl(43 90% 65%)" filter="url(#af-glow)" className={prefersReducedMotion ? "" : "animate-pulse-glow"} />
      </svg>

      {/* Left gradient — protects text readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(4,8,26,0.97) 0%, rgba(4,8,26,0.90) 30%, rgba(4,8,26,0.62) 54%, rgba(4,8,26,0.20) 100%)",
        }}
      />

      {/* Top + bottom vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#04081a]/60 via-transparent to-[#04081a]/80" />

      {/* Mobile: stronger full overlay for portrait screens */}
      <div className="absolute inset-0 md:hidden bg-gradient-to-b from-[#04081a]/85 via-[#04081a]/65 to-[#04081a]/40" />
    </div>
  );
};

export default HeroBackground;
