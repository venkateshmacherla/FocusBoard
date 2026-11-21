import { ClipboardList, SearchX } from 'lucide-react'
import TaskCard from './TaskCard.jsx'

export default function TaskList({ tasks, hasAnyTasks, onEdit, onDelete, onStatusChange, onAdd, onReset }) {
  if (tasks.length === 0) {
    return (
      <div className="empty" role="status">
        {hasAnyTasks ? (
          <>
            <SearchX size={32} aria-hidden="true" />
            <h3>No tasks match your filters</h3>
            <p>Try a different keyword or clear the filters.</p>
            <button type="button" className="btn btn--ghost" onClick={onReset}>
              Clear search and filters
            </button>
          </>
        ) : (
          <>
            <ClipboardList size={32} aria-hidden="true" />
            <h3>Your board is empty</h3>
            <p>Add your first task to start tracking progress.</p>
            <button type="button" className="btn btn--primary" onClick={onAdd}>
              Add task
            </button>
          </>
        )}
      </div>
    )
  }

  return (
    <ul className="tasks" aria-label="Tasks">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} onStatusChange={onStatusChange} />
      ))}
    </ul>
  )
}
