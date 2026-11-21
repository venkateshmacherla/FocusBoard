import { Bell, Menu, Plus } from "lucide-react";

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
        <h1>My Tasks</h1>
        <p>Plan, track and finish what matters · {today}</p>
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
