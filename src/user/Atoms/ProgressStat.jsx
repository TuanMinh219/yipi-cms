export default function ProgressStat({ label, value, detail }) {
  return (
    <div className="user-stat">
      <span>{label}</span>
      <strong>{value}</strong>
      <small>{detail}</small>
    </div>
  )
}
