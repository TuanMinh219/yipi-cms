import { Button, Rate, Tag } from 'antd'
import { ArrowRight, BookOpen, Users } from 'lucide-react'
import CourseStatBadge from './CourseStatBadge'

/**
 * CourseCard
 * Atom — grid card for the course catalog browse view.
 * Props:
 *   course   — catalog course object
 *   onEnroll — callback (course) => void
 *   onOpen   — callback (course) => void  (for enrolled courses)
 */
export default function CourseCard({ course, onEnroll, onOpen }) {
  const isFree = !course.price || course.price === 0

  return (
    <article className="course-card" style={{ '--course-color': course.color }}>
      {/* Thumbnail strip */}
      <div className="course-card__thumb">
        <span className="course-card__initial" aria-hidden>
          {course.title.slice(0, 1)}
        </span>
        <Tag
          color={isFree ? 'green' : 'gold'}
          className="course-card__price-tag"
        >
          {isFree ? 'Free' : `${course.price.toLocaleString('vi-VN')} ₫`}
        </Tag>
        {course.enrolled && (
          <Tag color="cyan" className="course-card__enrolled-tag">
            Enrolled
          </Tag>
        )}
      </div>

      {/* Body */}
      <div className="course-card__body">
        <div className="course-card__meta-top">
          <Tag>{course.category}</Tag>
          <Tag color="blue">{course.level}</Tag>
        </div>

        <h3 className="course-card__title">{course.title}</h3>
        <p className="course-card__desc">{course.description}</p>

        <div className="course-card__instructor">
          <span>by <strong>{course.instructor}</strong></span>
        </div>

        <div className="course-card__stats">
          <CourseStatBadge icon={<BookOpen size={13} />} label={`${course.totalLessons} lessons`} />
          <CourseStatBadge icon={<Users size={13} />} label={`${course.students.toLocaleString()} students`} />
          <span className="course-card__rating">
            <Rate disabled defaultValue={Math.round(course.rating)} count={5} />
            <span>{course.rating} ({course.ratingCount})</span>
          </span>
        </div>

        <div className="course-card__tags">
          {course.tags.map((tag) => (
            <Tag key={tag} color="default">
              {tag}
            </Tag>
          ))}
        </div>
      </div>

      {/* Footer action */}
      <div className="course-card__footer">
        {course.enrolled ? (
          <Button type="primary" block onClick={() => onOpen?.(course)}>
            Continue
            <ArrowRight size={14} />
          </Button>
        ) : (
          <Button type="primary" block onClick={() => onEnroll?.(course)}>
            {isFree ? 'Enroll for free' : 'Enroll now'}
            <ArrowRight size={14} />
          </Button>
        )}
      </div>
    </article>
  )
}
