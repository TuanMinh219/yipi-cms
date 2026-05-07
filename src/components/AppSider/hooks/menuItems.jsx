import {
  BarChart3,
  BookOpen,
  CreditCard,
  FileQuestion,
  Flag,
  GraduationCap,
  Home,
  Image,
  Layers3,
  MessageSquareText,
  NotebookTabs,
  PenLine,
  School,
  Settings2,
  Users,
} from 'lucide-react'
import PATH from '@/configs/paths/PATH'
import { ROLE_ACCOUNT } from '@/constants/constants'

const iconProps = { size: 17, strokeWidth: 2 }

const getMenuItems = (t, roleUser = ROLE_ACCOUNT.ADMIN) => {
  const allItems = [
    {
      key: 'home',
      label: t('menu.home'),
      path: PATH.HOME,
      icon: <Home {...iconProps} />,
    },
    {
      key: 'content',
      label: t('menu.content'),
      icon: <BookOpen {...iconProps} />,
      children: [
        {
          key: 'courses',
          label: t('menu.courses'),
          path: PATH.CONTENT.COURSES,
        },
        {
          key: 'lessons',
          label: t('menu.lessons'),
          path: PATH.CONTENT.LESSONS,
        },
        {
          key: 'vocabulary',
          label: t('menu.vocabulary'),
          path: PATH.CONTENT.VOCABULARY,
        },
      ],
    },
    {
      key: 'learning',
      label: t('menu.learning'),
      icon: <GraduationCap {...iconProps} />,
      children: [
        {
          key: 'quizzes',
          label: t('menu.quizzes'),
          path: PATH.LEARNING.QUIZZES,
        },
        {
          key: 'assignments',
          label: t('menu.assignments'),
          path: PATH.LEARNING.ASSIGNMENTS,
        },
      ],
    },
    {
      key: 'people',
      label: t('menu.people'),
      icon: <Users {...iconProps} />,
      children: [
        {
          key: 'students',
          label: t('menu.students'),
          path: PATH.PEOPLE.STUDENTS,
        },
        {
          key: 'instructors',
          label: t('menu.instructors'),
          path: PATH.PEOPLE.INSTRUCTORS,
        },
        {
          key: 'enrollments',
          label: t('menu.enrollments'),
          path: PATH.PEOPLE.ENROLLMENTS,
        },
      ],
    },
    {
      key: 'community',
      label: t('menu.community'),
      icon: <MessageSquareText {...iconProps} />,
      roles: [ROLE_ACCOUNT.ADMIN, ROLE_ACCOUNT.SUPPORT],
      children: [
        {
          key: 'feedback',
          label: t('menu.feedback'),
          path: PATH.COMMUNITY.FEEDBACK,
        },
        {
          key: 'contact_messages',
          label: t('menu.contact_messages'),
          path: PATH.COMMUNITY.CONTACT_MESSAGES,
        },
        {
          key: 'reported_comments',
          label: t('menu.reported_comments'),
          path: PATH.COMMUNITY.REPORTED_COMMENTS,
        },
      ],
    },
    {
      key: 'commerce',
      label: t('menu.commerce'),
      icon: <CreditCard {...iconProps} />,
      children: [
        {
          key: 'payments',
          label: t('menu.payments'),
          path: PATH.COMMERCE.PAYMENTS,
        },
      ],
    },
    {
      key: 'reports',
      label: t('menu.reports'),
      icon: <BarChart3 {...iconProps} />,
      children: [
        {
          key: 'engagement_report',
          label: t('menu.engagement_report'),
          path: PATH.REPORTS.ENGAGEMENT,
        },
        {
          key: 'revenue_report',
          label: t('menu.revenue_report'),
          path: PATH.REPORTS.REVENUE,
        },
      ],
    },
    {
      key: 'site',
      label: t('menu.site'),
      icon: <Settings2 {...iconProps} />,
      children: [
        {
          key: 'homepage_banner',
          label: t('menu.homepage_banner'),
          path: PATH.SITE.HOMEPAGE_BANNER,
          icon: <Image {...iconProps} />,
        },
      ],
    },
  ]

  const filterByRole = (items) =>
    items
      .filter((item) => !item.roles || item.roles.includes(roleUser))
      .map((item) => ({
        ...item,
        children: item.children ? filterByRole(item.children) : undefined,
      }))

  return filterByRole(allItems)
}

export const menuIconCatalog = {
  courses: <NotebookTabs {...iconProps} />,
  lessons: <Layers3 {...iconProps} />,
  quizzes: <FileQuestion {...iconProps} />,
  assignments: <PenLine {...iconProps} />,
  reports: <Flag {...iconProps} />,
  school: <School {...iconProps} />,
}

export default getMenuItems
