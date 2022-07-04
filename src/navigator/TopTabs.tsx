import React from 'react'
import { LogBox, Platform } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import ChatScreen from '../screens/ChatScreen'
import ContactsScreen from '../screens/ContactsScreen'
import AlbumScreen from '../screens/AlbumScreen'
import { colors } from '../theme/appTheme'
import Icon from 'react-native-vector-icons/Ionicons'

if (Platform.OS === 'ios') {
  LogBox.ignoreLogs(['Sending'])
}

const Tab = createMaterialTopTabNavigator()

const TopTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="ChatScreen"
      sceneContainerStyle={{ backgroundColor: 'white' }}
      screenOptions={{
        tabBarPressColor: colors.primary,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary
        }
      }}
    >
      <Tab.Screen
        name="ChatScreen"
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({ color }) => <Icon name="chatbox" color={color} size={24} />
        }}
        component={ChatScreen}
      />
      <Tab.Screen
        name="ContactsScreen"
        options={{
          tabBarLabel: 'Contacts',
          tabBarIcon: ({ color }) => <Icon name="person" color={color} size={24} />
        }}
        component={ContactsScreen}
      />
      <Tab.Screen
        name="AlbumScreen"
        options={{
          tabBarLabel: 'Album',
          tabBarIcon: ({ color }) => <Icon name="camera" color={color} size={24} />
        }}
        component={AlbumScreen}
      />
    </Tab.Navigator>
  )
}

export default TopTabs
