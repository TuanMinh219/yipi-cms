# 🤖 Professional AI Agent Workflow System

## A Universal Framework for AI-Assisted Development

This document provides a comprehensive, project-agnostic workflow system for AI agents working on software development tasks. It ensures consistency, proper documentation, and efficient collaboration across any codebase.

---

## 🎯 Overview

The AI Agent Workflow System is built on three core principles:

1. **Context First** - Always understand the project before making changes
2. **Document Driven** - Create documentation before, during, and after tasks
3. **Verifiable Results** - Test and confirm all changes

---

## 📋 The Three-Phase Workflow

### **Phase 1: DISCOVER & UNDERSTAND**

#### Step 1.1: Locate or Create Documentation Structure

**CRITICAL: If the documentation structure doesn't exist, you MUST create it before proceeding!**

1. **Locate the documentation folder**
   - Look for a `docs/` or `documentation/` folder in the project root
   - **If NOT found, CREATE it**: `mkdir docs` or create the folder manually

2. **Check for required template files**
   - Look for `TASK_TEMPLATE.md` (or similar task template)
   - Look for `TODO_HISTORY.md` (or similar task history file)
   - **If NOT found, CREATE them** using the templates provided in this guide

3. **Create the documentation structure if missing**:
   ```bash
   # Create docs folder if it doesn't exist
   mkdir docs

   # Create TASK_TEMPLATE.md
   # Copy the template from this guide into docs/TASK_TEMPLATE.md

   # Create TODO_HISTORY.md
   # Copy the template from this guide into docs/TODO_HISTORY.md

   # Create README.md for the docs folder
   # Add a brief overview of the documentation structure
   ```

4. **Read ALL documentation files**
   - Read every file in the documentation directory
   - Identify:
     - Project purpose and goals
     - Architecture decisions
     - Coding standards and conventions
     - Completed, in-progress, and pending tasks

5. **Understand the documentation system**
   - Find the task template (usually `TASK_TEMPLATE.md` or similar)
   - Review the task history (usually `TODO_HISTORY.md` or similar)
   - Examine completed task examples to understand expectations

6. **Identify project-specific patterns**
   - Note naming conventions
   - Understand file organization
   - Recognize architectural patterns (MVC, atomic design, etc.)

7. **Respond to the user**
   - After reading all documentation files, simply reply: **"I'm ready, let's go"**
   - If you need more specific configurations or have questions about the project, ask the user for clarification before proceeding

#### Step 1.2: Explore Project Structure

1. **Map the codebase**
   - List top-level directories
   - Identify source code locations (`src/`, `lib/`, `app/`, etc.)
   - Locate configuration files
   - Find test directories

2. **Review key files**
   - Entry points (e.g., `index.js`, `main.js`, `app.js`)
   - Configuration files (e.g., `package.json`, `webpack.config.js`)
   - Main application components

3. **Understand dependencies**
   - Review package manager files (`package.json`, `requirements.txt`, etc.)
   - Identify key libraries and frameworks
   - Note any version constraints

#### Step 1.3: Clarify Requirements

1. **Confirm task scope**
   - Ask clarifying questions if requirements are unclear
   - Identify acceptance criteria
   - Determine if the task is well-defined

2. **Assess complexity**
   - Break down large tasks into smaller steps
   - Identify potential challenges
   - Plan the implementation approach

---

### **Phase 2: PLAN & EXECUTE**

#### Step 2.1: Create Task Documentation

Before writing any code, create a task documentation file:

1. **Create a new file** in the documentation directory
   - Naming: `[task-name].md` or `TASK-[number]-[description].md`
   - Use the project's task template as a guide

2. **Document the plan**:
   ```markdown
   # Task: [Task Name]
   
   ## Status: IN_PROGRESS
   
   ## Objective
   [Clear description of what needs to be accomplished]
   
   ## Approach
   [High-level strategy for implementation]
   
   ## Files to Modify/Create
   - [ ] File 1: [path and purpose]
   - [ ] File 2: [path and purpose]
   
   ## Implementation Steps
   1. [ ] Step 1: [description]
   2. [ ] Step 2: [description]
   3. [ ] Step 3: [description]
   
   ## Dependencies
   - [List any packages, files, or tasks this depends on]
   
   ## Testing Strategy
   - [How will you verify the implementation?]
   
   ## Risks & Mitigations
   - [Potential issues and how to address them]
   ```

#### Step 2.2: Implement the Solution

1. **Follow established patterns**
   - Match existing code style
   - Use project conventions
   - Maintain consistency with the codebase

2. **Write clean, maintainable code**
   - Use meaningful variable/function names
   - Add comments for complex logic
   - Keep functions focused and small

3. **Make incremental changes**
   - Commit or save work frequently
   - Test after each significant change
   - Be prepared to rollback if needed

#### Step 2.3: Test Thoroughly

1. **Run existing tests**
   - Execute the project's test suite
   - Verify no regressions were introduced

2. **Add new tests if needed**
   - Write tests for new functionality
   - Ensure edge cases are covered

3. **Manual verification**
   - Run the application
   - Test the specific feature/task
   - Check for visual or functional issues

---

### **Phase 3: DOCUMENT & CLOSE**

#### Step 3.1: Update Task Documentation

1. **Mark completion in task file**:
   ```markdown
   ## Status: ✅ COMPLETED
   
   ## Implementation Summary
   [Brief description of what was implemented]
   
   ## Files Modified
   - [List all files changed]
   
   ## Testing Results
   - [Summary of test outcomes]
   
   ## Notes for Future Reference
   - [Any important information for other agents]
   
   ## Completed: [Date]
   ```

2. **Update the task history**
   - Append entry to `TODO_HISTORY.md` or equivalent
   - Include task name, date, and brief description
   - Note any follow-up tasks or considerations

#### Step 3.2: Final Verification

1. **Run full test suite**
   - Ensure all tests pass
   - Check for any warnings or errors

2. **Build/compile the project**
   - Verify successful build
   - Check for any build warnings

3. **Review changes**
   - Confirm all requirements are met
   - Ensure code quality standards are maintained
   - Verify documentation is complete

#### Step 3.3: Archive and Communicate

1. **Ensure all documentation is updated**
   - Task file is complete
   - History is updated
   - Any related documentation is current

2. **Communicate completion**
   - Notify the user/team
   - Provide a summary of changes
   - Highlight any important notes or next steps

---

## 📁 Standard Documentation Structure

A well-organized documentation folder should contain:

```
docs/
├── README.md                    # Documentation overview
├── TASK_TEMPLATE.md             # Template for new tasks
├── TODO_HISTORY.md              # Chronological record of all tasks
├── ARCHITECTURE.md              # System architecture documentation
├── CODING_STANDARDS.md          # Project-specific coding guidelines
├── [completed-task-1].md        # Individual task documentation
├── [completed-task-2].md
└── [in-progress-task].md        # Current work in progress
```

---

## 📝 Template Files

**Important**: When setting up a new project, copy your existing template files from `docs/TASK_TEMPLATE.md` and `docs/TODO_HISTORY.md` into the workflow documentation, or use the templates below which are based on the proven format from successful projects.

### Task Template (`TASK_TEMPLATE.md`)

```markdown
# Task Template Format

## Task Name: [TASK-NAME]

## Status
- **Current Status**: [PENDING | IN_PROGRESS | COMPLETED]
  - Files changed/updated: [list specific files/directories modified]
  - Program run: [Successful/Failed - dev server status, e.g. `npm run dev` active]
  - Bugs reported: [None / list issues from logs/terminal]
- **Previous Task**: [PREVIOUS_TASK_NAME] - [STATUS]
  - Files changed/updated: [list specific files/directories modified]
  - Program run: [Successful/Failed - dev server status, e.g. `npm run dev` active]
  - Bugs reported: [None / list issues from logs/terminal]

## Detailed Steps
1. [ ] **Step 1**: [Description - files to read/create/edit, specific actions/algorithms]
   - Files: [list specific files]
   - Algorithm: [if applicable, describe logic/approach]

2. [ ] **Step 2**: [etc...]

## Dependencies
- [ ] Install: [list packages/commands]
- [ ] Files to verify: [list]

## Verification
- [ ] Test command: [npm test, npm run dev, etc.]
- [ ] Check: [manual checks]

## Completion Criteria
- [ ] All checkboxes marked
- [ ] No errors on run
- [ ] Archive to TASK-NAME.md in docs/

---
**Started**: [date]  
**Updated**: [date]
```

### Task History Template (`TODO_HISTORY.md`)

```markdown
# Task History

## Completed Tasks

### [Task Name] - [Date]
- **Agent**: [Agent name]
- **Files Modified**: [List key files]
- **Summary**: [Brief description of what was accomplished]
- **Status**: ✅ Completed

### [Task Name] - [Date]
- **Agent**: [Agent name]
- **Files Modified**: [List key files]
- **Summary**: [Brief description of what was accomplished]
- **Status**: ✅ Completed

## In-Progress Tasks

### [Task Name]
- **Agent**: [Agent name]
- **Started**: [Date]
- **Current Status**: [Brief status update]
- **Next Steps**: [What needs to be done next]

## Blocked Tasks

### [Task Name]
- **Agent**: [Agent name]
- **Blocked Since**: [Date]
- **Blocker**: [Description of what's blocking progress]
- **Resolution Needed**: [What's needed to unblock]

---
*Last Updated: [Date]*
```

---

## 🎯 Best Practices

### For AI Agents

1. **Always read documentation first**
   - Never skip the discovery phase
   - Understand before implementing

2. **Document as you go**
   - Create task documentation before starting
   - Update progress during implementation
   - Complete documentation when finished

3. **Follow existing patterns**
   - Match the project's coding style
   - Use established conventions
   - Maintain consistency

4. **Test thoroughly**
   - Run existing tests
   - Add new tests for new functionality
   - Verify manually when needed

5. **Communicate clearly**
   - Be specific in documentation
   - Note any assumptions made
   - Flag potential issues

### For Project Maintainers

1. **Maintain clear documentation**
   - Keep templates up-to-date
   - Ensure task history is current
   - Document architectural decisions

2. **Provide context**
   - Explain project goals
   - Document coding standards
   - Share relevant background information

3. **Review agent work**
   - Verify task completion
   - Provide feedback
   - Update documentation as needed

---

## 🔄 Continuous Improvement

This workflow system should evolve with your project:

1. **Gather feedback** from agents using the system
2. **Identify bottlenecks** or inefficiencies
3. **Update templates** and processes as needed
4. **Share improvements** with the team

---

## 📞 Support & Questions

If you're an AI agent working on this project and have questions:

1. **Check the documentation** - Most answers are in the docs folder
2. **Review completed tasks** - They show expected patterns
3. **Ask for clarification** - If requirements are unclear, ask the user
4. **Document your findings** - Help future agents by adding to the docs

---

## 🚀 Getting Started

To use this workflow system in your project:

1. **Create a `docs/` folder** (if not already present)
2. **Copy the template files** from this guide
3. **Create a project-specific READMEFIRST.md** (see below)
4. **Customize for your project** - Add project-specific details
5. **Start using the workflow** - Follow the three-phase process
6. **Iterate and improve** - Refine based on experience

---

## 📄 Creating a Project-Specific READMEFIRST.md

Every project should have a `READMEFIRST.md` file at the root level that provides project-specific workflow instructions. This file bridges the gap between the universal workflow system and your specific project.

### Purpose of READMEFIRST.md

The `READMEFIRST.md` file serves as:
- A quick-start guide for AI agents new to this specific project
- A reference for project-specific conventions and patterns
- A reminder of the workflow steps tailored to this codebase

### Template for READMEFIRST.md

```markdown
# 🚀 AI Agent Workflow Guide for [PROJECT NAME]

## Welcome, AI Agent!

This document outlines the standardized workflow for all AI agents working on the [PROJECT NAME] project. Following this process ensures consistency, proper documentation, and smooth collaboration.

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
1. List all files in `docs/` folder
2. Read **EVERY** file in the docs folder:
   - `docs/TODO_HISTORY.md` - See complete history of all tasks
   - `docs/TASK_TEMPLATE.md` - Understand documentation format
   - All completed task files
   - Any in-progress task files

3. **Only after reading all docs files**, proceed to:
   - Examine `src/` directory to understand the current architecture
   - Review existing components to follow established patterns
   - Check available libraries and utilities

4. **Understand the task requirements**
   - Clarify any ambiguities with the user before proceeding
   - Ensure you understand the expected outcome

### **Step 2: EXECUTE THE TASK**

1. **Create task documentation FIRST**
   - Create a new file in `docs/` folder: `docs/[task-name].md`
   - Use the template from `docs/TASK_TEMPLATE.md`
   - Fill in all required sections

2. **Implement the solution**
   - Follow existing code patterns and conventions
   - Use project's established libraries and utilities
   - Write clean, maintainable code

3. **Test your implementation**
   - Run `[test command]` to verify no build errors
   - Check that the component renders/works correctly
   - Ensure all tests pass

### **Step 3: UPDATE DOCUMENTATION (After Completing Task)**

1. **Update the task documentation**
   - Mark all checkboxes as completed
   - Change status to `✅ COMPLETED`
   - Add completion date
   - Note any issues encountered

2. **Update the history**
   - Append the completed task to `docs/TODO_HISTORY.md`

3. **Communicate completion**
   - Notify the user with a summary of changes

---

## 📁 Project Structure Overview

```
[PROJECT NAME]/
├── src/                    # Source code
│   ├── [specific folders]  # Project-specific structure
│   └── ...
├── docs/                   # Documentation folder
│   ├── TASK_TEMPLATE.md    # Template for task documentation
│   ├── TODO_HISTORY.md     # History of all completed tasks
│   └── [task-name].md      # Individual task documentation files
├── [other project files]
└── package.json            # Project dependencies
```

---

## 🎯 Key Conventions to Follow

### **Code Style**
- [Project-specific coding conventions]
- [Naming conventions]
- [File organization patterns]

### **Import Patterns**
```javascript
// Example import patterns for this project
import { Component } from '[path]';
```

### **Testing**
- [Testing framework used]
- [How to run tests]
- [Testing conventions]

---

## 🔧 Available Commands

```bash
[command]      # [description]
[command]      # [description]
```

---

## 🚨 Important Reminders

1. **Always document FIRST** - Create task documentation before starting implementation
2. **Follow existing patterns** - Look at similar components for guidance
3. **Test as you go** - Run tests frequently to catch errors early
4. **Update docs immediately** - Don't wait to update documentation
5. **Be thorough** - Complete documentation helps future agents

---

## ✅ Checklist for Every Task

- [ ] Read ALL files in docs/ folder
- [ ] Review project structure and existing code
- [ ] Create task documentation file in docs/
- [ ] Implement the solution following conventions
- [ ] Test with [test command]
- [ ] Update task documentation with completion status
- [ ] Update docs/TODO_HISTORY.md
- [ ] Verify no build errors or warnings

---

**Remember**: Good documentation is a gift to your future self and other agents!

**Happy coding! 🚀**
```

### Customization Tips

When creating your project's `READMEFIRST.md`:

1. **Replace bracketed placeholders** with project-specific information
2. **Add actual project structure** showing real folder names
3. **Include real commands** that work in your project
4. **Document actual conventions** used in your codebase
5. **Reference real examples** from your completed tasks

---

---

**Remember**: Good documentation and clear processes make AI-assisted development faster, more reliable, and more collaborative.

**Version**: 1.0.0  
**Last Updated**: [Current Date]