import { useCallback, useSyncExternalStore } from 'react'

export const mediaQueryPoints = {
  xs: 480,
  sm: 576,
  md: 768,
  mdPlus: 900,
  lg: 992,
  lgPlus: 1180,
}

export default function useMediaQuery(query) {
  const subscribe = useCallback(
    (callback) => {
      if (typeof window === 'undefined') return () => {}

      const media = window.matchMedia(query)
      media.addEventListener('change', callback)

      return () => media.removeEventListener('change', callback)
    },
    [query]
  )

  const getSnapshot = useCallback(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia(query).matches
  }, [query])

  return useSyncExternalStore(subscribe, getSnapshot, () => false)
}
