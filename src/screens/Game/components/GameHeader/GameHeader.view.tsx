import { usePressAnimation } from '@/animations/hooks/usePressAnimation'
import { colors } from '@/constants/colors'
import { AppText } from '@/shared/components/AppText'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Pressable, StyleSheet, View } from 'react-native'
import Animated from 'react-native-reanimated'
import { useGameHeaderViewModel } from './useGameHeader.viewModel'

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

export const GameHeaderView = () => {
  const {} = useGameHeaderViewModel()

  const { animatedStyle, onPressIn, onPressOut } = usePressAnimation({
    scaleActive: 0.8,
    width: 48,
  })
  return (
    <View style={styles.container}>
      <AnimatedPressable
        style={[styles.backButton, animatedStyle]}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
      >
        <MaterialCommunityIcons
          name="chevron-left"
          size={32}
          color={colors.grayscale.gray100}
        />
      </AnimatedPressable>

      <Animated.View style={styles.timerContainer}>
        <MaterialCommunityIcons
          name="clock-outline"
          size={20}
          color={colors.semantic.warning}
        />
        <AppText>1</AppText>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 16,
  },
  backButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.grayscale.gray500,
  },
  timerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.grayscale.gray500,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 24,
    gap: 8,
  },
})
