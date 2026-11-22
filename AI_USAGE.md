# AI Usage Disclosure

## Tools Used

- Claude (Anthropic), used through the chat app.
- No other AI tools were used.

## Representative Prompts

1. "Go through the assignment instructions and reference materials. Help me understand what needs to be built and what features are required."

2. "Help me build the task management application using React and Vite, following the assignment requirements."

3. "Compare my application with the provided desktop and mobile reference images. Tell me what is missing and help me fix the layout."

4. "Check the task creation, editing, deleting, search, filters and localStorage functionality. Help me identify and fix any issues."

5. "Review the responsive design and accessibility."

## AI-Assisted Areas

Claude assisted with most parts of the development, including:

- React and Vite project setup.
- Component creation and application structure.
- Task creation, editing and deletion.
- Search, filters and dashboard statistics.
- localStorage implementation.
- CSS styling and responsive design.
- Accessibility improvements.
- Documentation and testing support.

I reviewed the generated code and tested the application. I did not write the entire code manually from scratch.

## Verified or Corrected Suggestion

During testing, I noticed that the hamburger menu button was visible on the desktop screen, even though it should only appear on smaller screens.

I corrected the CSS selector to make the button hidden on desktop and checked the result again.

I also added an `aria-label` to the mobile New Task button so screen readers can identify it.

## Limitations

- The Figma file could not be accessed by Claude. The design was created using the reference images provided with the assignment.
- The sidebar links, project list and notification button are placeholders and are not fully functional.

## My Understanding

I have reviewed the implementation and understand the main functionality, including task state management, localStorage, search, filters and dashboard statistics. I can explain the main features and discuss the implementation during the evaluation.
