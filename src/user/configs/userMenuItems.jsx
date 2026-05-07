import {
  BarChart3,
  BookOpen,
  FileText,
  Headphones,
  Home,
  LibraryBig,
  Mic,
  PenLine,
  Rows3,
  Trophy,
} from 'lucide-react'
import { NavLink } from 'react-router-dom'
import PATH from '@/configs/paths/PATH'

const iconProps = { size: 17, strokeWidth: 2 }

const label = (path, text) => (
  <NavLink to={path}>
    <span>{text}</span>
  </NavLink>
)

const userMenuItems = [
  {
    key: 'dashboard',
    label: label(PATH.USER.DASHBOARD, 'Home'),
    path: PATH.USER.DASHBOARD,
    icon: <Home {...iconProps} />,
  },
  {
    key: 'practice',
    label: 'Practice',
    icon: <Rows3 {...iconProps} />,
    children: [
      {
        key: 'reading',
        label: label(PATH.USER.READING, 'Reading'),
        path: PATH.USER.READING,
        icon: <BookOpen {...iconProps} />,
      },
      {
        key: 'listening',
        label: label(PATH.USER.LISTENING, 'Listening'),
        path: PATH.USER.LISTENING,
        icon: <Headphones {...iconProps} />,
      },
      {
        key: 'writing',
        label: label(PATH.USER.WRITING, 'Writing'),
        path: PATH.USER.WRITING,
        icon: <PenLine {...iconProps} />,
      },
      {
        key: 'speaking',
        label: label(PATH.USER.SPEAKING, 'Speaking'),
        path: PATH.USER.SPEAKING,
        icon: <Mic {...iconProps} />,
      },
    ],
  },
  {
    key: 'library',
    label: 'Library',
    icon: <LibraryBig {...iconProps} />,
    children: [
      {
        key: 'mock-tests',
        label: label(PATH.USER.MOCK_TESTS, 'Mock Tests'),
        path: PATH.USER.MOCK_TESTS,
        icon: <FileText {...iconProps} />,
      },
      {
        key: 'band-samples',
        label: label(PATH.USER.BAND_SAMPLES, 'Band 8.0+'),
        path: PATH.USER.BAND_SAMPLES,
        icon: <Trophy {...iconProps} />,
      },
      {
        key: 'courses',
        label: label(PATH.USER.COURSES, 'My Courses'),
        path: PATH.USER.COURSES,
        icon: <BookOpen {...iconProps} />,
      },
    ],
  },
  {
    key: 'progress',
    label: label(PATH.USER.PROGRESS, 'Progress'),
    path: PATH.USER.PROGRESS,
    icon: <BarChart3 {...iconProps} />,
  },
]

export default userMenuItems
