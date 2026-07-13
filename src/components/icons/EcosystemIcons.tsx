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
