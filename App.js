import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {
	return (
		<ImageBackground
			source={require('./assets/background.jpg')}
			style={styles.image}
		>
			<View style={styles.container}>
				<Text>Welcome To the Show</Text>
				<StatusBar style="auto" />
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#d57373ff',
		color: 'red',
		alignItems: 'center',
		justifyContent: 'center',
	},
	image: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
