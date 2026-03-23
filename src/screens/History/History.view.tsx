import { colors } from '@/constants/colors'
import { FC } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useHistoryViewModel } from './useHistory.viewModel'

export const HistoryView: FC<ReturnType<typeof useHistoryViewModel>> = ({
  scores,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <FlatList
          data={scores}
          renderItem={({ item }) => (
            <View>
              <Text style={{ color: colors.grayscale.gray100 }}>
                {item.category}
              </Text>
            </View>
          )}
          keyExtractor={({ id }) => `score-${id}`}
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
