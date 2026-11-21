export function formatDate(iso) {
  if (!iso) return ''
  const d = new Date(`${iso}T00:00:00`)
  if (Number.isNaN(d.getTime())) return iso
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
}

export function todayISO() {
  const d = new Date()
  const pad = (n) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}

export function isOverdue(task) {
  return task.status !== 'Completed' && task.dueDate < todayISO()
}

export function createId() {
  return `t-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`
}

export function isValidTaskList(data) {
  return (
    Array.isArray(data) &&
    data.every(
      (t) =>
        t &&
        typeof t === 'object' &&
        t.id !== undefined &&
        typeof t.title === 'string' &&
        typeof t.status === 'string' &&
        typeof t.priority === 'string',
    )
  )
}

export function calculateStats(tasks) {
  const total = tasks.length
  const inProgress = tasks.filter((t) => t.status === 'In progress').length
  const completed = tasks.filter((t) => t.status === 'Completed').length
  const todo = tasks.filter((t) => t.status === 'To do').length
  const completion = total === 0 ? 0 : Math.round((completed / total) * 100)
  return { total, inProgress, completed, todo, completion }
}
