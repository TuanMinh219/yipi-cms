import { Button, Drawer, Input, Progress, Rate, Select, Space, Table, Tabs, Tag } from 'antd'
import { ArrowRight, BookOpen, CheckCircle2, Search, Star, Users } from 'lucide-react'
import { useMemo, useState } from 'react'
import CourseCard from '../../Atoms/CourseCard'
import CourseStatBadge from '../../Atoms/CourseStatBadge'
import LessonRow from '../../Atoms/LessonRow'
import { courseCatalog, courseDetails, enrolledCourses } from '../../data/learnerData'
import './index.scss'

// ─── My Courses tab ─────────────────────────────────────────────────────────

function MyCourses({ onOpenDetail }) {
  const columns = [
    {
      title: 'Course',
      dataIndex: 'title',
      render: (value, record) => (
        <div className="course-table-title">
          <span className="course-table-initial" style={{ background: record.color }}>
            {value.slice(0, 1)}
          </span>
          <div>
            <strong>{value}</strong>
            <span className="course-table-meta">
              by {record.instructor} · {record.category}
            </span>
          </div>
        </div>
      ),
    },
    {
      title: 'Progress',
      dataIndex: 'progress',
      width: 220,
      render: (value, record) => (
        <div>
          <Progress
            percent={value}
            size="small"
            strokeColor={record.color}
            format={(pct) => `${pct}%`}
          />
          <span className="course-table-lesson-count">
            {record.completedLessons}/{record.totalLessons} lessons
          </span>
        </div>
      ),
    },
    {
      title: 'Next lesson',
      dataIndex: 'nextLesson',
      render: (value) => <Tag color="cyan">{value}</Tag>,
    },
    {
      title: 'Level',
      dataIndex: 'level',
      width: 100,
      render: (value) => <Tag color="blue">{value}</Tag>,
    },
    {
      title: 'Enrolled',
      dataIndex: 'enrolledAt',
      width: 130,
    },
    {
      title: 'Action',
      key: 'action',
      width: 140,
      render: (_, record) => (
        <Button type="primary" onClick={() => onOpenDetail(record)}>
          View course
          <ArrowRight size={14} />
        </Button>
      ),
    },
  ]

  return (
    <div className="user-panel">
      <Table
        columns={columns}
        dataSource={enrolledCourses}
        rowKey="id"
        pagination={false}
        scroll={{ x: 960 }}
      />
    </div>
  )
}

// ─── Browse tab ──────────────────────────────────────────────────────────────

function BrowseCatalog({ onOpenDetail }) {
  const [keyword, setKeyword] = useState('')
  const [category, setCategory] = useState()
  const [level, setLevel] = useState()

  const categories = useMemo(
    () =>
      [...new Set(courseCatalog.map((c) => c.category))].map((v) => ({
        label: v,
        value: v,
      })),
    [],
  )

  const levels = useMemo(
    () =>
      [...new Set(courseCatalog.map((c) => c.level))].map((v) => ({
        label: v,
        value: v,
      })),
    [],
  )

  const filtered = useMemo(() => {
    const kw = keyword.trim().toLowerCase()
    return courseCatalog.filter((c) => {
      const matchKw =
        !kw || c.title.toLowerCase().includes(kw) || c.instructor.toLowerCase().includes(kw)
      const matchCat = !category || c.category === category
      const matchLvl = !level || c.level === level
      return matchKw && matchCat && matchLvl
    })
  }, [keyword, category, level])

  return (
    <>
      <div className="user-panel">
        <div className="user-panel__body practice-filter">
          <Input
            value={keyword}
            prefix={<Search size={16} />}
            placeholder="Search courses or instructors…"
            onChange={(e) => setKeyword(e.target.value)}
          />
          <Select
            value={category}
            placeholder="Category"
            options={categories}
            allowClear
            onChange={setCategory}
          />
          <Select
            value={level}
            placeholder="Level"
            options={levels}
            allowClear
            onChange={setLevel}
          />
          <Space>
            <Button
              icon={<Search size={15} />}
              type="primary"
              onClick={() => {}}
            >
              Search
            </Button>
            <Button
              onClick={() => {
                setKeyword('')
                setCategory(undefined)
                setLevel(undefined)
              }}
            >
              Reset
            </Button>
          </Space>
        </div>
      </div>

      <div className="course-catalog-grid">
        {filtered.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onEnroll={() => {}}
            onOpen={() => onOpenDetail(course)}
          />
        ))}
        {filtered.length === 0 && (
          <p className="course-empty">No courses match your filters.</p>
        )}
      </div>
    </>
  )
}

// ─── Course Detail Drawer ────────────────────────────────────────────────────

function CourseDetailDrawer({ course, open, onClose }) {
  if (!course) return null

  const detail = courseDetails[course.id]
  const lessons = detail?.lessons ?? []
  const isFree = !course.price || course.price === 0

  return (
    <Drawer
      open={open}
      onClose={onClose}
      title={null}
      width={520}
      className="course-detail-drawer"
      destroyOnClose
    >
      {/* Header */}
      <div className="cdd-header" style={{ '--course-color': course.color }}>
        <div className="cdd-header__mark" aria-hidden>
          {course.title.slice(0, 1)}
        </div>
        <div className="cdd-header__info">
          <div className="cdd-header__tags">
            <Tag>{course.category}</Tag>
            <Tag color="blue">{course.level}</Tag>
            <Tag color={isFree ? 'green' : 'gold'}>
              {isFree ? 'Free' : `${course.price?.toLocaleString('vi-VN')} ₫`}
            </Tag>
          </div>
          <h2 className="cdd-header__title">{course.title}</h2>
          <p className="cdd-header__instructor">by {course.instructor}</p>
          <div className="cdd-header__stats">
            <CourseStatBadge
              icon={<BookOpen size={14} />}
              label={`${lessons.length} lessons`}
            />
            <CourseStatBadge
              icon={<Users size={14} />}
              label={`${course.students?.toLocaleString() ?? '—'} students`}
            />
            <span className="cdd-header__rating">
              <Rate disabled defaultValue={Math.round(course.rating ?? 0)} count={5} />
              <strong>{course.rating}</strong>
              <span>({course.ratingCount})</span>
            </span>
          </div>
        </div>
      </div>

      {/* Progress (only if enrolled) */}
      {course.progress !== undefined && (
        <div className="cdd-progress">
          <div className="user-section-title" style={{ marginBottom: 8 }}>
            <span>Your progress</span>
            <strong style={{ color: course.color }}>
              {course.completedLessons}/{lessons.length} lessons
            </strong>
          </div>
          <Progress
            percent={course.progress}
            strokeColor={course.color}
            trailColor="#eef2f6"
          />
        </div>
      )}

      {/* Lesson list */}
      <div className="cdd-lessons">
        <div className="user-section-title cdd-lessons__header">
          <h3>Lesson list</h3>
          <span>
            <CheckCircle2 size={14} style={{ marginRight: 4 }} />
            {lessons.filter((l) => l.completed).length} completed
          </span>
        </div>
        <div className="cdd-lessons__list">
          {lessons.map((lesson, i) => (
            <LessonRow key={lesson.id} lesson={lesson} index={i} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="cdd-footer">
        {course.enrolled !== false ? (
          <Button type="primary" size="large" block>
            Continue learning
            <ArrowRight size={15} />
          </Button>
        ) : (
          <Button type="primary" size="large" block>
            {isFree ? 'Enroll for free' : 'Enroll now'}
            <ArrowRight size={15} />
          </Button>
        )}
      </div>
    </Drawer>
  )
}

// ─── Page root ───────────────────────────────────────────────────────────────

export default function UserCourses() {
  const [drawerCourse, setDrawerCourse] = useState(null)
  const [drawerOpen, setDrawerOpen] = useState(false)

  const openDetail = (course) => {
    setDrawerCourse(course)
    setDrawerOpen(true)
  }

  const closeDetail = () => setDrawerOpen(false)

  const totalLessons = enrolledCourses.reduce((s, c) => s + c.totalLessons, 0)
  const doneLessons = enrolledCourses.reduce((s, c) => s + c.completedLessons, 0)
  const avgProgress = Math.round(
    enrolledCourses.reduce((s, c) => s + c.progress, 0) / enrolledCourses.length,
  )

  const summaryStats = [
    { label: 'Enrolled', value: enrolledCourses.length, icon: <BookOpen size={18} /> },
    { label: 'Lessons done', value: `${doneLessons}/${totalLessons}`, icon: <CheckCircle2 size={18} /> },
    { label: 'Avg. progress', value: `${avgProgress}%`, icon: <Star size={18} /> },
    { label: 'Instructors', value: [...new Set(enrolledCourses.map((c) => c.instructor))].length, icon: <Users size={18} /> },
  ]

  const tabItems = [
    {
      key: 'my',
      label: `My Courses (${enrolledCourses.length})`,
      children: <MyCourses onOpenDetail={openDetail} />,
    },
    {
      key: 'browse',
      label: `Browse Catalog (${courseCatalog.length})`,
      children: <BrowseCatalog onOpenDetail={openDetail} />,
    },
  ]

  return (
    <section className="user-page">
      {/* Page header */}
      <div className="user-page-header">
        <div>
          <h1>Courses</h1>
          <p>Track enrolled courses, browse the full catalog, and dive into individual lesson lists.</p>
        </div>
      </div>

      {/* Summary stat strip */}
      <div className="course-summary-strip">
        {summaryStats.map((s) => (
          <div className="course-summary-stat" key={s.label}>
            <span className="course-summary-stat__icon">{s.icon}</span>
            <div>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <Tabs items={tabItems} className="course-tabs" />

      {/* Detail Drawer */}
      <CourseDetailDrawer
        course={drawerCourse}
        open={drawerOpen}
        onClose={closeDetail}
      />
    </section>
  )
}
