import { colors } from '@/constants/colors'
import { FC } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ListHeaderView } from './components/ListHeader/ListHeader.view'
import { MatchHistoryCardView } from './components/MatchHistoryCard/MatchHistoryCard.view'
import { useHistoryViewModel } from './useHistory.viewModel'

export const HistoryView: FC<ReturnType<typeof useHistoryViewModel>> = ({
  matches,
  averageTime,
  totalGames,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <FlatList
          data={matches}
          renderItem={({ item }) => <MatchHistoryCardView match={item} />}
          keyExtractor={({ id }) => `score-${id}`}
          style={{ width: '100%' }}
          ListHeaderComponent={() => (
            <ListHeaderView totalGames={totalGames} averageTime={averageTime} />
          )}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grayscale.gray700,
  },
  contentContainer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
})
