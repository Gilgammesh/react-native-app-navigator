import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { colors, styles } from '../theme/appTheme'
import { AuthContext } from '../context/AuthContext'
import Icon from 'react-native-vector-icons/Ionicons'

const SettingScreen = () => {
  const insets = useSafeAreaInsets()

  const { authState } = useContext(AuthContext)

  return (
    <View style={{ ...styles.globalMargin, marginTop: insets.top + 20 }}>
      <Text style={styles.title}>SettingsScreen</Text>
      <Text>{authState.isLoggedIn ? 'Logueado' : 'No logueado'}</Text>
      {authState.isLoggedIn && <Text>{authState.username}</Text>}
      {authState.isLoggedIn && authState.favoriteIcon && (
        <Icon name={authState.favoriteIcon} size={80} color={colors.primary} />
      )}
    </View>
  )
}

export default SettingScreen
