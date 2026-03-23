import { ConfettiConfig, createConfettiPiece } from '@/shared/utils/confetti'
import { FC, useCallback, useEffect, useRef, useState } from 'react'
import { View } from 'react-native'

interface ConfettiEffectProps {
  active: boolean
  burstCount?: number
  continuousCount?: number
  continuousInterval?: number
}

export const ConfettiEffectView: FC<ConfettiEffectProps> = ({
  active,
  burstCount = 40,
  continuousCount = 2,
  continuousInterval = 500,
}) => {
  const [pieces, setPieces] = useState<ConfettiConfig[]>([])

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const cleanupRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const idCounterRef = useRef(0)

  const cleanup = useCallback(() => {
    const now = Date.now()
    const maxLifetime = 6000
    setPieces((prev) =>
      prev.filter((piece) => now - piece.createdAt < maxLifetime),
    )
  }, [])

  useEffect(() => {
    if (active) {
      intervalRef.current = setInterval(() => {
        const newPieces: ConfettiConfig[] = Array.from(
          { length: continuousCount },
          () => {
            idCounterRef.current += 1
            return createConfettiPiece(idCounterRef.current, false)
          },
        )
        setPieces((prevValues) => [...prevValues, ...newPieces])
      }, continuousInterval)

      cleanupRef.current = setInterval(cleanup, 2000)
    }
  }, [active])

  return <View></View>
}
