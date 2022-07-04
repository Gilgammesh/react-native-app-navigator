import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { styles } from '../theme/appTheme'
import TouchableIcon from '../components/TouchableIcon'

const Tab1Screen = () => {
  useEffect(() => {
    console.log('Tab1Screen effect')
  }, [])

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Iconos</Text>

      <TouchableIcon iconName="rocket" iconColor="orange" />
      <TouchableIcon iconName="airplane" iconColor="gray" />
      <TouchableIcon iconName="alarm" iconColor="red" />
      <TouchableIcon iconName="bicycle" iconColor="grey" />
      <TouchableIcon iconName="bus" iconColor="red" />
      <TouchableIcon iconName="cube" iconColor="red" />
      <TouchableIcon iconName="flash" iconColor="orange" />
      <TouchableIcon iconName="headset" iconColor="grey" />
      <TouchableIcon iconName="hammer" iconColor="red" />
      <TouchableIcon iconName="location" iconColor="red" />
      <TouchableIcon iconName="nuclear" iconColor="blue" />
      <TouchableIcon iconName="server" iconColor="red" />
      <TouchableIcon iconName="sunny" iconColor="orange" />
      <TouchableIcon iconName="logo-react" iconColor="skyblue" />
      <TouchableIcon iconName="logo-nodejs" iconColor="green" />
      <TouchableIcon iconName="logo-electron" iconColor="blue" />
      <TouchableIcon iconName="logo-github" iconColor="black" />
      <TouchableIcon iconName="logo-apple" iconColor="gray" />
    </View>
  )
}

export default Tab1Screen
