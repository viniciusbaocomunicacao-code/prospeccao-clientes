export type IconName =
  | "trendingUp"
  | "building"
  | "globe"
  | "network"
  | "shield"
  | "barChart"
  | "briefcase"
  | "creditCard"
  | "exchange"
  | "shieldCheck"
  | "target"
  | "layers"
  | "users"
  | "zap"
  | "scale";

const paths: Record<IconName, React.ReactNode> = {
  trendingUp: (
    <>
      <polyline points="3 17 9 11 13 15 21 6" />
      <polyline points="14 6 21 6 21 13" />
    </>
  ),
  building: (
    <>
      <rect x="4" y="3" width="16" height="18" />
      <line x1="9" y1="8" x2="9" y2="8" />
      <line x1="15" y1="8" x2="15" y2="8" />
      <line x1="9" y1="13" x2="9" y2="13" />
      <line x1="15" y1="13" x2="15" y2="13" />
      <line x1="10" y1="21" x2="10" y2="17" />
      <line x1="14" y1="21" x2="14" y2="17" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <path d="M12 3c2.4 2.4 3.6 5.4 3.6 9s-1.2 6.6-3.6 9c-2.4-2.4-3.6-5.4-3.6-9s1.2-6.6 3.6-9Z" />
    </>
  ),
  network: (
    <>
      <circle cx="5" cy="6" r="2" />
      <circle cx="19" cy="6" r="2" />
      <circle cx="12" cy="18" r="2" />
      <line x1="6.7" y1="7.2" x2="10.5" y2="16.2" />
      <line x1="17.3" y1="7.2" x2="13.5" y2="16.2" />
      <line x1="7" y1="6" x2="17" y2="6" />
    </>
  ),
  shield: (
    <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
  ),
  barChart: (
    <>
      <line x1="5" y1="21" x2="5" y2="13" />
      <line x1="12" y1="21" x2="12" y2="7" />
      <line x1="19" y1="21" x2="19" y2="11" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <line x1="3" y1="12" x2="21" y2="12" />
    </>
  ),
  creditCard: (
    <>
      <rect x="3" y="6" width="18" height="13" />
      <line x1="3" y1="10.5" x2="21" y2="10.5" />
      <line x1="6" y1="15" x2="10" y2="15" />
    </>
  ),
  exchange: (
    <>
      <polyline points="6 4 6 15" />
      <polyline points="3 12 6 15 9 12" />
      <polyline points="18 20 18 9" />
      <polyline points="21 12 18 9 15 12" />
    </>
  ),
  shieldCheck: (
    <>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
      <polyline points="9 12 11 14 15 10" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="0.7" fill="currentColor" stroke="none" />
    </>
  ),
  layers: (
    <>
      <polygon points="12 3 21 8 12 13 3 8 12 3" />
      <polyline points="3 13 12 18 21 13" />
      <polyline points="3 17.5 12 22.5 21 17.5" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" />
      <circle cx="17.5" cy="8.5" r="2.4" />
      <path d="M16 14.2c2.7.5 4.5 2.5 4.5 5.3" />
    </>
  ),
  zap: <polygon points="13 2 4 14 11 14 9.5 22 20 9 13 9 13 2" />,
  scale: (
    <>
      <line x1="4" y1="21" x2="4" y2="14" />
      <line x1="12" y1="21" x2="12" y2="9" />
      <line x1="20" y1="21" x2="20" y2="4" />
      <line x1="2" y1="21" x2="22" y2="21" />
    </>
  ),
};

export function Icon({
  name,
  className = "h-5 w-5",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
