import { CalendarDays, CheckCircle2, Circle, ClipboardList, Flag, LoaderCircle, Pencil, Trash2 } from 'lucide-react'
import { STATUSES } from '../data/sampleTasks.js'
import { formatDate, isOverdue } from '../utils/helpers.js'

const STATUS_ICON = {
  'To do': Circle,
  'In progress': LoaderCircle,
  Completed: CheckCircle2,
}

const slug = (s) => s.toLowerCase().replace(/\s+/g, '-')

export default function TaskCard({ task, onEdit, onDelete, onStatusChange }) {
  const Icon = STATUS_ICON[task.status] || Circle
  const overdue = isOverdue(task)

  return (
    <li className={`task ${task.status === 'Completed' ? 'task--done' : ''}`}>
      <div className="task__main">
        <span className="task__icon" aria-hidden="true">
          <ClipboardList size={20} />
        </span>
        <div className="task__text">
        <h3 className="task__title">{task.title}</h3>
        {task.description && <p className="task__desc">{task.description}</p>}
        <div className="task__meta">
          {task.category && <span className="chip">{task.category}</span>}
          <span className={`task__due ${overdue ? 'is-overdue' : ''}`}>
            <CalendarDays size={14} aria-hidden="true" />
            {formatDate(task.dueDate)}
            {overdue && <strong> · Overdue</strong>}
          </span>
        </div>
        </div>
      </div>

      <div className="task__side">
        <span className={`badge badge--${slug(task.status)}`}>
          <Icon size={14} aria-hidden="true" />
          {task.status}
        </span>
        <span className={`priority priority--${slug(task.priority)}`}>
          <Flag size={14} aria-hidden="true" />
          {task.priority}
        </span>
      </div>

      <div className="task__actions">
        <label className="sr-only" htmlFor={`status-${task.id}`}>
          Change status of {task.title}
        </label>
        <select
          id={`status-${task.id}`}
          className="select select--sm"
          value={task.status}
          onChange={(e) => onStatusChange(task.id, e.target.value)}
        >
          {STATUSES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <button type="button" className="icon-btn icon-btn--bordered" onClick={() => onEdit(task)} aria-label={`Edit ${task.title}`}>
          <Pencil size={16} />
        </button>
        <button
          type="button"
          className="icon-btn icon-btn--bordered icon-btn--danger"
          onClick={() => onDelete(task)}
          aria-label={`Delete ${task.title}`}
        >
          <Trash2 size={16} />
        </button>
      </div>
    </li>
  )
}
