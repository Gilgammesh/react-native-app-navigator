import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../theme/appTheme'
import { AuthContext } from '../context/AuthContext'

interface TouchableIconProps {
  iconName: string
  iconSize?: number
  iconColor?: string
}

const TouchableIcon = ({ iconName, iconSize = 30, iconColor = colors.primary }: TouchableIconProps) => {
  const { selectIcon } = useContext(AuthContext)

  return (
    <TouchableOpacity onPress={() => selectIcon(iconName)}>
      <Icon name={iconName} size={iconSize} color={iconColor} />
    </TouchableOpacity>
  )
}

export default TouchableIcon
