import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

const Pagina1Screen = ({navigation}: Props) => {
	return (
		<View style={styles.globalMargin}>
			<Text style={styles.title}>Pagina1 Screen</Text>
			<Button title="Ir a página 2" onPress={() => navigation.navigate('Pagina2Screen')} />
			<Text style={{marginVertical: 15}}>Navegar con argumentos</Text>
			<View style={{flexDirection: 'row', marginTop: 5}}>
				<TouchableOpacity
					style={styles.btnBar}
					onPress={() => {
						navigation.navigate('PersonaScreen', {
							id: 1,
							nombre: 'Pedro'
						});
					}}>
					<Text style={styles.txtBtnBar}>Pedro</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={{...styles.btnBar, backgroundColor: '#5856D6'}}
					onPress={() => {
						navigation.navigate('PersonaScreen', {
							id: 2,
							nombre: 'Maria'
						});
					}}>
					<Text style={styles.txtBtnBar}>Maria</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={{...styles.btnBar, backgroundColor: '#FF9427'}}
					onPress={() =>
						navigation.navigate('PersonaScreen', {
							id: 3,
							nombre: 'Carlos'
						})
					}>
					<Text style={styles.txtBtnBar}>Carlos</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Pagina1Screen;
