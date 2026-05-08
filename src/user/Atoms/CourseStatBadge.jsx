/**
 * CourseStatBadge
 * Atom — inline icon+label stat pill used in course cards and headers.
 * Props: icon (React node), label (string), accent (string | undefined)
 */
export default function CourseStatBadge({ icon, label, accent }) {
  return (
    <span className="course-stat-badge" style={accent ? { color: accent } : undefined}>
      {icon}
      {label}
    </span>
  )
}
