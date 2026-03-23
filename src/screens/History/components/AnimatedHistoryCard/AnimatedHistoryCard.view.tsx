import { useListEntryAnimation } from '@/animations/hooks/useListEntryAnimation'
import { FC } from 'react'
import Animated from 'react-native-reanimated'
import { FormattedMatch } from '../../useHistory.viewModel'
import { MatchHistoryCardView } from '../MatchHistoryCard/MatchHistoryCard.view'

interface Params {
  match: FormattedMatch
  index: number
}

export const AnimatedHistoryCardView: FC<Params> = ({ match, index }) => {
  const { animatedStyle } = useListEntryAnimation({ index })
  return (
    <Animated.View style={[animatedStyle]}>
      <MatchHistoryCardView match={match} />
    </Animated.View>
  )
}
