import { Difficulty } from '@/shared/interfaces/difficulty'
import { useEffect, useMemo, useState } from 'react'
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'

export const useDifficultyViewModel = () => {
  const difficulties = useMemo<Difficulty[]>(
    () => ['Fácil', 'Médio', 'Difícil'],
    [],
  )
  const [selectedDifficulty, setSelectedDifficulty] =
    useState<Difficulty>('Fácil')

  const selectedIndex = difficulties.indexOf(selectedDifficulty)
  const translateX = useSharedValue(selectedIndex * 100)

  useEffect(() => {
    const newIndex = difficulties.indexOf(selectedDifficulty)
    translateX.value = withSpring(newIndex * 100, {
      damping: 50,
      stiffness: 220,
    })
  }, [selectedDifficulty, difficulties, translateX])

  const animatedIndicatorStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: `${translateX.value}%` }],
  }))

  return {
    difficulties,
    selectedDifficulty,
    setSelectedDifficulty,
    animatedIndicatorStyle,
  }
}
