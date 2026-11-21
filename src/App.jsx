import { useCallback, useMemo, useState } from "react";
import { CheckCircle2, ListChecks, LoaderCircle, Percent } from "lucide-react";
import Sidebar from "./components/Sidebar.jsx";
import Header from "./components/Header.jsx";
import StatCard from "./components/StatCard.jsx";
import FocusNotes from "./components/FocusNotes.jsx";
import SearchBar from "./components/SearchBar.jsx";
import FilterTabs from "./components/FilterTabs.jsx";
import TaskList from "./components/TaskList.jsx";
import TaskForm from "./components/TaskForm.jsx";
import ConfirmDialog from "./components/ConfirmDialog.jsx";
import MobileNav from "./components/MobileNav.jsx";
import Toast from "./components/Toast.jsx";
import PriorityBreakdown from "./components/PriorityBreakdown.jsx";
import StatusOverview from "./components/StatusOverview.jsx";
import useLocalStorage from "./hooks/useLocalStorage.js";
import { sampleTasks } from "./data/sampleTasks.js";
import { calculateStats, createId, isValidTaskList } from "./utils/helpers.js";

const STORAGE_KEY = "focusboard_tasks";

export default function App() {
  // Single source of truth for all task data (persisted).
  const [tasks, setTasks] = useLocalStorage(
    STORAGE_KEY,
    sampleTasks,
    isValidTaskList,
  );

  // UI state
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [formState, setFormState] = useState({ open: false, task: null });
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("tasks");
  const [toast, setToast] = useState(null);

  const showToast = (message) => setToast({ id: Date.now(), message });
  const closeToast = useCallback(() => setToast(null), []);
  const comingSoon = (label) =>
    showToast(`${label} is coming soon. This page is a placeholder.`);

  function handleNavigate(id, label) {
    if (id === "dashboard") {
      setActiveNav("dashboard");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (id === "tasks") {
      setActiveNav("tasks");
      document
        .getElementById("tasks-title")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      comingSoon(label);
    }
  }

  // ----- CRUD (immutable updates) -----
  const addTask = (values) =>
    setTasks((prev) => [{ id: createId(), ...values }, ...prev]);
  const updateTask = (id, values) =>
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, ...values, id: t.id } : t)),
    );
  const changeStatus = (id, status) =>
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, status } : t)));
  const deleteTask = (id) =>
    setTasks((prev) => prev.filter((t) => t.id !== id));

  function handleFormSubmit(values) {
    if (formState.task) {
      updateTask(formState.task.id, values);
      showToast("Task updated");
    } else {
      addTask(values);
      showToast("Task created");
    }
    setFormState({ open: false, task: null });
  }

  function confirmDelete() {
    deleteTask(deleteTarget.id);
    setDeleteTarget(null);
    showToast("Task deleted");
  }

  const resetFilters = () => {
    setSearch("");
    setStatusFilter("All");
    setPriorityFilter("All");
  };

  // ----- Derived values (never stored) -----
  const stats = useMemo(() => calculateStats(tasks), [tasks]);

  const visibleTasks = useMemo(() => {
    const q = search.trim().toLowerCase();
    return tasks.filter(
      (t) =>
        (statusFilter === "All" || t.status === statusFilter) &&
        (priorityFilter === "All" || t.priority === priorityFilter) &&
        (q === "" || t.title.toLowerCase().includes(q)),
    );
  }, [tasks, search, statusFilter, priorityFilter]);

  // Tab counts respect search + priority, so tabs show what each tab would contain.
  const tabCounts = useMemo(() => {
    const q = search.trim().toLowerCase();
    const base = tasks.filter(
      (t) =>
        (priorityFilter === "All" || t.priority === priorityFilter) &&
        (q === "" || t.title.toLowerCase().includes(q)),
    );
    return {
      All: base.length,
      "To do": base.filter((t) => t.status === "To do").length,
      "In progress": base.filter((t) => t.status === "In progress").length,
      Completed: base.filter((t) => t.status === "Completed").length,
    };
  }, [tasks, search, priorityFilter]);

  const share = (n) =>
    stats.total === 0 ? 0 : Math.round((n / stats.total) * 100);
  const focusSearch = () => {
    const el = document.getElementById("task-search");
    el?.scrollIntoView({ behavior: "smooth", block: "center" });
    el?.focus({ preventScroll: true });
  };

  const isFiltered =
    search !== "" || statusFilter !== "All" || priorityFilter !== "All";

  return (
    <div className="app">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Sidebar
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        active={activeNav}
        onNavigate={handleNavigate}
      />

      <div className="shell">
        <Header
          onMenu={() => setMenuOpen(true)}
          onAdd={() => setFormState({ open: true, task: null })}
          onBell={() => comingSoon("Notifications")}
        />

        <main id="main" className="main" tabIndex={-1}>
          <section aria-labelledby="overview-title">
            <h2 id="overview-title" className="section-title">
              Overview
            </h2>
            <div className="stats">
              <StatCard
                title="Total tasks"
                value={stats.total}
                icon={ListChecks}
                tone="neutral"
                caption="on your board"
              />
              <StatCard
                title="In progress"
                value={stats.inProgress}
                icon={LoaderCircle}
                tone="progress"
                caption={`${share(stats.inProgress)}% of all tasks`}
              />
              <StatCard
                title="Completed"
                value={stats.completed}
                icon={CheckCircle2}
                tone="done"
                caption={`${share(stats.completed)}% of all tasks`}
              />
              <StatCard
                title="Completion"
                value={`${stats.completion}%`}
                icon={Percent}
                tone="brand"
              >
                <div
                  className="meter"
                  role="progressbar"
                  aria-label="Completion"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={stats.completion}
                >
                  <span style={{ width: `${stats.completion}%` }} />
                </div>
              </StatCard>
            </div>
          </section>

          <FocusNotes />

          <div className="insights">
            <PriorityBreakdown tasks={tasks} />
            <StatusOverview stats={stats} />
          </div>

          <section className="board" aria-labelledby="tasks-title">
            <div className="board__head">
              <h2 id="tasks-title" className="section-title">
                Tasks
                <span className="board__count" aria-live="polite">
                  {visibleTasks.length} shown
                </span>
              </h2>
              <SearchBar value={search} onChange={setSearch} />
            </div>

            <FilterTabs
              status={statusFilter}
              onStatus={setStatusFilter}
              priority={priorityFilter}
              onPriority={setPriorityFilter}
              counts={tabCounts}
              onReset={resetFilters}
              isFiltered={isFiltered}
            />

            <TaskList
              tasks={visibleTasks}
              hasAnyTasks={tasks.length > 0}
              onEdit={(task) => setFormState({ open: true, task })}
              onDelete={setDeleteTarget}
              onStatusChange={changeStatus}
              onAdd={() => setFormState({ open: true, task: null })}
              onReset={resetFilters}
            />
          </section>
        </main>
      </div>

      <MobileNav
        onHome={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        onSearch={focusSearch}
        onPlaceholder={comingSoon}
      />
      <Toast toast={toast} onClose={closeToast} />

      {formState.open && (
        <TaskForm
          key={formState.task ? formState.task.id : "new"}
          task={formState.task}
          onSubmit={handleFormSubmit}
          onCancel={() => setFormState({ open: false, task: null })}
        />
      )}
      {deleteTarget && (
        <ConfirmDialog
          task={deleteTarget}
          onConfirm={confirmDelete}
          onCancel={() => setDeleteTarget(null)}
        />
      )}
    </div>
  );
}
