import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import { styles } from '../theme/appTheme'

const ContactsScreen = () => {
  const { authState, signIn, signOut } = useContext(AuthContext)

  return (
    <View style={styles.globalMargin}>
      <Text style={{ marginBottom: 10 }}>Contacts Screen</Text>
      {authState.isLoggedIn ? <Button onPress={signOut} title="Salir" /> : <Button onPress={signIn} title="Ingresar" />}
    </View>
  )
}

export default ContactsScreen
