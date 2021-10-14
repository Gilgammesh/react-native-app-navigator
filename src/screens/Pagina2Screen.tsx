import React, {useEffect} from 'react';
import {Button, View, Text} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

const Pagina2Screen = ({navigation}: Props) => {
	useEffect(() => {
		navigation.setOptions({
			title: 'Hola Mundo',
			headerBackTitle: ''
		});
	}, [navigation]);

	return (
		<View style={styles.globalMargin}>
			<Text style={styles.title}>Pagina2 Screen</Text>
			<Button title="Regresar" onPress={() => navigation.pop()} />
			<Button title="Ir a página 3" onPress={() => navigation.navigate('Pagina3Screen')} />
		</View>
	);
};

export default Pagina2Screen;
