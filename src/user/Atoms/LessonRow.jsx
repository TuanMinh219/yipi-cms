import { Button, Tag } from 'antd'
import { CheckCircle2, Clock, FileQuestion, Play } from 'lucide-react'

/**
 * LessonRow
 * Atom — a single lesson row inside a course detail drawer.
 * Props: lesson { id, title, duration, completed, hasQuiz, current }
 */
export default function LessonRow({ lesson, index }) {
  return (
    <div className={`lesson-row${lesson.completed ? ' lesson-row--done' : ''}${lesson.current ? ' lesson-row--current' : ''}`}>
      <div className="lesson-row__index">
        {lesson.completed ? (
          <CheckCircle2 size={16} className="lesson-row__check" />
        ) : (
          <span>{index + 1}</span>
        )}
      </div>

      <div className="lesson-row__body">
        <span className="lesson-row__title">{lesson.title}</span>
        <div className="lesson-row__meta">
          <span className="lesson-row__dur">
            <Clock size={13} />
            {lesson.duration}
          </span>
          {lesson.hasQuiz && (
            <Tag color="purple" icon={<FileQuestion size={11} />}>
              Quiz
            </Tag>
          )}
          {lesson.current && <Tag color="cyan">Up next</Tag>}
        </div>
      </div>

      <Button
        type={lesson.current ? 'primary' : 'text'}
        size="small"
        icon={<Play size={13} />}
        disabled={!lesson.completed && !lesson.current}
      >
        {lesson.completed ? 'Review' : lesson.current ? 'Continue' : 'Start'}
      </Button>
    </div>
  )
}
