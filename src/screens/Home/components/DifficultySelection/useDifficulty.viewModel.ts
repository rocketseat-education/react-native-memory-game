import { Difficulty } from '@/shared/interfaces/difficulty'

export const useDifficultyViewModel = () => {
  const difficulties: Difficulty[] = ['Fácil', 'Médio', 'Difícil']
  return {
    difficulties,
  }
}
