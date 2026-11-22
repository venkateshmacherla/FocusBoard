import { Menu, Plus } from "lucide-react";

export default function Header({ onMenu, onAdd }) {
  return (
    <header className="header">
      <button
        type="button"
        className="icon-btn header__menu"
        onClick={onMenu}
        aria-label="Open menu"
      >
        <Menu size={22} />
      </button>

      <div className="header__title">
        {/* Desktop/tablet show the Figma heading; phones show the greeting. Hidden text is not read by screen readers. */}
        <h1>
          <span className="title-desktop"> Your work, in focus.</span>
          <span className="title-mobile">
            {" "}
            Your work,
            <br /> in focus.
          </span>
        </h1>
        <p>
          <span className="sub-desktop">
            Plan your day, stay organized, and celebrate small wins.
          </span>
          <span className="sub-mobile">
            Stay organized and keep moving forward.
          </span>
        </p>
      </div>

      <div className="header__actions">
        <span className="avatar header__avatar" role="img" aria-label="Profile">
          VM
        </span>
        <button
          type="button"
          className="btn btn--primary header__add"
          onClick={onAdd}
          aria-label="New task"
        >
          <Plus size={18} aria-hidden="true" />
          <span>New task</span>
        </button>
      </div>
    </header>
  );
}
