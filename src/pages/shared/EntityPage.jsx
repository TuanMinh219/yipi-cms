import { Space, Table } from 'antd'
import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, BaseInput, BaseSelect, StatusTag } from '@/components/Atom'
import { formatCurrency, formatPercent } from '@/utils'

const getUniqueStatuses = (rows = []) => {
  const values = new Set()

  rows.forEach((row) => {
    if (row.status) values.add(row.status)
    if (row.paymentStatus) values.add(row.paymentStatus)
  })

  return Array.from(values).map((value) => ({
    label: value
      .toLowerCase()
      .split('_')
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' '),
    value,
  }))
}

const renderValue = (column, value) => {
  if (column.type === 'status') return <StatusTag value={value} />
  if (column.type === 'currency') return formatCurrency(value)
  if (column.type === 'percent') return formatPercent(value)
  if (column.type === 'number') return Number(value || 0).toLocaleString('en-US')

  return value
}

export default function EntityPage({ config }) {
  const { t } = useTranslation()
  const [keyword, setKeyword] = useState('')
  const [status, setStatus] = useState()
  const rows = useMemo(() => config.rows || [], [config.rows])

  const filteredRows = useMemo(() => {
    const search = keyword.trim().toLowerCase()

    return rows.filter((row) => {
      const matchKeyword =
        !search ||
        Object.values(row).some((value) =>
          String(value ?? '')
            .toLowerCase()
            .includes(search)
        )
      const rowStatus = row.status || row.paymentStatus
      const matchStatus = !status || rowStatus === status

      return matchKeyword && matchStatus
    })
  }, [keyword, rows, status])

  const tableColumns = [
    ...(config.columns || []).map((column) => ({
      ...column,
      key: column.dataIndex,
      render: (value) => renderValue(column, value),
    })),
    {
      title: t('table.action'),
      key: 'action',
      width: 132,
      render: () => (
        <Space size={6}>
          <Button action="view" tooltip={t('button.view')} />
          <Button action="edit" tooltip={t('button.edit')} />
          <Button action="delete" tooltip={t('button.delete')} danger />
        </Space>
      ),
    },
  ]

  return (
    <section className="page-shell">
      <div className="page-header">
        <div>
          <h1>{config.title}</h1>
          <p>{config.description}</p>
        </div>
        <Button type="primary" action={config.createLabel?.startsWith('Export') ? 'export' : 'create'}>
          {config.createLabel || t('button.create')}
        </Button>
      </div>

      <div className="page-panel">
        <div className="page-panel__body">
          <div className="filter-bar">
            <BaseInput
              value={keyword}
              placeholder={config.searchPlaceholder || t('form.keysearch')}
              onChange={(event) => setKeyword(event.target.value)}
            />
            <BaseSelect
              value={status}
              placeholder={t('form.status')}
              options={getUniqueStatuses(rows)}
              onChange={setStatus}
              onClear={() => setStatus(undefined)}
            />
            <Button action="search" type="primary">
              {t('button.search')}
            </Button>
            <Button
              action="reset"
              onClick={() => {
                setKeyword('')
                setStatus(undefined)
              }}
            >
              {t('button.reset')}
            </Button>
          </div>
        </div>

        <Table
          columns={tableColumns}
          dataSource={filteredRows}
          rowKey={config.rowKey || 'id'}
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
          }}
          scroll={{ x: 900 }}
        />
      </div>
    </section>
  )
}
