import { useState } from 'react'
import { CalendarDays, ChevronLeft } from 'lucide-react'
import Modal from './Modal.jsx'
import { CATEGORIES, PRIORITIES, STATUSES } from '../data/sampleTasks.js'

const EMPTY = {
  title: '',
  description: '',
  category: CATEGORIES[0],
  status: 'To do',
  priority: 'Medium',
  dueDate: '',
}

const TITLE_MAX = 80

function validate(values) {
  const errors = {}
  const title = values.title.trim()
  if (!title) errors.title = 'Enter a task title.'
  else if (title.length > TITLE_MAX) errors.title = `Keep the title under ${TITLE_MAX} characters.`
  if (!STATUSES.includes(values.status)) errors.status = 'Choose a status.'
  if (!PRIORITIES.includes(values.priority)) errors.priority = 'Choose a priority.'
  if (!values.dueDate) errors.dueDate = 'Pick a due date.'
  return errors
}

/** One form for both create and edit: `task` present = edit mode. */
export default function TaskForm({ task, onSubmit, onCancel }) {
  const isEdit = Boolean(task)
  const [values, setValues] = useState(() =>
    task
      ? {
          title: task.title,
          description: task.description || '',
          category: task.category || CATEGORIES[0],
          status: task.status,
          priority: task.priority,
          dueDate: task.dueDate,
        }
      : EMPTY,
  )
  const [errors, setErrors] = useState({})

  const set = (field) => (e) => {
    const value = e.target.value
    setValues((v) => ({ ...v, [field]: value }))
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      const first = Object.keys(found)[0]
      document.getElementById(`field-${first}`)?.focus()
      return
    }
    onSubmit({ ...values, title: values.title.trim(), description: values.description.trim() })
  }

  const err = (f) => (errors[f] ? { 'aria-invalid': true, 'aria-describedby': `error-${f}` } : {})

  return (
    <Modal titleId="form-title" onClose={onCancel}>
      <form className="form" onSubmit={handleSubmit} noValidate>
        <div className="form__head">
          <button type="button" className="icon-btn icon-btn--bordered" onClick={onCancel} aria-label="Back to dashboard">
            <ChevronLeft size={20} />
          </button>
          <div>
            <h2 id="form-title">{isEdit ? 'Edit Task' : 'Create New Task'}</h2>
            <p>Assign a clear objective and set expectations for this task.</p>
          </div>
        </div>

        <div className="field">
          <label htmlFor="field-title">
            Task Title <span className="req" aria-hidden="true">*</span>
          </label>
          <input
            id="field-title"
            type="text"
            value={values.title}
            onChange={set('title')}
            placeholder="e.g. Follow up with Lead #402 regarding Q3 Promo"
            maxLength={TITLE_MAX + 20}
            required
            data-autofocus
            {...err('title')}
          />
          {errors.title && (
            <p className="field__error" id="error-title" role="alert">
              {errors.title}
            </p>
          )}
        </div>

        <div className="field">
          <label htmlFor="field-description">Description</label>
          <textarea
            id="field-description"
            rows={5}
            value={values.description}
            onChange={set('description')}
            placeholder="Provide detailed instructions and context for this task…"
          />
        </div>

        <div className="form__grid">
          <div className="field">
            <label htmlFor="field-priority">
              Priority Level <span className="req" aria-hidden="true">*</span>
            </label>
            <select id="field-priority" value={values.priority} onChange={set('priority')} {...err('priority')}>
              {PRIORITIES.map((p) => (
                <option key={p} value={p}>{p} Priority</option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="field-status">
              {isEdit ? 'Status' : 'Initial Status'} <span className="req" aria-hidden="true">*</span>
            </label>
            <select id="field-status" value={values.status} onChange={set('status')} {...err('status')}>
              {STATUSES.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>

          <div className="field">
            <label htmlFor="field-category">Category</label>
            <select id="field-category" value={values.category} onChange={set('category')}>
              {CATEGORIES.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>

          <div className="field">
            <label htmlFor="field-dueDate">
              Due Date <span className="req" aria-hidden="true">*</span>
            </label>
            <div className="input-icon">
              <CalendarDays size={18} aria-hidden="true" />
              <input id="field-dueDate" type="date" value={values.dueDate} onChange={set('dueDate')} required {...err('dueDate')} />
            </div>
            {errors.dueDate && (
              <p className="field__error" id="error-dueDate" role="alert">
                {errors.dueDate}
              </p>
            )}
          </div>

        </div>

        <div className="form__actions">
          <button type="button" className="btn btn--ghost" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit" className="btn btn--primary">
            {isEdit ? 'Save Changes' : 'Create Task'}
          </button>
        </div>
      </form>
    </Modal>
  )
}
