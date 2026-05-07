const PATH = {
  HOME: '/',
  LOGIN: '/login',
  CONTENT: {
    ROOT: '/content',
    COURSES: '/content/courses',
    LESSONS: '/content/lessons',
    VOCABULARY: '/content/vocabulary',
  },
  LEARNING: {
    ROOT: '/learning',
    QUIZZES: '/learning/quizzes',
    ASSIGNMENTS: '/learning/assignments',
  },
  PEOPLE: {
    ROOT: '/people',
    STUDENTS: '/people/students',
    INSTRUCTORS: '/people/instructors',
    ENROLLMENTS: '/people/enrollments',
  },
  COMMUNITY: {
    ROOT: '/community',
    FEEDBACK: '/community/feedback',
    CONTACT_MESSAGES: '/community/contact-messages',
    REPORTED_COMMENTS: '/community/reported-comments',
  },
  COMMERCE: {
    ROOT: '/commerce',
    PAYMENTS: '/commerce/payments',
  },
  REPORTS: {
    ROOT: '/reports',
    ENGAGEMENT: '/reports/engagement',
    REVENUE: '/reports/revenue',
  },
  SITE: {
    ROOT: '/site',
    HOMEPAGE_BANNER: '/site/homepage-banner',
  },
  USER: {
    ROOT: '/learn',
    DASHBOARD: '/learn',
    READING: '/learn/reading',
    LISTENING: '/learn/listening',
    WRITING: '/learn/writing',
    SPEAKING: '/learn/speaking',
    MOCK_TESTS: '/learn/mock-tests',
    PROGRESS: '/learn/progress',
    COURSES: '/learn/courses',
    BAND_SAMPLES: '/learn/band-8-samples',
  },
}

export const LEGACY_SECTION_REDIRECTS = {
  dashboard: PATH.HOME,
  banner: PATH.SITE.HOMEPAGE_BANNER,
  courses: PATH.CONTENT.COURSES,
  lessons: PATH.CONTENT.LESSONS,
  vocabulary: PATH.CONTENT.VOCABULARY,
  quizzes: PATH.LEARNING.QUIZZES,
  assignments: PATH.LEARNING.ASSIGNMENTS,
  users: PATH.PEOPLE.STUDENTS,
  students: PATH.PEOPLE.STUDENTS,
  instructors: PATH.PEOPLE.INSTRUCTORS,
  userCourses: PATH.PEOPLE.ENROLLMENTS,
  enrollments: PATH.PEOPLE.ENROLLMENTS,
  contacts: PATH.COMMUNITY.CONTACT_MESSAGES,
  reply: PATH.COMMUNITY.CONTACT_MESSAGES,
  feedbacks: PATH.COMMUNITY.FEEDBACK,
  reported: PATH.COMMUNITY.REPORTED_COMMENTS,
  payments: PATH.COMMERCE.PAYMENTS,
  reports: PATH.REPORTS.ENGAGEMENT,
}

export default PATH
