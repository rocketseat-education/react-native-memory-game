import { Difficulty } from '@/shared/interfaces/difficulty'
import { challengeTheme } from '@/shared/utils/challenge'
import { useLocalSearchParams } from 'expo-router'

export const useGameViewModel = () => {
  const { themeId, difficulty } = useLocalSearchParams<{
    themeId: string
    difficulty: Difficulty
  }>()

  const selectedTheme = challengeTheme.find((theme) => theme.id === themeId)

  return {
    selectedTheme,
  }
}
