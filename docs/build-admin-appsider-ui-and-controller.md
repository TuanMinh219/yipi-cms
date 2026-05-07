# Task Name: build-admin-appsider-ui-and-controller

## Status
- **Current Status**: IN_PROGRESS
  - Files changed/updated:
    - src/common/hooks/useAppController.js
    - src/common/Atoms/AppSider/AppSider.jsx
    - src/common/Atoms/AppSider/AppSider.css
    - src/common/Atoms/index.js
    - src/admin/pages/AdminSection/index.jsx
    - src/admin/pages/AdminSection/index.css
  - Program run: `vite` dev server already running; `vite build` succeeded
  - Bugs reported: ESLint has pre-existing errors in other files

## Detailed Steps
1. [x] Review existing admin layout/nav usage
   - Files: src/App.jsx, src/admin/routes/AdminRoutes.jsx, src/admin/pages/AdminSection/index.jsx
2. [x] Create `AppSider` + CSS
   - Files: src/common/Atoms/AppSider/AppSider.jsx, src/common/Atoms/AppSider/AppSider.css
3. [x] Implement app controller hook
   - Files: src/common/hooks/useAppController.js
4. [x] Wire sidebar into admin section
   - Files: src/admin/pages/AdminSection/index.jsx
5. [x] Add layout CSS wrapper for sidebar + content
   - Files: src/admin/pages/AdminSection/index.css
6. [ ] Match UI style to youpass.vn (exact polish)
7. [ ] Verification: manual check in browser (active menu + responsive)

## Dependencies
- None

## Verification
- [x] Test command: `npm run build` (succeeded)
- [ ] Check: run `npm run dev` and confirm sidebar rendering/interaction

## Completion Criteria
- [ ] All checkboxes marked
- [ ] No errors on run (eslint may still report pre-existing issues)
- [ ] Archive to this task file (this file)

---
**Started**: 2026-05-07
**Updated**: 2026-05-07

