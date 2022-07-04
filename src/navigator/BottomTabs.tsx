import React from 'react'
import { Platform } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Tab1Screen from '../screens/Tab1Screen'
import StackNavigator from './StackNavigator'
import { colors } from '../theme/appTheme'
import TopTabs from './TopTabs'
import Icon from 'react-native-vector-icons/Ionicons'

// Navigator Bottom por Defecto
const BottomTabDefault = createBottomTabNavigator()

// Navigator Bottom con efecto de Material
const BottomTabMaterial = createMaterialBottomTabNavigator()

const BottomTabs = () => {
  if (Platform.OS === 'ios') {
    return <BottomTabsDefault />
  }
  if (Platform.OS === 'android') {
    return <BottomTabsMaterial />
  }
  return <BottomTabsDefault />
}

const BottomTabsDefault = () => {
  return (
    <BottomTabDefault.Navigator
      initialRouteName="Tab1Screen"
      sceneContainerStyle={{ backgroundColor: 'white' }}
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0
        },
        tabBarLabelStyle: {
          fontSize: 15
        }
      }}
    >
      <BottomTabDefault.Screen
        name="Tab1Screen"
        options={{
          tabBarLabel: 'Tab1',
          tabBarIcon: ({ color, size }) => <Icon name="desktop" color={color} size={size} />,
          headerShown: false
        }}
        component={Tab1Screen}
      />
      <BottomTabDefault.Screen
        name="TopTabs"
        options={{
          tabBarLabel: 'TopTabs',
          tabBarIcon: ({ color, size }) => <Icon name="calculator" color={color} size={size} />,
          headerShown: false
        }}
        component={TopTabs}
      />
      <BottomTabDefault.Screen
        name="StackNavigator"
        options={{
          tabBarLabel: 'Navigator',
          tabBarIcon: ({ color, size }) => <Icon name="git-network" color={color} size={size} />,
          headerShown: false
        }}
        component={StackNavigator}
      />
    </BottomTabDefault.Navigator>
  )
}

const BottomTabsMaterial = () => {
  return (
    <BottomTabMaterial.Navigator
      initialRouteName="Tab1Screen"
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colors.primary
      }}
    >
      <BottomTabMaterial.Screen
        name="Tab1Screen"
        options={{
          tabBarLabel: 'Tab1',
          tabBarIcon: ({ color }) => <Icon name="desktop" color={color} size={24} />
        }}
        component={Tab1Screen}
      />
      <BottomTabMaterial.Screen
        name="TopTabs"
        options={{
          tabBarLabel: 'TopTabs',
          tabBarIcon: ({ color }) => <Icon name="calculator" color={color} size={24} />
        }}
        component={TopTabs}
      />
      <BottomTabMaterial.Screen
        name="StackNavigator"
        options={{
          tabBarLabel: 'Navigator',
          tabBarIcon: ({ color }) => <Icon name="git-network" color={color} size={24} />
        }}
        component={StackNavigator}
      />
    </BottomTabMaterial.Navigator>
  )
}

export default BottomTabs
