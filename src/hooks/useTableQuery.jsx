import { useCallback } from 'react'

export const useTableOnChange = (setQuery) =>
  useCallback(
    (pagination, filters, sorter) => {
      setQuery((prev) => {
        const next = { ...prev, page: pagination?.current || prev.page }

        if (sorter?.field && sorter?.order) {
          const direction = sorter.order === 'ascend' ? 'asc' : 'desc'
          next.sort = `${sorter.field},${direction}`
        } else {
          delete next.sort
        }

        return next
      })
    },
    [setQuery]
  )
