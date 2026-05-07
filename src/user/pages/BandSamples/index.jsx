import { Button, Table, Tag } from 'antd'
import { Eye } from 'lucide-react'
import { bandSamples } from '../../data/learnerData'

export default function BandSamples() {
  const columns = [
    {
      title: 'Sample',
      dataIndex: 'title',
      render: (value, record) => (
        <div>
          <strong>{value}</strong>
          <span style={{ display: 'block', color: '#667085', marginTop: 3 }}>{record.tags}</span>
        </div>
      ),
    },
    { title: 'Skill', dataIndex: 'skill', width: 140 },
    {
      title: 'Band',
      dataIndex: 'band',
      width: 120,
      render: (value) => <Tag color="gold">{value}</Tag>,
    },
    {
      title: 'Action',
      key: 'action',
      width: 120,
      render: () => (
        <Button>
          Read
          <Eye size={14} />
        </Button>
      ),
    },
  ]

  return (
    <section className="user-page">
      <div className="user-page-header">
        <div>
          <h1>Band 8.0+ Samples</h1>
          <p>High-scoring IELTS writing and speaking samples with examiner-style notes.</p>
        </div>
      </div>
      <div className="user-panel">
        <Table columns={columns} dataSource={bandSamples} rowKey="id" pagination={false} scroll={{ x: 720 }} />
      </div>
    </section>
  )
}
