# Task: Course Management Site (User Side)

## Status: ✅ COMPLETED

## Objective
Build a rich, multi-tab Course Management page at `src/user/pages/Courses/` following the yipi-cms atomic design pattern. The page covers:
- **My Courses** tab — enrolled courses with progress, mentor, next lesson, and a per-course lesson list drawer
- **Browse** tab — full course catalog with filters, ratings, enroll CTA
- Atoms: `CourseCard`, `LessonRow`, `CourseStatBadge` added to `src/user/Atoms/`

## Approach
Follow existing patterns: `<section class="user-page">`, `user-panel`, `user-page-header`, Ant Design Table/Tag/Button/Progress, lucide-react icons, data in `learnerData.js`.

## Files to Modify / Create
- [x] `src/user/data/learnerData.js` — add `courseCatalog`, `courseDetail` data
- [x] `src/user/Atoms/CourseCard.jsx` — catalog card atom
- [x] `src/user/Atoms/LessonRow.jsx` — lesson row atom for detail drawer
- [x] `src/user/Atoms/CourseStatBadge.jsx` — inline stat badge atom
- [x] `src/user/pages/Courses/index.jsx` — full page rebuild (tabs)
- [x] `src/user/pages/Courses/index.scss` — styles

## Dependencies
- antd (Table, Tabs, Tag, Button, Progress, Drawer, Rate, Badge)
- lucide-react icons
- existing learnerData.js, PATH.js

## Completed: 2026-05-09
