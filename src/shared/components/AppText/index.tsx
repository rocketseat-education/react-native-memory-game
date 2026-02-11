import { FC } from 'react'
import { Text, TextProps } from 'react-native'

export const AppText: FC<TextProps> = (params) => {
  return (
    <Text
      {...params}
      style={[{ fontFamily: 'Baloo2_400Regular' }, params.style]}
    />
  )
}
