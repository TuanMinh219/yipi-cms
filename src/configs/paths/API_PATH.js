const API_PATH = {
  AUTH: {
    LOGIN: '/api/auth/login',
    REGISTER: '/api/auth/register',
    RESOLVE: '/api/auth/resolve',
    LOGOUT: '/api/auth/logout',
    REFRESH: '/api/auth/refresh-token',
  },
  CONTENT: {
    COURSES: '/learning/courses',
    LESSONS: '/learning/lessons',
    VOCABULARY: '/learning/vocabulary',
  },
  LEARNING: {
    QUIZZES: '/learning/quizzes',
    ASSIGNMENTS: '/learning/assignments',
    ENROLLMENTS: '/learning/enrollments',
  },
  PEOPLE: {
    STUDENTS: '/users/students',
    INSTRUCTORS: '/users/instructors',
  },
  COMMUNITY: {
    FEEDBACK: '/community/feedback',
    CONTACT_MESSAGES: '/community/contact-messages',
    REPORTED_COMMENTS: '/community/reported-comments',
  },
  COMMERCE: {
    PAYMENTS: '/billing/payments',
  },
  REPORTS: {
    ENGAGEMENT: '/reports/engagement',
    REVENUE: '/reports/revenue',
  },
  SITE: {
    HOMEPAGE_BANNER: '/site/homepage-banner',
  },
}

export default API_PATH
