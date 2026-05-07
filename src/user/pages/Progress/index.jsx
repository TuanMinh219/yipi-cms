import { Progress, Table, Tag } from 'antd'
import ProgressStat from '../../Atoms/ProgressStat'
import { learnerStats, progressRows } from '../../data/learnerData'

export default function LearnerProgress() {
  const columns = [
    { title: 'Skill', dataIndex: 'skill' },
    { title: 'Best band', dataIndex: 'best' },
    { title: 'Latest band', dataIndex: 'latest' },
    { title: 'Tasks', dataIndex: 'tasks' },
    {
      title: 'Accuracy',
      dataIndex: 'accuracy',
      render: (value) =>
        value.includes('%') ? (
          <Progress percent={Number(value.replace('%', ''))} size="small" strokeColor="#0f9f8f" />
        ) : (
          <Tag color="purple">{value}</Tag>
        ),
    },
  ]

  return (
    <section className="user-page">
      <div className="user-page-header">
        <div>
          <h1>Progress</h1>
          <p>Track skill bands, task volume, and practice accuracy across IELTS modules.</p>
        </div>
      </div>

      <div className="user-stat-grid">
        {learnerStats.map((stat) => (
          <ProgressStat key={stat.label} {...stat} />
        ))}
      </div>

      <div className="user-panel">
        <Table columns={columns} dataSource={progressRows} rowKey="id" pagination={false} scroll={{ x: 760 }} />
      </div>
    </section>
  )
}
