import { View, StyleSheet, Pressable } from 'react-native';
import Text from './Text';
import Constants from 'expo-constants';
import theme from '../theme';

const styles = StyleSheet.create({
	container: {
		paddingTop: Constants.statusBarHeight,
		paddingBottom: Constants.statusBarHeight / 2,
		paddingLeft: Constants.statusBarHeight,
		backgroundColor: theme.colors.textPrimary,
	},
});

const AppBar = () => {
	return (
		<View style={styles.container}>
			<Pressable>
				<Text
					style={{ color: 'white' }}
					subheading="subheading"
					fontWeight="bold"
				>
					Repositories
				</Text>
			</Pressable>
		</View>
	);
};

export default AppBar;
