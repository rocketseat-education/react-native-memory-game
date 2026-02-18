import { create } from 'zustand'
import { Challenge, GameResult, GameState } from './../utils/challenge'

interface GameStore extends GameState {
  initGame: (challenge: Challenge) => void
  startGame: () => void
  selectCard: (id: string) => void
  resetMismatchedCards: () => void
  finishGame: () => GameResult | null
}

export const useGameStore = create<GameStore>((set, get) => ({
  status: 'idle',
  challenge: null,
  cards: [],
  selectedCards: [],
  timeElapsed: 0,
  startedAt: null,
  timeRemaining: 0,

  initGame: () => {},
  finishGame: () => null,
  resetMismatchedCards: () => {},
  selectCard: (cardId: string) => {},
  startGame: () => {},
}))
