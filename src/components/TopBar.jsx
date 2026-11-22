import { ChevronDown, Menu } from "lucide-react";

/** Figma top navigation: breadcrumb on the left, account avatar on the right. */
export default function TopBar({ onMenu, onProfile }) {
  return (
    <div className="topbar">
      <button
        type="button"
        className="icon-btn topbar__menu"
        onClick={onMenu}
        aria-label="Open menu"
      >
        <Menu size={22} />
      </button>

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
        <ChevronDown size={16} aria-hidden="true" />
      </button>
    </div>
  );
}
