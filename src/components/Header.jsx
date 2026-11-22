import { Bell, Menu, Plus } from "lucide-react";

// Shown in the mobile greeting. Change this to your name.
const USER_NAME = "Venkyy";

export default function Header({ onMenu, onAdd, onBell }) {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

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
        {/* Desktop/tablet show "My Tasks"; phones show the greeting. Hidden text is not read by screen readers. */}
        <h1>
          <span className="title-desktop">My Tasks</span>
          <span className="title-mobile">
            Hello, <strong>{USER_NAME}</strong>!
          </span>
        </h1>
        <p>
          <span className="sub-desktop">
            Plan, track and finish what matters · {today}
          </span>
          <span className="sub-mobile">Have a nice day!</span>
        </p>
      </div>

      <div className="header__actions">
        <button
          type="button"
          className="icon-btn icon-btn--bordered"
          aria-label="Notifications"
          onClick={onBell}
        >
          <Bell size={20} />
        </button>
        <span className="avatar" role="img" aria-label="Profile">
          VM
        </span>
        <button
          type="button"
          className="btn btn--primary header__add"
          onClick={onAdd}
          aria-label="New task"
        >
          <Plus size={18} aria-hidden="true" />
          <span>New Task</span>
        </button>
      </div>
    </header>
  );
}
