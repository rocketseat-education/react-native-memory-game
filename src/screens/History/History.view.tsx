import { colors } from '@/constants/colors'
import { AppText } from '@/shared/components/AppText'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { router } from 'expo-router'
import { FC } from 'react'
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useHistoryViewModel } from './useHistory.viewModel'

export const HistoryView: FC<ReturnType<typeof useHistoryViewModel>> = ({
  scores,
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
      </View>
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

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingBottom: 30,
  },

  backButton: {
    width: 40,
    height: 40,
    borderRadius: 24,
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
})
