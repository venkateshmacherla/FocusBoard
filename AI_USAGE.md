# AI Usage Disclosure

## Tools Used

- Claude (Anthropic), accessed through the chat application.
- No other AI tools were used.

## Representative Prompts

1. "I was having trouble keeping task updates in sync after editing. Can you review the state management and suggest a better approach?"

2. "Task data wasn't always being saved correctly after a page refresh. Help me troubleshoot the localStorage implementation."

3. "Can you compare my application against the provided desktop and mobile references and point out any responsive layout issues?"

4. "The sidebar and mobile navigation weren't behaving consistently across screen sizes. Help me identify and fix the problem."

## AI-Assisted Areas

I mainly used AI as a troubleshooting and review tool for a few of the more challenging parts of the assignment:

- Debugging task creation, editing and state update behaviour.
- Reviewing localStorage implementation and data persistence issues.
- Checking responsive layouts against the provided reference screens.
- Identifying and resolving navigation issues on smaller devices.

I reviewed the suggestions, tested the changes myself and only kept solutions that worked correctly within the application.

## Verified or Corrected Suggestion

While testing the application, I noticed that the hamburger menu was still visible on desktop screens even though it was intended for mobile devices only.

After reviewing the suggested solution, I adjusted the CSS rules and verified the behaviour across different screen sizes to ensure the menu only appears on smaller devices.

I also added an `aria-label` to the mobile "New Task" button to improve accessibility for screen reader users.

## Limitations

- The Figma design file was not directly available, so the interface was built using the reference images provided with the assignment.
- Some navigation links and dashboard actions are included as UI placeholders and do not contain additional functionality.

## My Understanding

I reviewed and tested the application throughout development and understand how the main features work, including task management, state handling, localStorage persistence, filtering and dashboard statistics.
