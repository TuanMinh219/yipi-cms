# Task Name: build-admin-appsider-ui-and-controller

## Status
- **Current Status**: IN_PROGRESS
  - Files changed/updated: TBD
  - Program run: TBD
  - Bugs reported: None
- **Previous Task**: None

## Detailed Steps
1. [ ] Review existing admin layout/nav usage
   - Files: src/App.jsx, src/admin/routes/AdminRoutes.jsx, src/admin/pages/AdminSection/index.jsx, src/admin/pages/AdminHomepage/index.jsx
   - Algorithm: identify current navigation + layout wrapper

2. [ ] Create documentation for AppSider component
   - Files: TBD

3. [ ] Implement `AppSider` component (sidebar)
   - Files to create: src/common/Atoms/AppSider/AppSider.jsx, src/common/Atoms/AppSider/AppSider.css

4. [ ] Implement app controller
   - Files to create: src/common/hooks/useAppController.js (or similar)

5. [ ] Wire sidebar into admin pages/routes
   - Files: src/admin/pages/AdminSection/index.jsx (and possibly AdminHomepage)

6. [ ] Match UI style to youpass.vn
   - Files: AppSider.css + admin layout CSS overrides

7. [ ] Verification
   - [ ] Test command: `npm run dev`
   - [ ] Check: sidebar renders, active state works, responsive

## Dependencies
- [ ] Install: None
- [ ] Files to verify: menu item mapping

## Completion Criteria
- [ ] All checkboxes marked
- [ ] No errors on `npm run dev`
- [ ] Archive to docs/build-admin-appsider-ui-and-controller.md (this file)

---
**Started**: 2026-05-07
**Updated**: 2026-05-07

