import {
  BarChart3,
  Briefcase,
  CalendarDays,
  CheckSquare,
  CircleHelp,
  Inbox,
  LayoutDashboard,
  Settings,
  UserPlus,
  X,
} from "lucide-react";

const NAV = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "tasks", label: "My Tasks", icon: CheckSquare },
  { id: "inbox", label: "Inbox", icon: Inbox },
  { id: "calendar", label: "Calendar", icon: CalendarDays },
  { id: "reports", label: "Reports", icon: BarChart3 },
  { id: "portfolio", label: "Portfolio", icon: Briefcase },
];

const PROJECTS = [
  { id: "p1", label: "Product Design", color: "#2dd4bf" },
  { id: "p2", label: "Project Planning", color: "#8e78ff" },
  { id: "p3", label: "Website Redesign", color: "#fb923c" },
];

const BOTTOM = [
  { id: "invite", label: "Invite Team", icon: UserPlus },
  { id: "support", label: "Support", icon: CircleHelp },
  { id: "settings", label: "Settings", icon: Settings },
];

export default function Sidebar({ open, onClose, active, onNavigate }) {
  const item = ({ id, label, icon: Icon }) => (
    <li key={id}>
      <button
        type="button"
        className={`nav__item ${active === id ? "is-active" : ""}`}
        aria-current={active === id ? "page" : undefined}
        onClick={() => {
          onNavigate(id, label);
          onClose();
        }}
      >
        <Icon size={18} aria-hidden="true" />
        {label}
      </button>
    </li>
  );

  return (
    <>
      {open && <div className="scrim" onClick={onClose} aria-hidden="true" />}
      <aside
        className={`sidebar ${open ? "sidebar--open" : ""}`}
        aria-label="Sidebar"
      >
        <div className="sidebar__brand">
          <span className="logo" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="#fff">
              <rect x="2" y="2" width="7" height="7" rx="2" />
              <rect x="11" y="2" width="7" height="7" rx="2" />
              <rect x="2" y="11" width="7" height="7" rx="2" />
              <rect x="11" y="11" width="7" height="7" rx="2" />
            </svg>
          </span>
          <span className="sidebar__name">FocusBoard</span>
          <button
            type="button"
            className="icon-btn sidebar__close"
            onClick={onClose}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav aria-label="Main navigation" className="sidebar__nav">
          <ul className="nav">{NAV.map(item)}</ul>

          <p className="sidebar__heading" id="project-heading">
            Project
          </p>
          <ul className="nav" aria-labelledby="project-heading">
            {PROJECTS.map((p) => (
              <li key={p.id}>
                <button
                  type="button"
                  className={`nav__item nav__item--project ${active === p.id ? "is-active" : ""}`}
                  aria-current={active === p.id ? "page" : undefined}
                  onClick={() => {
                    onNavigate(p.id, p.label);
                    onClose();
                  }}
                >
                  <span
                    className="dot-color"
                    style={{ background: p.color }}
                    aria-hidden="true"
                  />
                  {p.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="nav sidebar__bottom">{BOTTOM.map(item)}</ul>
      </aside>
    </>
  );
}
