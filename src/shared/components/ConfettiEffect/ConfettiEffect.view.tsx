import { ConfettiConfig } from '@/shared/utils/confetti'
import { FC, useRef, useState } from 'react'
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

  return <View></View>
}
