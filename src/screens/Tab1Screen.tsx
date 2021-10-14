import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab1Screen = () => {
	useEffect(() => {
		console.log('Tab1Screen effect');
	}, []);

	return (
		<View style={styles.globalMargin}>
			<Text style={styles.title}>Iconos</Text>

			<Icon name="rocket" size={30} color="orange" />
			<Icon name="airplane" size={30} color="gray" />
			<Icon name="alarm" size={30} color="red" />
			<Icon name="bicycle" size={30} color="grey" />
			<Icon name="bus" size={30} color="red" />
			<Icon name="cube" size={30} color="red" />
			<Icon name="flash" size={30} color="orange" />
			<Icon name="headset" size={30} color="grey" />
			<Icon name="hammer" size={30} color="red" />
			<Icon name="location" size={30} color="red" />
			<Icon name="nuclear" size={30} color="blue" />
			<Icon name="server" size={30} color="red" />
			<Icon name="sunny" size={30} color="orange" />
			<Icon name="logo-react" size={30} color="skyblue" />
			<Icon name="logo-nodejs" size={30} color="green" />
			<Icon name="logo-electron" size={30} color="blue" />
			<Icon name="logo-github" size={30} color="black" />
			<Icon name="logo-apple" size={30} color="gray" />
		</View>
	);
};

export default Tab1Screen;
