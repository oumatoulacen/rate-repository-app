import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';
import { ScrollView } from 'react-native';

const styles = StyleSheet.create({
	container: {
		paddingTop: Constants.statusBarHeight,
		paddingBottom: Constants.statusBarHeight / 2,
		backgroundColor: theme.colors.textPrimary,
	},
	contentContainer: {
		paddingHorizontal: Constants.statusBarHeight / 2,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexGrow: 1,
	},
});

const AppBar = () => {
	return (
		<View style={styles.container}>
			<ScrollView
				horizontal
				contentContainerStyle={styles.contentContainer}
				showsHorizontalScrollIndicator={false}
			>
				<AppBarTab to="/" text="Repositories" />
				<AppBarTab to="/signin" text="Sign in" />
			</ScrollView>
		</View>
	);
};

export default AppBar;
