import { Button, Table, Tag } from 'antd'
import { Play } from 'lucide-react'
import { mockTests } from '../../data/learnerData'

export default function MockTests() {
  const columns = [
    {
      title: 'Test',
      dataIndex: 'title',
      render: (value, record) => (
        <div>
          <strong>{value}</strong>
          <span style={{ display: 'block', color: '#667085', marginTop: 3 }}>{record.modules}</span>
        </div>
      ),
    },
    { title: 'Duration', dataIndex: 'duration', width: 140 },
    { title: 'Band', dataIndex: 'score', width: 120 },
    {
      title: 'Status',
      dataIndex: 'status',
      width: 130,
      render: (value) => <Tag color={value === 'Start' ? 'green' : 'blue'}>{value}</Tag>,
    },
    {
      title: 'Action',
      key: 'action',
      width: 120,
      render: () => (
        <Button type="primary">
          Open
          <Play size={14} />
        </Button>
      ),
    },
  ]

  return (
    <section className="user-page">
      <div className="user-page-header">
        <div>
          <h1>Mock Tests</h1>
          <p>Full IELTS practice sets with module timing and score history.</p>
        </div>
      </div>
      <div className="user-panel">
        <Table columns={columns} dataSource={mockTests} rowKey="id" pagination={false} scroll={{ x: 760 }} />
      </div>
    </section>
  )
}
