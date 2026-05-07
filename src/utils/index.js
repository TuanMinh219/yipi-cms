export const getPathUrl = (pathname) => {
  const segments = pathname.split('/').filter(Boolean)

  return segments.map((segment, index) => {
    const url = `/${segments.slice(0, index + 1).join('/')}`
    const isDynamicSegment = /^[0-9a-f-]+$/i.test(segment)

    return {
      name: segment,
      url,
      isDynamicSegment,
    }
  })
}

export const formatCurrency = (value, currency = 'USD') =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(Number(value || 0))

export const formatPercent = (value) =>
  `${Number(value || 0).toLocaleString('en-US', { maximumFractionDigits: 1 })}%`
