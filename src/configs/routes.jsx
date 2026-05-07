import { Navigate } from 'react-router-dom'
import PATH from './paths/PATH'
import LegacyAdminRedirect from './LegacyAdminRedirect'
import MainLayout from '@/layouts/MainLayout'
import ProtectedLogin from '@/features/Auth/ProtectedLogin'
import ProtectedRoute from '@/components/common/ProtectedRoute'
import Dashboard from '@/pages/Dashboard'
import UserLayout from '@/user/layouts/UserLayout'
import UserDashboard from '@/user/pages/Dashboard'
import ReadingPractice from '@/user/pages/Reading'
import ListeningPractice from '@/user/pages/Listening'
import WritingPractice from '@/user/pages/Writing'
import SpeakingPractice from '@/user/pages/Speaking'
import MockTests from '@/user/pages/MockTests'
import LearnerProgress from '@/user/pages/Progress'
import UserCourses from '@/user/pages/Courses'
import BandSamples from '@/user/pages/BandSamples'
import Courses from '@/pages/Content/Courses'
import Lessons from '@/pages/Content/Lessons'
import Vocabulary from '@/pages/Content/Vocabulary'
import Quizzes from '@/pages/Learning/Quizzes'
import Assignments from '@/pages/Learning/Assignments'
import Students from '@/pages/People/Students'
import Instructors from '@/pages/People/Instructors'
import Enrollments from '@/pages/People/Enrollments'
import Feedback from '@/pages/Community/Feedback'
import ContactMessages from '@/pages/Community/ContactMessages'
import ReportedComments from '@/pages/Community/ReportedComments'
import Payments from '@/pages/Commerce/Payments'
import EngagementReport from '@/pages/Reports/Engagement'
import RevenueReport from '@/pages/Reports/Revenue'
import HomepageBanner from '@/pages/Site/HomepageBanner'

const routes = [
  {
    path: PATH.USER.ROOT,
    element: (
      <ProtectedRoute allowedAccountTypes={['USER']}>
        <UserLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <UserDashboard />,
      },
      {
        path: 'reading',
        element: <ReadingPractice />,
      },
      {
        path: 'listening',
        element: <ListeningPractice />,
      },
      {
        path: 'writing',
        element: <WritingPractice />,
      },
      {
        path: 'speaking',
        element: <SpeakingPractice />,
      },
      {
        path: 'mock-tests',
        element: <MockTests />,
      },
      {
        path: 'progress',
        element: <LearnerProgress />,
      },
      {
        path: 'courses',
        element: <UserCourses />,
      },
      {
        path: 'band-8-samples',
        element: <BandSamples />,
      },
    ],
  },
  {
    path: PATH.HOME,
    element: (
      <ProtectedRoute allowedAccountTypes={['ADMIN', 'INSTRUCTOR']}>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: PATH.CONTENT.ROOT,
        element: <Navigate to={PATH.CONTENT.COURSES} replace />,
      },
      {
        path: PATH.CONTENT.COURSES,
        element: <Courses />,
      },
      {
        path: PATH.CONTENT.LESSONS,
        element: <Lessons />,
      },
      {
        path: PATH.CONTENT.VOCABULARY,
        element: <Vocabulary />,
      },
      {
        path: PATH.LEARNING.ROOT,
        element: <Navigate to={PATH.LEARNING.QUIZZES} replace />,
      },
      {
        path: PATH.LEARNING.QUIZZES,
        element: <Quizzes />,
      },
      {
        path: PATH.LEARNING.ASSIGNMENTS,
        element: <Assignments />,
      },
      {
        path: PATH.PEOPLE.ROOT,
        element: <Navigate to={PATH.PEOPLE.STUDENTS} replace />,
      },
      {
        path: PATH.PEOPLE.STUDENTS,
        element: <Students />,
      },
      {
        path: PATH.PEOPLE.INSTRUCTORS,
        element: <Instructors />,
      },
      {
        path: PATH.PEOPLE.ENROLLMENTS,
        element: <Enrollments />,
      },
      {
        path: PATH.COMMUNITY.ROOT,
        element: <Navigate to={PATH.COMMUNITY.FEEDBACK} replace />,
      },
      {
        path: PATH.COMMUNITY.FEEDBACK,
        element: <Feedback />,
      },
      {
        path: PATH.COMMUNITY.CONTACT_MESSAGES,
        element: <ContactMessages />,
      },
      {
        path: PATH.COMMUNITY.REPORTED_COMMENTS,
        element: <ReportedComments />,
      },
      {
        path: PATH.COMMERCE.ROOT,
        element: <Navigate to={PATH.COMMERCE.PAYMENTS} replace />,
      },
      {
        path: PATH.COMMERCE.PAYMENTS,
        element: <Payments />,
      },
      {
        path: PATH.REPORTS.ROOT,
        element: <Navigate to={PATH.REPORTS.ENGAGEMENT} replace />,
      },
      {
        path: PATH.REPORTS.ENGAGEMENT,
        element: <EngagementReport />,
      },
      {
        path: PATH.REPORTS.REVENUE,
        element: <RevenueReport />,
      },
      {
        path: PATH.SITE.ROOT,
        element: <Navigate to={PATH.SITE.HOMEPAGE_BANNER} replace />,
      },
      {
        path: PATH.SITE.HOMEPAGE_BANNER,
        element: <HomepageBanner />,
      },
    ],
  },
  {
    path: PATH.LOGIN,
    element: <ProtectedLogin />,
  },
  {
    path: '/admin/login',
    element: <Navigate to={PATH.LOGIN} replace />,
  },
  {
    path: '/admin',
    element: <Navigate to={PATH.HOME} replace />,
  },
  {
    path: '/admin/:section/*',
    element: <LegacyAdminRedirect />,
  },
  {
    path: '*',
    element: <Navigate to={PATH.HOME} replace />,
  },
]

export default routes
