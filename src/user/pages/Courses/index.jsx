import { Button, Progress, Table } from 'antd'
import { ArrowRight } from 'lucide-react'
import { myCourses } from '../../data/learnerData'

export default function UserCourses() {
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
      render: (value) => <Progress percent={value} strokeColor="#0f9f8f" />,
    },
    { title: 'Next lesson', dataIndex: 'nextLesson' },
    {
      title: 'Action',
      key: 'action',
      width: 130,
      render: () => (
        <Button type="primary">
          Continue
          <ArrowRight size={14} />
        </Button>
      ),
    },
  ]

  return (
    <section className="user-page">
      <div className="user-page-header">
        <div>
          <h1>My Courses</h1>
          <p>Course progress, mentor assignments, and upcoming IELTS lessons.</p>
        </div>
      </div>
      <div className="user-panel">
        <Table columns={columns} dataSource={myCourses} rowKey="id" pagination={false} scroll={{ x: 820 }} />
      </div>
    </section>
  )
}
