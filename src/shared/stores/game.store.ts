import { create } from 'zustand'
import { GameService } from '../services/game.service'
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

  initGame: (challenge: Challenge) => {
    const gameState = GameService.initializeGame(challenge)
    set(gameState)
  },
  finishGame: () => {
    const currentState = get()
    const result = GameService.finishGame(currentState)

    return result
  },
  resetMismatchedCards: () => {
    const currentState = get()
    const newState = GameService.resetMismatchedCards(currentState)
    set(newState)
  },
  selectCard: (cardId: string) => {},
  startGame: () => {
    const currentState = get()
    const newState = GameService.startGame(currentState)
    set(newState)
  },

  // timer
  tick: () => {
    const currentState = get()
    const newState = GameService.tick(currentState)
    set(newState)

    if (newState.status === 'timeout') {
      get().stopTimer()
    }
  },
  startTimer: () => {
    const currentState = get()

    if (currentState._timerId) {
      clearInterval(currentState._timerId)
    }

    const timerId = setInterval(() => {
      get().tick()
    }, 1000)

    set({ _timerId: timerId })
  },
  stopTimer: () => {
    const currentState = get()

    if (currentState._timerId) {
      clearInterval(currentState._timerId)
      set({ _timerId: null })
    }
  },
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
