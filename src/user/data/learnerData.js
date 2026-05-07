export const learnerStats = [
  { label: 'Study streak', value: '12 days', detail: '+3 from last week' },
  { label: 'Completed tasks', value: '186', detail: 'Reading leads today' },
  { label: 'Estimated band', value: '6.5', detail: 'Target 7.0' },
  { label: 'Practice time', value: '42h', detail: 'This month' },
]

export const skillCards = [
  {
    key: 'reading',
    title: 'Reading',
    subtitle: 'Passage sets with answer explanations',
    color: '#0f9f8f',
    progress: 72,
    route: '/learn/reading',
  },
  {
    key: 'listening',
    title: 'Listening',
    subtitle: 'Audio drills, transcripts, and review notes',
    color: '#2563eb',
    progress: 64,
    route: '/learn/listening',
  },
  {
    key: 'writing',
    title: 'Writing',
    subtitle: 'Task 1 and Task 2 practice library',
    color: '#f59f00',
    progress: 58,
    route: '/learn/writing',
  },
  {
    key: 'speaking',
    title: 'Speaking',
    subtitle: 'Cue cards, part drills, and recordings',
    color: '#7c3aed',
    progress: 61,
    route: '/learn/speaking',
  },
]

export const practiceSets = {
  reading: {
    title: 'Reading Practice',
    subtitle: 'IELTS reading passages with timed mode and detailed corrections.',
    accent: '#0f9f8f',
    rows: [
      {
        id: 1,
        title: 'The Future of Urban Farming',
        type: 'Academic Passage',
        level: 'B2',
        questions: 13,
        duration: '20 min',
        status: 'Ready',
      },
      {
        id: 2,
        title: 'A History of Tea Trade',
        type: 'Matching Headings',
        level: 'B1-B2',
        questions: 14,
        duration: '22 min',
        status: 'In Progress',
      },
      {
        id: 3,
        title: 'Ocean Noise Pollution',
        type: 'True False Not Given',
        level: 'C1',
        questions: 12,
        duration: '18 min',
        status: 'Reviewed',
      },
    ],
  },
  listening: {
    title: 'Listening Practice',
    subtitle: 'Section-based listening drills with audio, transcript, and score history.',
    accent: '#2563eb',
    rows: [
      {
        id: 1,
        title: 'Campus Accommodation',
        type: 'Section 1',
        level: 'B1',
        questions: 10,
        duration: '12 min',
        status: 'Ready',
      },
      {
        id: 2,
        title: 'Museum Tour',
        type: 'Map Labelling',
        level: 'B2',
        questions: 10,
        duration: '14 min',
        status: 'Reviewed',
      },
      {
        id: 3,
        title: 'Renewable Energy Lecture',
        type: 'Section 4',
        level: 'C1',
        questions: 10,
        duration: '16 min',
        status: 'Ready',
      },
    ],
  },
  writing: {
    title: 'Writing Practice',
    subtitle: 'Task prompts, planning notes, and instructor-ready submissions.',
    accent: '#f59f00',
    rows: [
      {
        id: 1,
        title: 'Line Graph: Transport Use',
        type: 'Task 1',
        level: 'B1-B2',
        questions: 1,
        duration: '20 min',
        status: 'Draft',
      },
      {
        id: 2,
        title: 'Education Funding Opinion',
        type: 'Task 2',
        level: 'B2',
        questions: 1,
        duration: '40 min',
        status: 'Submitted',
      },
      {
        id: 3,
        title: 'Process Diagram: Recycling',
        type: 'Task 1',
        level: 'B2-C1',
        questions: 1,
        duration: '20 min',
        status: 'Ready',
      },
    ],
  },
  speaking: {
    title: 'Speaking Practice',
    subtitle: 'Part 1 warmups, Part 2 cue cards, and Part 3 discussion prompts.',
    accent: '#7c3aed',
    rows: [
      {
        id: 1,
        title: 'Hometown and Daily Routine',
        type: 'Part 1',
        level: 'B1',
        questions: 12,
        duration: '8 min',
        status: 'Ready',
      },
      {
        id: 2,
        title: 'Describe a Useful Website',
        type: 'Part 2',
        level: 'B2',
        questions: 1,
        duration: '4 min',
        status: 'Recorded',
      },
      {
        id: 3,
        title: 'Technology and Education',
        type: 'Part 3',
        level: 'C1',
        questions: 8,
        duration: '10 min',
        status: 'Ready',
      },
    ],
  },
}

export const mockTests = [
  {
    id: 1,
    title: 'IELTS Academic Mock Test 01',
    modules: 'Reading, Listening, Writing',
    duration: '2h 40m',
    score: '6.5',
    status: 'Resume',
  },
  {
    id: 2,
    title: 'IELTS Academic Mock Test 02',
    modules: 'Reading, Listening',
    duration: '1h 20m',
    score: '-',
    status: 'Start',
  },
  {
    id: 3,
    title: 'IELTS General Training Drill',
    modules: 'Reading, Writing',
    duration: '1h 30m',
    score: '7.0',
    status: 'Review',
  },
]

export const bandSamples = [
  {
    id: 1,
    title: 'Task 2: Technology and Social Life',
    skill: 'Writing',
    band: '8.0',
    tags: 'Coherence, lexical range',
  },
  {
    id: 2,
    title: 'Speaking Part 2: A Memorable Trip',
    skill: 'Speaking',
    band: '8.0+',
    tags: 'Fluency, development',
  },
  {
    id: 3,
    title: 'Task 1: Mixed Chart Overview',
    skill: 'Writing',
    band: '8.5',
    tags: 'Overview, comparison',
  },
]

export const myCourses = [
  {
    id: 1,
    title: 'IELTS Speaking Foundations',
    mentor: 'Anna Smith',
    progress: 78,
    nextLesson: 'Part 2 story framework',
  },
  {
    id: 2,
    title: 'Reading Strategy Sprint',
    mentor: 'David Tran',
    progress: 54,
    nextLesson: 'Matching information',
  },
  {
    id: 3,
    title: 'Writing Task 2 Builder',
    mentor: 'Maya Le',
    progress: 39,
    nextLesson: 'Opinion essay body paragraphs',
  },
]

export const progressRows = [
  { id: 1, skill: 'Reading', best: '7.0', latest: '6.5', tasks: 48, accuracy: '78%' },
  { id: 2, skill: 'Listening', best: '6.5', latest: '6.5', tasks: 36, accuracy: '74%' },
  { id: 3, skill: 'Writing', best: '6.0', latest: '6.0', tasks: 18, accuracy: 'Mentor review' },
  { id: 4, skill: 'Speaking', best: '6.5', latest: '6.0', tasks: 22, accuracy: 'Mentor review' },
]
