import { Bell, CalendarDays, Home, Search } from "lucide-react";

/** Bottom tab bar shown on phones only (see CSS). Search jumps to the working search box. */
export default function MobileNav({ onHome, onSearch, onPlaceholder }) {
  return (
    <nav className="mobile-nav" aria-label="Quick navigation">
      <button
        type="button"
        className="mobile-nav__item is-active"
        aria-current="page"
        onClick={onHome}
      >
        <Home size={22} aria-hidden="true" />
        <span>Home</span>
      </button>
      <button
        type="button"
        className="mobile-nav__item"
        aria-label="Calendar"
        onClick={() => onPlaceholder("Calendar")}
      >
        <CalendarDays size={22} aria-hidden="true" />
        <span>Calendar</span>
      </button>
      <button
        type="button"
        className="mobile-nav__item"
        aria-label="Notifications"
        onClick={() => onPlaceholder("Notifications")}
      >
        <Bell size={22} aria-hidden="true" />
        <span>Alerts</span>
      </button>
      <button type="button" className="mobile-nav__item" onClick={onSearch}>
        <Search size={22} aria-hidden="true" />
        <span>Search</span>
      </button>
    </nav>
  );
}
