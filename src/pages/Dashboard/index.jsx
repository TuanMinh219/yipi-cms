import { Progress, Table } from 'antd'
import { useTranslation } from 'react-i18next'
import { StatusTag } from '@/components/Atom'
import { dashboardMetrics, recentLearningActivity } from '@/assets/data/learningData'
import './index.scss'

export default function Dashboard() {
  const { t } = useTranslation()

  const columns = [
    { title: 'Student', dataIndex: 'student' },
    { title: 'Activity', dataIndex: 'activity' },
    { title: 'Level', dataIndex: 'level' },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (value) => <StatusTag value={value} />,
    },
    { title: 'Date', dataIndex: 'date' },
  ]

  return (
    <section className="page-shell dashboard-page">
      <div className="page-header">
        <div>
          <h1>{t('dashboard.title')}</h1>
          <p>{t('dashboard.subtitle')}</p>
        </div>
      </div>

      <div className="metric-grid">
        {dashboardMetrics.map((metric) => (
          <div className="metric-card" key={metric.label}>
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
            <small>{metric.trend}</small>
          </div>
        ))}
      </div>

      <div className="dashboard-grid">
        <div className="page-panel">
          <div className="page-panel__body">
            <h2>Skill Completion</h2>
            <div className="skill-list">
              {[
                ['Speaking', 76],
                ['Listening', 68],
                ['Writing', 59],
                ['Vocabulary', 84],
              ].map(([label, value]) => (
                <div className="skill-row" key={label}>
                  <div>
                    <strong>{label}</strong>
                    <span>{value}% completion</span>
                  </div>
                  <Progress percent={value} size="small" strokeColor="#0f9f8f" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="page-panel">
          <div className="page-panel__body">
            <h2>Recent Learning Activity</h2>
          </div>
          <Table
            columns={columns}
            dataSource={recentLearningActivity}
            rowKey="id"
            pagination={false}
            scroll={{ x: 720 }}
          />
        </div>
      </div>
    </section>
  )
}
