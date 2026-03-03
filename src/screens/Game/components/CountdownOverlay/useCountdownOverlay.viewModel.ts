import { useGameStore } from '@/shared/stores/game.store'
import { useEffect, useState } from 'react'

export const useCountdownOverlayViewModel = () => {
  const [count, setCount] = useState(3)
  const { status } = useGameStore()
  const visible = status === 'countdown'

  useEffect(() => {
    if (visible) {
      setCount(3)

      let currentCount = 3

      const countdown = setInterval(() => {
        if (currentCount > 1) {
          currentCount--
          setCount(currentCount)
        } else {
          clearInterval(countdown)
        }
      }, 1000)

      return () => clearInterval(countdown)
    }
  }, [setCount, visible])

  return { count }
}
