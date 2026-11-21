# AI Usage Disclosure

## Tools Used
- Claude (by Anthropic). I used it through the chat app.
- No other AI tools (no ChatGPT, no GitHub Copilot).

## Representative Prompts
1. "Check the reference document and the assignment document, and complete this entire assignment."
2. "Tell me how much of the assignment is completed and how much is pending. Did you check the Figma design? Add the missing parts."
3. "Check the images I provided (desktop, mobile, create task) and build the design according to them."
4. "Prepare AI_USAGE.md in simple human English."

## AI-Assisted Areas
Most of the code was written by Claude, and I reviewed and tested it. In detail:
- Project setup with React and Vite, and the folder structure
- All React components (sidebar, header, stat cards, Focus Notes carousel, task list, task card, task form, search, filters, confirm dialog)
- The localStorage hook, the statistics calculation and the filtering logic
- All the CSS and the responsive layout for 390px, 768px and 1440px
- Accessibility parts (labels, keyboard support, focus handling in dialogs)
- The README.md and this file
- Browser testing: Claude ran a script that checks create, edit, delete, search, filters, persistence and the carousel

I did not write this code manually from scratch.

## Verified or Corrected Suggestion
The CSS that Claude first generated had a bug. The menu (hamburger) button was meant to be hidden on desktop, but a later CSS rule with the same priority overrode it, so the button showed on the 1440px screen. It was found by looking at a screenshot of the app, not by reading the code. It was fixed by making the selectors more specific (`.header .header__menu`) and the result was checked again in the browser.

A second thing that was caught: on mobile the "New Task" button shows only an icon, so screen readers had no name for it. An `aria-label` was added.

## Limitations I Want to Be Clear About
- Claude could not open the Figma file. The design was built from the three reference images supplied with the assignment, so it may not match the real Figma frames exactly.
- The sidebar items, the project list and the notification bell are placeholders only.

## My Understanding
I have gone through the submitted code and I can explain how it works: how the task state is kept in `App.jsx`, how `useLocalStorage` saves and restores tasks, how search and the two filters work together, and how the statistics are calculated from the task list. I am ready to make a small change live if asked.
