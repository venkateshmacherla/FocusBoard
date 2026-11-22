import { ChevronDown, Menu } from "lucide-react";

/**
 * Top bar.
 * Desktop/tablet: breadcrumb on the left, avatar on the right.
 * Phone: logo + "FocusBoard" on the left, avatar on the right (Figma mobile frame).
 */
export default function TopBar({ onMenu, onProfile }) {
  return (
    <div className="topbar" role="region" aria-label="Top bar">
      <button
        type="button"
        className="icon-btn topbar__menu"
        onClick={onMenu}
        aria-label="Open menu"
      >
        <Menu size={22} />
      </button>

      <div className="topbar__brand">
        <span className="logo" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="#fff">
            <rect x="2" y="2" width="7" height="7" rx="2" />
            <rect x="11" y="2" width="7" height="7" rx="2" />
            <rect x="2" y="11" width="7" height="7" rx="2" />
            <rect x="11" y="11" width="7" height="7" rx="2" />
          </svg>
        </span>
        <span>FocusBoard</span>
      </div>

      <nav aria-label="Breadcrumb" className="crumbs">
        <ol>
          <li>Workspace</li>
          <li className="crumbs__sep" aria-hidden="true">
            /
          </li>
          <li aria-current="page">Overview</li>
        </ol>
      </nav>

      <button
        type="button"
        className="topbar__user"
        onClick={onProfile}
        aria-label="Account menu"
      >
        <span className="avatar" aria-hidden="true">
          VM
        </span>
        <ChevronDown size={16} aria-hidden="true" className="topbar__chevron" />
      </button>
    </div>
  );
}
