import { useState, useEffect } from 'react'

export function useLyreEcho() {
  const [presence, setPresence] = useState('rooted')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPresence('expanding')
    }, 3000)
    return () => clearTimeout(timeout)
  }, [])

  return presence
}