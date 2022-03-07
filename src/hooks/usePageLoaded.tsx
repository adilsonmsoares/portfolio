import { useEffect, useState } from 'react'

export const usePageLoaded = () => {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => setLoaded(true), [])
  return loaded
}
