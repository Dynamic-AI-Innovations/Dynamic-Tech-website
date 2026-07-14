import type { SVGProps } from "react";

/**
 * Custom minimal outline icon set for the Ecosystem section.
 * Deliberately hand-built (not a generic icon pack) — single stroke weight,
 * rounded joins, 24x24 grid, matches the brand's restrained line language.
 */
type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const FoundersIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M12 2.5 15 9l6.5 1-5 4.6L18 21l-6-3.4L6 21l1.5-6.4-5-4.6L9 9l3-6.5Z" />
  </svg>
);

export const GovernmentsIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M3 9.5 12 4l9 5.5" />
    <path d="M4.5 9.5v9M8.5 9.5v9M15.5 9.5v9M19.5 9.5v9" />
    <path d="M2.5 21h19" />
    <path d="M4.5 18.5h15" />
  </svg>
);

export const IndustriesIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M3 21V11l5 3.5V11l5 3.5V11l5 3.5V21H3Z" />
    <path d="M3 21h15" />
    <path d="M6 21v-3M11 21v-3M16 21v-3" />
  </svg>
);

export const StartupsIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M12 2v4M12 18v4M4.2 4.2l2.8 2.8M17 17l2.8 2.8M2 12h4M18 12h4M4.2 19.8 7 17M17 7l2.8-2.8" />
    <circle cx="12" cy="12" r="3.2" />
  </svg>
);

export const InvestorsIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M3 20h18" />
    <path d="M6 20v-6M11 20v-9M16 20v-4" />
    <path d="M13 6.5 16.5 3l3.5 1M20 4v3.5h-3.5" />
  </svg>
);

export const EnterprisesIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
);

export const TalentIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="7" r="3.2" />
    <path d="M5.5 20.5c1-3.4 3.6-5.2 6.5-5.2s5.5 1.8 6.5 5.2" />
    <circle cx="19.5" cy="6" r="1.4" />
    <circle cx="4.5" cy="6" r="1.4" />
    <path d="M15 8.2 18.2 6.7M9 8.2 5.8 6.7" />
  </svg>
);

export const ResearchIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M10 2.5h4" />
    <path d="M10.5 2.5v5.8L5.8 17a2 2 0 0 0 1.8 3h9a2 2 0 0 0 1.8-3l-4.9-8.7V2.5" />
    <path d="M7.8 14.5h8.4" />
  </svg>
);

/* Venture Studio process icons */

export const IdeaIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M9 21h6" />
    <path d="M8.5 17.5h7" />
    <path d="M12 3a6 6 0 0 0-3.5 10.9c.6.45 1 1.15 1 1.95v.65h5v-.65c0-.8.4-1.5 1-1.95A6 6 0 0 0 12 3Z" />
  </svg>
);

export const ValidateIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <circle cx="10.5" cy="10.5" r="6.5" />
    <path d="M20.5 20.5 15.8 15.8" />
    <path d="M7.5 10.5 9.5 12.5 13.5 8" />
  </svg>
);

export const BuildIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M14.5 6.5 17.5 3.5a4 4 0 0 1 3 3l-3 3" />
    <path d="M17.5 6.5 14 10l-9 9-2.5.5L3 17l9-9" />
    <path d="M13 7.5 16.5 11" />
  </svg>
);

export const LaunchIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M12 2.5c2.5 1.8 4 5 4 8.5 0 2-.6 3.6-1.4 4.9L12 18l-2.6-2.1C8.6 14.6 8 13 8 11c0-3.5 1.5-6.7 4-8.5Z" />
    <circle cx="12" cy="10.5" r="1.6" />
    <path d="M9 15.5 6.5 18l.5 3 2.7-2.2M15 15.5l2.5 2.5-.5 3-2.7-2.2" />
  </svg>
);

export const ScaleUpIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M3 17 10 10l4 4 7-7" />
    <path d="M15.5 6.5H21v5.5" />
  </svg>
);

/* Innovation Lab focus-area icons */

export const AIIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <rect x="7" y="7" width="10" height="10" rx="2" />
    <circle cx="12" cy="12" r="2" />
    <path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5 5l2 2M19 5l-2 2M5 19l2-2M19 19l-2-2" />
  </svg>
);

export const ClimateIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M20 13.5A6.5 6.5 0 0 0 8.4 9.7 4.8 4.8 0 0 0 5 14.3 4.8 4.8 0 0 0 9.8 19h9a4.2 4.2 0 0 0 1.2-5.5Z" />
    <path d="M8 21.5c1-1 1-2 0-3M12.5 21.5c1-1 1-2 0-3M17 21.5c1-1 1-2 0-3" />
  </svg>
);

export const HealthIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M2.5 12.5h4l1.8-3.5 2.6 6.5 1.7-4 1.4 2h4.5" />
    <path d="M12 20.5S4 15.8 4 9.9A4 4 0 0 1 12 8a4 4 0 0 1 8 1.9c0 5.9-8 10.6-8 10.6Z" />
  </svg>
);

/* Research Institute capability icons */

export const WhitepaperIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M6.5 2.5h8l4 4v14.5a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1Z" />
    <path d="M14 2.5v4.5h4.5" />
    <path d="M8.5 13h7M8.5 16.5h7M8.5 9.5h3" />
  </svg>
);

export const ReportIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <rect x="3.5" y="3" width="17" height="18" rx="1.5" />
    <path d="M8 17v-4M12 17V9M16 17v-7" />
  </svg>
);

export const PolicyIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M12 3v3M12 6 5 9M12 6l7 3" />
    <path d="M2.5 9h5L5 14.5a2.6 2.6 0 0 0 5 0L7.5 9" />
    <path d="M16.5 9h5L19 14.5a2.6 2.6 0 0 0 5 0L21.5 9" />
    <path d="M6 21h12" />
  </svg>
);

export const ForesightIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M15.5 8.5 13 13l-4.5 2.5L11 11l4.5-2.5Z" />
  </svg>
);

export const MarketIntelIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <circle cx="11" cy="11" r="7.5" />
    <circle cx="11" cy="11" r="4" />
    <circle cx="11" cy="11" r="0.8" fill="currentColor" />
    <path d="M16.2 16.2 21 21" />
  </svg>
);
