# FocusBoard

FocusBoard is a responsive task management dashboard built as part of the FocusBoard frontend assessment. The application allows users to create, edit, organise and track tasks while viewing progress through dashboard statistics.

All task data is stored in the browser using `localStorage`, so changes remain available even after refreshing the page.

- **Live Demo:** https://your-app.vercel.app
- **GitHub Repository:** https://github.com/your-username/focusboard

---

## Tech Stack

- React 18
- Vite
- JavaScript (ES6+)
- CSS
- Lucide React Icons
- localStorage

No backend or database is used for this project.

---

## Features

### Task Management

- Create new tasks
- Edit existing tasks
- Delete tasks with confirmation
- Update task status directly from the dashboard

### Search and Filtering

- Search tasks by title
- Filter tasks by status
- Filter tasks by priority
- Combine filters and search together

### Dashboard Statistics

- Total tasks
- In Progress tasks
- Completed tasks
- Completion percentage

Statistics are updated automatically whenever task data changes.

### Data Persistence

Task data is stored in `localStorage`, allowing information to persist after page refreshes. Sample data is only loaded when no valid saved data is available.

### Focus Notes

- Carousel navigation
- Previous and next controls
- Keyboard navigation support
- Interactive slide indicators

### Responsive Design

The application has been tested on desktop, tablet and mobile screen sizes. The sidebar automatically adapts into a drawer navigation on smaller devices.

### Accessibility

- Semantic HTML structure
- Form labels
- Keyboard navigation support
- Accessible dialogs
- ARIA attributes where appropriate

---

## Running the Project

```bash
npm install
npm run dev

npm run build

npm run preview
```

---

## Project Structure

```text
src/
├── components/
├── data/
├── hooks/
├── utils/
├── App.jsx
└── index.css
```

---

## State Management

The application uses React hooks for state management.

A single `tasks` state acts as the source of truth for task data throughout the application. Statistics, filters and visible task lists are derived from that state, helping keep everything consistent and easier to maintain.

Since the project only manages a single data entity, additional state management libraries such as Redux or Zustand were not necessary.

---

## localStorage

Task data is saved to `localStorage` and loaded when the application starts. If no valid data exists, the application falls back to sample task data.

Search input and filter selections are not persisted, allowing each session to start with a clean view.

---

## Testing

The application was tested manually across multiple scenarios, including:

- Creating tasks
- Editing tasks
- Deleting tasks
- Updating task status
- Search functionality
- Filtering functionality
- Form validation
- Empty states
- localStorage persistence
- Responsive layouts

---

## Screenshots

### Desktop

![Desktop](screenshots/

### Tablet

screenshots/tablet.png

### Mobile

screenshots/mobile.png

### Create Task Form

screenshots/form.png

---

## Limitations

- The implementation was based on the reference images provided with the assessment, as the original Figma design was not accessible.
- Some sidebar items and navigation actions are currently placeholders and do not navigate to additional screens.
- Search and filter selections are reset when the page is refreshed.
- Data is stored locally in the browser and is not shared between users or devices.

---

## Future Improvements

- Backend integration for persistent user accounts.
- Cloud-based task synchronisation.
- Additional dashboard views and reports.
- Enhanced task categorisation and filtering options.
- Team collaboration features.
