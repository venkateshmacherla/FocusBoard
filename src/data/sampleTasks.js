// Initial data. Only used when localStorage has no saved tasks.
export const STATUSES = ['To do', 'In progress', 'Completed']
export const PRIORITIES = ['Low', 'Medium', 'High']
export const CATEGORIES = ['Design', 'Development', 'Testing', 'Research']

export const sampleTasks = [
  {
    id: 101,
    title: 'Complete UI design review',
    description: 'Walk through the dashboard frames and list spacing and colour differences.',
    category: 'Design',
    status: 'In progress',
    priority: 'High',
    dueDate: '2026-11-25',
  },
  {
    id: 102,
    title: 'Build task list components',
    description: 'Create reusable TaskCard and TaskList components with edit and delete actions.',
    category: 'Development',
    status: 'In progress',
    priority: 'High',
    dueDate: '2026-11-26',
  },
  {
    id: 103,
    title: 'Write test cases for login flow',
    description: 'Cover valid, invalid and empty credential scenarios.',
    category: 'Testing',
    status: 'To do',
    priority: 'Medium',
    dueDate: '2026-11-28',
  },
  {
    id: 104,
    title: 'Research accessibility checklist',
    description: 'Collect keyboard, focus and contrast requirements for the team.',
    category: 'Research',
    status: 'Completed',
    priority: 'Low',
    dueDate: '2026-11-18',
  },
  {
    id: 105,
    title: 'Prepare sprint documentation',
    description: 'Summarise completed work and open items for the weekly review.',
    category: 'Research',
    status: 'Completed',
    priority: 'Medium',
    dueDate: '2026-11-20',
  },
  {
    id: 106,
    title: 'Fix API integration bug',
    description: 'Retry failed requests and show a readable error message.',
    category: 'Development',
    status: 'To do',
    priority: 'High',
    dueDate: '2026-11-24',
  },
  {
    id: 107,
    title: 'Create onboarding illustrations',
    description: 'Export three illustrations for the welcome screens.',
    category: 'Design',
    status: 'Completed',
    priority: 'Low',
    dueDate: '2026-11-19',
  },
]
