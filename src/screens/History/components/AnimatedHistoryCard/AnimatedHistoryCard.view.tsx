import { useListEntryAnimation } from '@/animations/hooks/useListEntryAnimation'
import { useSweepToDelete } from '@/animations/hooks/useSweepToDelete'
import { FC } from 'react'
import { GestureDetector } from 'react-native-gesture-handler'
import Animated from 'react-native-reanimated'
import { FormattedMatch } from '../../useHistory.viewModel'
import { MatchHistoryCardView } from '../MatchHistoryCard/MatchHistoryCard.view'

interface Params {
  match: FormattedMatch
  index: number
  onDelete: () => void
}

export const AnimatedHistoryCardView: FC<Params> = ({
  match,
  index,
  onDelete,
}) => {
  const { animatedStyle } = useListEntryAnimation({ index })
  const {
    panGesture,
    containerAnimatedStyle,
    deleteIconAnimatedStyle,
    cardAnimatedStyle,
  } = useSweepToDelete({ onDelete })
  return (
    <Animated.View style={[animatedStyle, containerAnimatedStyle]}>
      <GestureDetector gesture={panGesture}>
        <Animated.View style={cardAnimatedStyle}>
          <MatchHistoryCardView match={match} />
        </Animated.View>
      </GestureDetector>
    </Animated.View>
  )
}
