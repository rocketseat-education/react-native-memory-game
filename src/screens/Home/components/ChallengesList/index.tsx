import { AppText } from '@/shared/components/AppText'
import { challengeTheme } from '@/shared/utils/challenge'
import { View } from 'react-native'

export const ChallengesList = () => {
  return (
    <View>
      <AppText>Desafios disponíveis</AppText>
      {challengeTheme.map(({ id, title }) => (
        <View key={`challenge-${id}`}>
          <AppText>{title}</AppText>
        </View>
      ))}
    </View>
  )
}
