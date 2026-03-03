import { Difficulty } from '@/shared/interfaces/difficulty'
import { useGameStore } from '@/shared/stores/game.store'
import { challengeTheme, difficultyConfigs } from '@/shared/utils/challenge'
import { useLocalSearchParams } from 'expo-router'
import { useEffect } from 'react'

export const useGameViewModel = () => {
  const { themeId, difficulty } = useLocalSearchParams<{
    themeId: string
    difficulty: Difficulty
  }>()

  const { initGame } = useGameStore()

  const selectedTheme = challengeTheme.find((theme) => theme.id === themeId)

  useEffect(() => {
    initGame({
      id: `${themeId}-${difficulty}`,
      title: selectedTheme?.title || '',
      cards: selectedTheme?.cards || [],
      difficulty,
      estimatedTime: difficultyConfigs[difficulty].estimatedTime,
      timeLimit: difficultyConfigs[difficulty].timeLimit,
    })
  }, [
    difficulty,
    initGame,
    selectedTheme?.cards,
    selectedTheme?.title,
    themeId,
  ])

  return {
    selectedTheme,
  }
}
