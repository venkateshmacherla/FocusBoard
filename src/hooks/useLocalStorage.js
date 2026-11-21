import { useEffect, useState } from 'react'

/**
 * useState that is mirrored to localStorage.
 * - Reads once on first render (lazy initialiser).
 * - Falls back to `initialValue` when nothing is saved, the JSON is corrupt,
 *   storage is blocked, or `validate` rejects the saved value.
 * - Saved data is never overwritten by the initial value on refresh.
 */
export default function useLocalStorage(key, initialValue, validate = () => true) {
  const [value, setValue] = useState(() => {
    try {
      const raw = window.localStorage.getItem(key)
      if (raw === null) return initialValue
      const parsed = JSON.parse(raw)
      return validate(parsed) ? parsed : initialValue
    } catch {
      return initialValue
    }
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // Storage full or unavailable (e.g. private mode): the app keeps working in memory.
    }
  }, [key, value])

  return [value, setValue]
}
