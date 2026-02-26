import { CardItem, Challenge, GameState, StoreCard } from '../utils/challenge'

export class GameService {
  static createCardPair(
    cardItem: CardItem,
    startIndex: number,
  ): [StoreCard, StoreCard] {
    return [
      {
        id: `${cardItem.name}-1-${startIndex}`,
        ...cardItem,
        isFlipped: false,
        isMatched: false,
      },
      {
        id: `${cardItem.name}-2-${startIndex + 2}`,
        ...cardItem,
        isFlipped: false,
        isMatched: false,
      },
    ]
  }

  static generateCards(challenge: Challenge): StoreCard[] {
    const cards: StoreCard[] = []

    challenge.cards.forEach((cardItem, index) => {
      const [card1, card2] = GameService.createCardPair(cardItem, index)
      cards.push(card1, card2)
    })

    return cards
  }

  static initializeGame(challenge: Challenge): GameState {
    const cards = GameService.generateCards(challenge)
    return {
      status: 'countdown',
      challenge,
      cards,
      selectedCards: [],
      timeRemaining: challenge.timeLimit,
      timeElapsed: 0,
      startedAt: null,
    }
  }
}
