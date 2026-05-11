import { Button, Progress, Table, Tag } from 'antd'
import { ArrowRight, Headphones, PenLine } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import thumbnail from '@/assets/thumbnaildefault.jpg'
import PATH from '@/configs/paths/PATH'
import SkillCard from '../../Atoms/SkillCard'
import ProgressStat from '../../Atoms/ProgressStat'
import { learnerStats, myCourses, skillCards } from '../../data/learnerData'
import './index.scss'

export default function UserDashboard() {
  const navigate = useNavigate()

  const columns = [
    {
      title: 'Course',
      dataIndex: 'title',
      render: (value, record) => (
        <div>
          <strong>{value}</strong>
          <span style={{ display: 'block', color: '#667085', marginTop: 3 }}>{record.mentor}</span>
        </div>
      ),
    },
    {
      title: 'Progress',
      dataIndex: 'progress',
      render: (value) => <Progress percent={value} size="small" strokeColor="#0f9f8f" />,
    },
    {
      title: 'Next lesson',
      dataIndex: 'nextLesson',
      render: (value) => <Tag color="cyan">{value}</Tag>,
    },
  ]

  return (
    <section className="user-page">
      <div className="learner-hero">
        <div className="learner-hero__copy">
          <span className="learner-hero__eyebrow">IELTS Online Practice Platform</span>
          <h1>Nền tảng tự luyện IELTS Reading, Listening, Writing chất lượng cao</h1>
          <p>
            Build a daily practice rhythm with focused IELTS skill sets, score tracking,
            and review-first study sessions.
          </p>
          <div className="learner-hero__actions">
            <Button type="primary" size="large" onClick={() => navigate(PATH.USER.READING)}>
              Practice now
              <ArrowRight size={16} />
            </Button>
            <Button size="large" onClick={() => navigate(PATH.USER.MOCK_TESTS)}>
              Mock tests
            </Button>
          </div>
        </div>
        <div className="learner-hero__media" style={{ backgroundImage: `url(${thumbnail})` }}>
          <div className="learner-hero__floating">
            <Headphones size={18} />
            Listening 6.5
          </div>
          <div className="learner-hero__floating second">
            <PenLine size={18} />
            Writing review
          </div>
        </div>
      </div>

      <div className="user-stat-grid">
        {learnerStats.map((stat) => (
          <ProgressStat key={stat.label} {...stat} />
        ))}
      </div>

      <div>
        <div className="user-section-title">
          <h2>Choose a skill</h2>
          <span>Daily IELTS practice</span>
        </div>
        <div className="skill-grid">
          {skillCards.map((skill) => (
            <SkillCard key={skill.key} skill={skill} />
          ))}
        </div>
      </div>

      <div className="user-panel">
        <div className="user-panel__body user-section-title">
          <h2>Continue learning</h2>
          <span>My courses</span>
        </div>
        <Table columns={columns} dataSource={myCourses} rowKey="id" pagination={false} />
      </div>
    </section>
  )
}
