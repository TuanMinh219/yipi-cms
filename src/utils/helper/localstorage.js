export const getLocalstorageData = (key) => {
  try {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : null
  } catch {
    return null
  }
}

export const setLocalstorageData = ({ key, data }) => {
  localStorage.setItem(key, JSON.stringify(data))
}

export const removeLocalstorageData = (key) => {
  localStorage.removeItem(key)
}
