import { Button, Input, Select, Space, Table, Tag } from 'antd'
import { Play, RotateCcw, Search } from 'lucide-react'
import { useMemo, useState } from 'react'

export default function PracticePage({ config }) {
  const [keyword, setKeyword] = useState('')
  const [level, setLevel] = useState()

  const rows = useMemo(() => config.rows || [], [config.rows])
  const filteredRows = useMemo(() => {
    const search = keyword.trim().toLowerCase()

    return rows.filter((row) => {
      const matchesSearch =
        !search ||
        Object.values(row).some((value) =>
          String(value ?? '')
            .toLowerCase()
            .includes(search)
        )
      const matchesLevel = !level || row.level === level

      return matchesSearch && matchesLevel
    })
  }, [keyword, level, rows])

  const levels = Array.from(new Set(rows.map((row) => row.level))).map((value) => ({
    label: value,
    value,
  }))

  const columns = [
    {
      title: 'Practice set',
      dataIndex: 'title',
      render: (value, record) => (
        <div>
          <strong>{value}</strong>
          <span style={{ display: 'block', color: '#667085', marginTop: 3 }}>{record.type}</span>
        </div>
      ),
    },
    { title: 'Level', dataIndex: 'level', width: 120 },
    { title: 'Questions', dataIndex: 'questions', width: 120 },
    { title: 'Duration', dataIndex: 'duration', width: 120 },
    {
      title: 'Status',
      dataIndex: 'status',
      width: 140,
      render: (value) => <Tag color={value === 'Ready' ? 'green' : 'blue'}>{value}</Tag>,
    },
    {
      title: 'Action',
      key: 'action',
      width: 120,
      render: () => (
        <Button type="primary">
          Start
          <Play size={14} />
        </Button>
      ),
    },
  ]

  return (
    <section className="user-page">
      <div className="user-page-header">
        <div>
          <h1>{config.title}</h1>
          <p>{config.subtitle}</p>
        </div>
        <Button type="primary">
          Start timed mode
          <Play size={15} />
        </Button>
      </div>

      <div className="user-panel">
        <div className="user-panel__body">
          <div className="practice-filter">
            <Input
              value={keyword}
              prefix={<Search size={16} />}
              placeholder="Search practice"
              onChange={(event) => setKeyword(event.target.value)}
            />
            <Select
              value={level}
              placeholder="Level"
              options={levels}
              allowClear
              onChange={setLevel}
            />
            <Space>
              <Button type="primary" icon={<Search size={15} />}>
                Search
              </Button>
              <Button
                icon={<RotateCcw size={15} />}
                onClick={() => {
                  setKeyword('')
                  setLevel(undefined)
                }}
              >
                Reset
              </Button>
            </Space>
          </div>
        </div>
        <Table
          columns={columns}
          dataSource={filteredRows}
          rowKey="id"
          pagination={false}
          scroll={{ x: 820 }}
        />
      </div>
    </section>
  )
}
