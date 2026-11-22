import { useState } from "react";
import { Calendar, CircleDot, LayoutGrid, List } from "lucide-react";

/**
 * Bottom tab bar for phones (shown by CSS at <= 560px).
 * Overview and Tasks scroll to their sections; Calendar and Settings are placeholders.
 */
export default function MobileNav({ onHome, onPlaceholder }) {
  const [active, setActive] = useState("overview");

  const goOverview = () => {
    setActive("overview");
    onHome();
  };

  const goTasks = () => {
    setActive("tasks");
    document
      .getElementById("tasks-title")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const tab = (id, label, Icon, onClick) => (
    <button
      type="button"
      className={`mobile-nav__item ${active === id ? "is-active" : ""}`}
      aria-current={active === id ? "page" : undefined}
      onClick={onClick}
    >
      <Icon size={26} strokeWidth={2} aria-hidden="true" />
      <span>{label}</span>
    </button>
  );

  return (
    <nav className="mobile-nav" aria-label="Quick navigation">
      {tab("overview", "Overview", LayoutGrid, goOverview)}
      {tab("tasks", "Tasks", List, goTasks)}
      <button
        type="button"
        className="mobile-nav__item"
        onClick={() => onPlaceholder("Calendar")}
      >
        <Calendar size={26} strokeWidth={2} aria-hidden="true" />
        <span>Calendar</span>
      </button>
      <button
        type="button"
        className="mobile-nav__item"
        onClick={() => onPlaceholder("Settings")}
      >
        <CircleDot size={26} strokeWidth={2} aria-hidden="true" />
        <span>Settings</span>
      </button>
    </nav>
  );
}
