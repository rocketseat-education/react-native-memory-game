import { FC, useEffect } from 'react'
import { Easing, View } from 'react-native'
import { useSharedValue, withDelay, withTiming } from 'react-native-reanimated'

interface ConfettiPieceProps {
  color: string
  startX: number
  delay: number
  duration: number
  size: number
  shape: 'square' | 'rectangle' | 'circle'
  swingDirection: number
  swingAmount: number
  rotationSpeed: number
}

export const ConfettiPieceComponent: FC<ConfettiPieceProps> = ({
  color,
  startX,
  delay,
  duration,
  size,
  shape,
  swingDirection,
  swingAmount,
  rotationSpeed,
}) => {
  const progress = useSharedValue(0)
  const rotateZ = useSharedValue(0)

  useEffect(() => {
    progress.value = withDelay(
      delay,
      withTiming(1, { duration, easing: Easing.linear }),
    )

    rotateZ.value = withDelay(
      delay,
      withTiming(360 * rotationSpeed * swingDirection, {
        duration,
        easing: Easing.linear,
      }),
    )
  }, [])

  return <View />
}
