import { create } from 'zustand'
import { Challenge, GameResult, GameState } from './../utils/challenge'

interface GameStore extends GameState {
  initGame: (challenge: Challenge) => void
  startGame: () => void
  selectCard: (id: string) => void
  resetMismatchedCards: () => void
  finishGame: () => GameResult | null
  tick: () => void
  _timerId: number | null

  startTimer: () => void
  stopTimer: () => void

  pauseGame: () => void
  resumeGame: () => void
  resetGame: () => void
  clearGame: () => void

  previewAllCards: () => void
  hideAllCards: () => void
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

  // timer
  tick: () => {},
  startTimer: () => {},
  stopTimer: () => {},
  _timerId: null,

  // Ciclo de vida
  clearGame: () => {},
  pauseGame: () => {},
  resumeGame: () => {},
  resetGame: () => {},

  // Preview de Cartas
  previewAllCards: () => {},
  hideAllCards: () => {},
}))
