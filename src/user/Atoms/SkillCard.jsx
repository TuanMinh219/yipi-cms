import { Button, Progress } from 'antd'
import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function SkillCard({ skill }) {
  const navigate = useNavigate()

  return (
    <article className="skill-card" style={{ '--skill-color': skill.color }}>
      <div className="skill-card__mark" aria-hidden>
        {skill.title.slice(0, 1)}
      </div>
      <div>
        <h3>{skill.title}</h3>
        <p>{skill.subtitle}</p>
      </div>
      <Progress
        percent={skill.progress}
        size="small"
        strokeColor={skill.color}
        trailColor="#eef2f6"
      />
      <Button type="primary" onClick={() => navigate(skill.route)}>
        Practice now
        <ArrowRight size={15} />
      </Button>
    </article>
  )
}
