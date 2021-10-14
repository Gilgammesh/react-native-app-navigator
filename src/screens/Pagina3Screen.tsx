import React from 'react';
import {Button, View, Text} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

const Pagina3Screen = ({navigation}: Props) => {
	return (
		<View style={styles.globalMargin}>
			<Text style={styles.title}>Pagina3 Screen</Text>
			<Button title="Regresar" onPress={() => navigation.pop()} />
			<Button title="Ir a página 1" onPress={() => navigation.popToTop()} />
		</View>
	);
};

export default Pagina3Screen;