export interface NavLink {
  label: string;
  to: string;
}

export interface NavItem {
  label: string;
  to: string;
  children?: NavLink[];
}

export const primaryNav: NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "About",
    to: "/about-blessed-stanley-rother",
    children: [
      { label: "Blessed Stanley Rother", to: "/about-blessed-stanley-rother" },
      { label: "History of the Shrine", to: "/history" },
      { label: "FAQ", to: "/faq" },
    ],
  },
  {
    label: "What to See",
    to: "/what-to-see",
    children: [
      { label: "Pilgrim Center", to: "/what-to-see#pilgrim-center" },
      { label: "Shrine Church & Chapel", to: "/what-to-see#shrine-church" },
      { label: "Tepeyac Hill", to: "/what-to-see#tepeyac-hill" },
    ],
  },
  { label: "Pilgrimage", to: "/pilgrimage" },
  { label: "News & Events", to: "/news-events" },
  { label: "Volunteer", to: "/volunteer" },
];

export const footerNav: NavLink[] = [
  { label: "Rector's Welcome", to: "/about-blessed-stanley-rother" },
  { label: "Location & Schedules", to: "/pilgrimage#visit" },
  { label: "History", to: "/history" },
  { label: "FAQ", to: "/faq" },
  { label: "Pilgrim Center", to: "/what-to-see#pilgrim-center" },
  { label: "Shrine Church & Chapel", to: "/what-to-see#shrine-church" },
  { label: "Tepeyac Hill", to: "/what-to-see#tepeyac-hill" },
  { label: "News & Events", to: "/news-events" },
  { label: "Volunteer", to: "/volunteer" },
  { label: "Give", to: "/give" },
];
