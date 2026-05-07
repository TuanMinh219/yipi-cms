export const generateRequiredRules = (required, rules = [], t = (key) => key) => {
  const requiredRule = required
    ? [{ required: true, message: t('form.required') }]
    : []

  return [...requiredRule, ...rules]
}

export const toCapitalize = (value = '') =>
  value
    .split(' ')
    .map((word) => (word ? word[0].toUpperCase() + word.slice(1) : word))
    .join(' ')

export const findByKeyInChildren = (items = [], key) => {
  for (const item of items) {
    if (item.key === key) return item
    if (item.children) {
      const found = findByKeyInChildren(item.children, key)
      if (found) return found
    }
  }

  return null
}
