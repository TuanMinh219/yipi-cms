# 🚀 AI Agent Workflow Guide for Yipi-CMS

## Welcome, AI Agent!

This document outlines the standardized workflow for all AI agents working on the yipi-cms project. Following this process ensures consistency, proper documentation, and smooth collaboration between multiple agents.

---

## 📋 The Three-Step Workflow

### **Step 1: READ & UNDERSTAND (Before Starting Any Task)**

#### 🚨 CRITICAL FIRST STEP: Read ALL files in the docs folder

**This is the most important step!** Before doing anything else, you MUST read every single file in the `docs/` folder to understand:
- What has been done in the project
- What the current state is
- What patterns and conventions are being followed
- What tasks are in progress or pending

**Action items:**
1. List all files in `docs/` folder: `list_files docs/`
2. Read **EVERY** file in the docs folder:
   - `docs/TODO_HISTORY.md` - See complete history of all tasks
   - `docs/TASK_TEMPLATE.md` - Understand documentation format
   - All completed task files (e.g., `docs/atom-refactor.md`, `docs/cleanup-old-atoms.md`, etc.)
   - Any in-progress task files

3. **Only after reading all docs files**, proceed to:
   - Examine `src/` directory to understand the current architecture
   - Review existing components to follow established patterns
   - Check `src/common/Atoms/` for available UI components

4. **Understand the task requirements**
   - Clarify any ambiguities with the user before proceeding
   - Ensure you understand the expected outcome

### **Step 2: EXECUTE THE TASK**

1. **Create task documentation FIRST**
   - Create a new file in `docs/` folder: `docs/[task-name].md`
   - Use the template from `docs/TASK_TEMPLATE.md`
   - Fill in:
     - Task name
     - Current status (IN_PROGRESS)
     - Files to be changed/updated
     - Detailed steps with checkboxes
     - Dependencies if any
     - Verification steps

2. **Implement the solution**
   - Follow existing code patterns and conventions
   - Use the project's atomic design system (Atoms library)
   - Write clean, maintainable code
   - Import components correctly from `src/common/Atoms/`

3. **Test your implementation**
   - Run `npm run dev` to verify no build errors
   - Check that the component renders correctly
   - Ensure responsive design works (test on different screen sizes if applicable)

### **Step 3: UPDATE DOCUMENTATION (After Completing Task)**

1. **Update the task documentation**
   - Mark all checkboxes as completed `[x]`
   - Change status to `✅ COMPLETED`
   - Add completion date
   - Note any issues encountered and how they were resolved
   - Document verification results

2. **Update the history**
   - Append the completed task to `docs/TODO_HISTORY.md`
   - Include:
     - Task name
     - Key steps completed
     - Final status
     - Any important notes

3. **Archive the task file**
   - Keep the task documentation in `docs/` folder as a record
   - This creates a complete history of all work done

---

## 📁 Project Structure Overview

```
yipi-cms/
├── src/
│   ├── admin/              # Admin-specific pages and components
│   │   ├── pages/          # Admin pages
│   │   └── components/     # Admin components
│   ├── user/               # User-specific pages (NEW)
│   │   └── MainPage/       # User main page
│   ├── common/             # Shared components
│   │   └── Atoms/          # UI component library (19 components)
│   ├── assets/             # Static assets
│   ├── App.jsx             # Main app component
│   └── main.jsx            # Entry point
├── docs/                   # Documentation folder
│   ├── TASK_TEMPLATE.md    # Template for task documentation
│   ├── TODO_HISTORY.md     # History of all completed tasks
│   └── [task-name].md      # Individual task documentation files
├── public/                 # Public assets
├── package.json            # Project dependencies
└── vite.config.js          # Vite configuration
```

---

## 🎯 Key Conventions to Follow

### **File Organization**
- Each component gets its own folder with `index.jsx` and `[ComponentName].css`
- Example: `src/common/Atoms/Button/Button.jsx` + `Button.css`
- Pages follow the same pattern: `src/admin/pages/AdminHomepage/index.jsx` + `index.css`

### **Import Patterns**
```javascript
// Import from Atoms library
import { Button, Container, Breadcrumb } from '../../common/Atoms';

// Import local CSS
import './index.css';
```

### **Component Structure**
```javascript
import React from 'react';
import { Container, Breadcrumb } from '../../common/Atoms';
import './index.css';

export default function ComponentName() {
  // Component logic here
  return (
    <div className="component-wrapper">
      {/* Component JSX */}
    </div>
  );
}
```

### **CSS Naming**
- Use BEM-like naming: `.component-name-wrapper`, `.component-name-content`
- Include responsive breakpoints: `@media (max-width: 900px)`

---

## 🔧 Available Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

---

## 📝 Documentation Template Quick Reference

Every task should have a documentation file with this structure:

```markdown
# Task Name: [TASK-NAME]

## Status
- **Current Status**: [IN_PROGRESS | ✅ COMPLETED]
  - Files changed/updated: [list files]
  - Program run: [Success/Failure]
  - Bugs reported: [None/List issues]
- **Previous Task**: [PREVIOUS-TASK] - [STATUS]

## Detailed Steps
1. [ ] **Step 1**: Description
   - Files: [list]
   - Algorithm: [if applicable]

2. [ ] **Step 2**: Description

## Dependencies
- [ ] Install: [packages]
- [ ] Files to verify: [list]

## Verification
- [ ] Test command: `npm run dev`
- [ ] Check: [manual checks]

## Completion Criteria
- [ ] All checkboxes marked
- [ ] No errors on run
- [ ] Archive to [task-name].md in docs/

---
**Started**: [date]  
**Completed**: [date]
```

---

## 🚨 Important Reminders

1. **Always document FIRST** - Create the task documentation before starting implementation
2. **Follow existing patterns** - Look at similar components for guidance
3. **Test as you go** - Run `npm run dev` frequently to catch errors early
4. **Update docs immediately** - Don't wait until the next session to update documentation
5. **Be thorough** - Complete documentation helps future agents (and your future self!)

---

## 🤝 Collaboration Guidelines

- **Read before writing** - Always check existing code and documentation first
- **Maintain consistency** - Follow the established patterns and conventions
- **Communicate clearly** - If unsure about requirements, ask the user
- **Document completely** - Assume another agent will pick up where you left off
- **Respect the workflow** - The three-step process exists for good reason

---

## 📞 When in Doubt

If you're uncertain about:
- **Task requirements** → Ask the user for clarification
- **Code patterns** → Review existing components in `src/`
- **Documentation** → Check `docs/TASK_TEMPLATE.md` and completed examples
- **Project structure** → Review this README and the file tree

---

## ✅ Checklist for Every Task

- [ ] Read project structure and existing code
- [ ] Review documentation in `docs/` folder
- [ ] Create task documentation file in `docs/`
- [ ] Implement the solution following conventions
- [ ] Test with `npm run dev`
- [ ] Update task documentation with completion status
- [ ] Update `docs/TODO_HISTORY.md`
- [ ] Verify no build errors or warnings

---

**Remember**: Good documentation is a gift to your future self and other agents. Take the time to do it right!

**Happy coding! 🚀**