import { useEffect } from 'react'
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'
import { SPRING_CONFIG } from '../config/animation.config'

interface Params {
  visible: boolean
}

export const useModalAnimation = ({ visible }: Params) => {
  const translateY = useSharedValue(0)
  const opacity = useSharedValue(0)

  useEffect(() => {
    if (visible) {
      translateY.value = withSpring(0, SPRING_CONFIG.modal)
      opacity.value = withSpring(1, SPRING_CONFIG.modal)
    } else {
      translateY.value = withSpring(-1000, SPRING_CONFIG.modal)
      opacity.value = withSpring(0, SPRING_CONFIG.modal)
    }
  }, [visible, translateY, opacity])

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
    opacity: opacity.value,
  }))

  return {
    animatedStyle,
  }
}
