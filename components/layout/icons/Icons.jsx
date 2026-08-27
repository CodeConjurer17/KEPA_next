/* Small, dependency-free icon set. All icons use currentColor,
   so they inherit color from whatever CSS class wraps them —
   no separate icon CSS file needed. */

const base = {
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function IconMenu(props) {
  return (
    <svg {...base} {...props}>
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  );
}

export function IconClose(props) {
  return (
    <svg {...base} {...props}>
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </svg>
  );
}

export function IconSearch(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

export function IconArrowRight(props) {
  return (
    <svg {...base} {...props}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export function IconLeaf(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 20c8 0 16-8 16-16-8 0-16 8-16 16Z" />
      <path d="M4 20c2-6 6-10 12-13" />
    </svg>
  );
}

export function IconInstagram(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconFacebook(props) {
  return (
    <svg {...base} {...props}>
      <path d="M14 8.5h2V5h-2c-2.2 0-4 1.8-4 4v2H8v3h2v6.5h3V14h2.2l.8-3H13V9c0-.3.2-.5.5-.5H14Z" />
    </svg>
  );
}

export function IconTag(props) {
  return (
    <svg {...base} {...props}>
      <path d="M20 12.5 12.5 20a1.5 1.5 0 0 1-2.1 0l-6.4-6.4a1.5 1.5 0 0 1 0-2.1L11.5 4H18a2 2 0 0 1 2 2v6.5Z" />
      <circle cx="15" cy="9" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconHome(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 11.5 12 4l8 7.5" />
      <path d="M6 10v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9" />
    </svg>
  );
}

export function IconGift(props) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="9" width="16" height="11" rx="1.5" />
      <path d="M4 9h16v3.5H4z" />
      <path d="M12 9v11" />
      <path d="M12 9c-1-3-3.5-4-4.5-3S6.5 9 8 9h4Z" />
      <path d="M12 9c1-3 3.5-4 4.5-3S17.5 9 16 9h-4Z" />
    </svg>
  );
}

export function IconInfo(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <line x1="12" y1="11" x2="12" y2="16" />
      <circle cx="12" cy="7.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconHeart(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 20.5s-7.5-4.6-9.9-9.3C.6 7.6 2.4 4.5 5.6 4c2-.3 3.7.6 4.9 2.1l1.5 1.8 1.5-1.8C14.7 4.6 16.4 3.7 18.4 4c3.2.5 5 3.6 3.5 7.2C19.5 15.9 12 20.5 12 20.5Z" />
    </svg>
  );
}

export function IconChevronLeft(props) {
  return (
    <svg {...base} {...props}>
      <polyline points="15 6 9 12 15 18" />
    </svg>
  );
}

export function IconChevronRight(props) {
  return (
    <svg {...base} {...props}>
      <polyline points="9 6 15 12 9 18" />
    </svg>
  );
}
export function IconBox(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3.5 8.5 12 4l8.5 4.5V16L12 20.5 3.5 16V8.5Z" />
      <path d="M3.5 8.5 12 13l8.5-4.5" />
      <path d="M12 13v7.5" />
    </svg>
  );
}

export function IconHelp(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M9.5 9.2a2.5 2.5 0 1 1 3.7 2.2c-.8.5-1.2 1-1.2 2" />
      <circle cx="12" cy="16.3" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconFilter(props) {
  return (
    <svg {...base} {...props}>
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="20" y2="18" />
      <circle cx="9" cy="6" r="1.8" fill="currentColor" stroke="var(--icon-bg, white)" />
      <circle cx="15" cy="12" r="1.8" fill="currentColor" stroke="var(--icon-bg, white)" />
      <circle cx="9" cy="18" r="1.8" fill="currentColor" stroke="var(--icon-bg, white)" />
    </svg>
  );
}