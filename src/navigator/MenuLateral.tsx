import React from 'react'
import { Image, Text, useWindowDimensions, View, TouchableOpacity } from 'react-native'
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer'
import SettingScreen from '../screens/SettingScreen'
import { styles } from '../theme/appTheme'
import BottomTabs from './BottomTabs'
import Icon from 'react-native-vector-icons/Ionicons'

const Drawer = createDrawerNavigator()

const MenuLateral = () => {
  const { width } = useWindowDimensions()

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front'
      }}
      drawerContent={props => <MenuInterno {...props} />}
    >
      <Drawer.Screen name="BottomTabs" options={{ title: 'Home' }} component={BottomTabs} />
      <Drawer.Screen name="SettingScreen" options={{ title: 'Settings' }} component={SettingScreen} />
    </Drawer.Navigator>
  )
}

const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://www.tsensor.online/wp-content/uploads/2020/04/avatar-icon-png-105-images-in-collection-page-3-avatarpng-512_512.png'
          }}
          style={styles.avatar}
        />
      </View>
      <View style={styles.menuContainer}>
        <View style={styles.menuItem}>
          <TouchableOpacity onPress={() => navigation.navigate('BottomTabs')} style={styles.menuItemTouchable}>
            <Icon name="desktop" color={'red'} size={20} style={{ marginRight: 6 }} />
            <Text style={{ lineHeight: 20 }}>Home</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.menuItem}>
          <TouchableOpacity onPress={() => navigation.navigate('SettingScreen')} style={styles.menuItemTouchable}>
            <Icon name="settings" color={'red'} size={20} style={{ marginRight: 6 }} />
            <Text style={{ lineHeight: 20 }}>Settings</Text>
          </TouchableOpacity>
        </View>
      </View>
    </DrawerContentScrollView>
  )
}

export default MenuLateral
