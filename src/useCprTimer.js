import { useEffect, useRef, useState } from 'react'

const COMPRESSION_MS = 545

export function useCprTimer() {
  const [running, setRunning] = useState(false)
  const [compressions, setCompressions] = useState(0)
  const [elapsedMs, setElapsedMs] = useState(0)
  const [bpm, setBpm] = useState(0)
  const elapsedRef = useRef(0)

  useEffect(() => {
    elapsedRef.current = elapsedMs
  }, [elapsedMs])

  useEffect(() => {
    if (!running) return undefined
    const origin = performance.now() - elapsedRef.current
    const id = setInterval(() => {
      setElapsedMs(performance.now() - origin)
    }, 200)
    return () => clearInterval(id)
  }, [running])

  useEffect(() => {
    if (!running) return undefined
    const id = setInterval(() => {
      setCompressions((count) => count + 1)
      setBpm(108 + Math.round(Math.random() * 6))
    }, COMPRESSION_MS)
    return () => clearInterval(id)
  }, [running])

  const start = () => {
    setRunning(true)
    setBpm((current) => current || 110)
  }

  const reset = () => {
    setRunning(false)
    setCompressions(0)
    setElapsedMs(0)
    setBpm(0)
  }

  return {
    running,
    compressions,
    elapsedMs,
    bpm,
    start,
    pause: () => setRunning(false),
    resume: () => {
      setRunning(true)
      setBpm((current) => current || 110)
    },
    toggle: () =>
      setRunning((isRunning) => {
        if (!isRunning) setBpm((current) => current || 110)
        return !isRunning
      }),
    reset,
  }
}

export function formatElapsed(ms) {
  const total = Math.max(0, Math.floor(ms / 1000))
  const minutes = String(Math.floor(total / 60)).padStart(2, '0')
  const seconds = String(total % 60).padStart(2, '0')
  return `${minutes}:${seconds}`
}
