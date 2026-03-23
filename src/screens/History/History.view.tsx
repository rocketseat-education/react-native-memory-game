import { colors } from '@/constants/colors'
import { AppText } from '@/shared/components/AppText'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { router } from 'expo-router'
import { FC } from 'react'
import { FlatList, Pressable, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MatchHistoryCardView } from './components/MatchHistoryCard/MatchHistoryCard.view'
import { useHistoryViewModel } from './useHistory.viewModel'

export const HistoryView: FC<ReturnType<typeof useHistoryViewModel>> = ({
  matches,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Pressable
          style={styles.backButton}
          onPress={() => router.push('/home')}
        >
          <MaterialCommunityIcons
            name="arrow-left"
            size={20}
            color={colors.grayscale.gray100}
          />
        </Pressable>

        <AppText style={styles.headerTitle}>Histórico de partidas</AppText>

        <View style={styles.emptyButton} />
      </View>
      <View style={styles.contentContainer}>
        <FlatList
          data={matches}
          renderItem={({ item }) => <MatchHistoryCardView match={item} />}
          keyExtractor={({ id }) => `score-${id}`}
          style={{ width: '100%' }}
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

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingBottom: 30,
  },

  backButton: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    backgroundColor: colors.grayscale.gray500,
    borderWidth: 1,
    borderColor: colors.grayscale.gray400,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'Baloo2_800ExtraBold',
    color: colors.grayscale.gray100,
  },
  emptyButton: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
