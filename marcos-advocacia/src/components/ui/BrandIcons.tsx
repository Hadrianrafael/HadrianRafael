import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3.6 20.4l1.25-4.05A8.6 8.6 0 1 1 8.1 19.3L3.6 20.4Z" />
      <path d="M9.2 8.1c.2-.45.45-.5.75-.5h.5c.2 0 .4.05.55.4l.65 1.55c.08.2.05.42-.08.6l-.5.65a.5.5 0 0 0-.05.55 6 6 0 0 0 2.65 2.6.5.5 0 0 0 .55-.06l.62-.52a.62.62 0 0 1 .62-.08l1.55.7c.3.14.38.35.36.58-.05.55-.35 1.25-1 1.55-.75.35-1.7.3-2.95-.2a9.4 9.4 0 0 1-4.3-4.05c-.6-1.1-.75-2.05-.48-2.83.08-.25.25-.6.6-.94Z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.25" cy="6.75" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M14.5 21v-7.5h2.6l.4-3h-3V8.6c0-.85.3-1.45 1.5-1.45h1.6V4.45A20 20 0 0 0 15.3 4.3c-2.3 0-3.9 1.4-3.9 4v2.2H8.8v3h2.6V21" />
    </svg>
  );
}
